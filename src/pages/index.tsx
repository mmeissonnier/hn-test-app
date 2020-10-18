import React, { FC } from 'react';
import { StoriesContainer, ChartContainer } from '@containers';
import { GetServerSideProps } from 'next';
import { clearStories, fetchStories, wrapper } from '@store';
import { LayoutBox } from '@src/components';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AppState } from '@src/types';

const Home: FC = () => {
  return (
    <>
      <StoriesContainer />
      <LayoutBox margin="50px 0 0 0">
        <ChartContainer />
      </LayoutBox>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch as ThunkDispatch<AppState, void, AnyAction>;
    await dispatch({ type: clearStories.toString() });
    await dispatch(fetchStories(0));
    return {};
  }
);
