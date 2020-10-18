import React from 'react';
import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoryList } from '@components';
import { fetchStories, upVoteStory, hideStory } from '@src/store';
import { AppState, RequestStatus } from '@src/types';
import { useFormattedStories } from '@hooks';

export const StoriesContainer: FC = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector<AppState, number>(
    (state) => state.searchResult.page
  );

  const stories = useFormattedStories();
  const status = useSelector<AppState, RequestStatus>((state) => state.status);

  const upvoteHandler = useCallback(
    (id: string) => {
      dispatch({ type: upVoteStory.toString(), payload: id });
    },
    [dispatch]
  );

  const hideHandler = useCallback(
    (id: string) => {
      dispatch({ type: hideStory.toString(), payload: id });
    },
    [dispatch]
  );

  const cllickMoreHandler = useCallback(() => {
    dispatch(fetchStories(currentPage + 1));
  }, [currentPage, dispatch]);

  return (
    <StoryList
      stories={stories}
      onUpvote={upvoteHandler}
      onHide={hideHandler}
      onClickMore={cllickMoreHandler}
      status={status}
    />
  );
};
