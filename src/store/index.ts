import {
  configureStore,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { AppState } from '@types';
import { API_FETCH_STORIES } from '@src/constants';
import { createWrapper, MakeStore, HYDRATE } from 'next-redux-wrapper';

const initialState: AppState = {
  storyUpvoteCountMap: {},
  storyHiddenStatusMap: [],
  status: 'pending',
  searchResult: { nbPages: 0, data: [], hitsPerPage: 0, page: 0 },
};

export const fetchStories = createAsyncThunk(
  'stories/fetch',
  async (page: number) => {
    try {
      const response = await fetch(`${API_FETCH_STORIES}&page=${page}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    upVoteStory: (state, action: PayloadAction<string>) => {
      const story = state.searchResult.data.find(
        (s) => s.objectID === action.payload
      );
      if (story) {
        const upvoteCount = state.storyUpvoteCountMap[story.objectID] || 0;
        if (upvoteCount < 10) {
          state.storyUpvoteCountMap[story.objectID] = upvoteCount + 1;
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem(
              '@hn-test.storyUpvoteCountMap',
              JSON.stringify(state.storyUpvoteCountMap)
            );
          }
        }
      }
    },
    hideStory: (state, action: PayloadAction<string>) => {
      const story = state.searchResult.data.find(
        (s) => s.objectID === action.payload
      );
      if (story) {
        state.storyHiddenStatusMap.push(story.objectID);
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(
            '@hn-test.storyHiddenStatusMap',
            JSON.stringify(state.storyHiddenStatusMap)
          );
        }
      }
    },
    clearStories: (state) => {
      state.searchResult.data = [];
    },
  },
  extraReducers: {
    [fetchStories.fulfilled.toString()]: (state, action) => {
      state.status = 'success';
      state.searchResult.nbPages = action.payload.nbPages;
      state.searchResult.page = action.payload.page;
      state.searchResult.hitsPerPage = action.payload.hitsPerPage;
      state.searchResult.data = state.searchResult.data.concat(
        action.payload.hits
      );
    },
    [fetchStories.pending.toString()]: (state) => {
      state.status = 'pending';
    },
    [HYDRATE]: (state, action: PayloadAction<AppState>) => {
      state.searchResult = action.payload.searchResult;
      state.status = 'success';
      state.storyUpvoteCountMap =
        typeof localStorage !== 'undefined'
          ? JSON.parse(
              localStorage.getItem('@hn-test.storyUpvoteCountMap') || '{}'
            )
          : {};
      state.storyHiddenStatusMap =
        typeof localStorage !== 'undefined'
          ? JSON.parse(
              localStorage.getItem('@hn-test.storyHiddenStatusMap') || '[]'
            )
          : [];
    },
  },
});

// create a makeStore function
const store = configureStore({ reducer: storiesSlice.reducer });
const makeStore: MakeStore<AppState> = () => store;

// export an assembled wrapper
export const wrapper = createWrapper<AppState>(makeStore, { debug: false });
export const { upVoteStory, hideStory, clearStories } = storiesSlice.actions;
export default store;
