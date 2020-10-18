import { AppState, Story } from '@types';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export const useFormattedStories = (): Story[] => {
  const storyList = useSelector<AppState, Story[]>(
    (state) => state.searchResult.data
  );

  const hiddenStories = useSelector<AppState, string[]>(
    (state) => state.storyHiddenStatusMap
  );
  const upvotedStories = useSelector<AppState, Record<string, number>>(
    (state) => state.storyUpvoteCountMap
  );

  const stories = useMemo(
    () =>
      storyList
        .filter((story) => !hiddenStories.includes(story.objectID))
        .map((story) => ({
          ...story,
          points: story.points + (upvotedStories[story.objectID] || 0),
        })),
    [hiddenStories, upvotedStories, storyList]
  );

  return stories;
};
