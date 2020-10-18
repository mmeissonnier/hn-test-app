import React, { FC, useMemo } from 'react';
import { Chart } from '@src/components/Chart';
import { useFormattedStories } from '@src/hooks';
import { ChartData } from '@src/types';

export const ChartContainer: FC = () => {
  const stories = useFormattedStories();
  const data: ChartData = useMemo(
    () =>
      stories.map((story) => ({ name: story.objectID, votes: story.points })),
    [stories]
  );
  return <Chart data={data} />;
};
