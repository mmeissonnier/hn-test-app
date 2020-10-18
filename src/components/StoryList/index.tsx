import { RequestStatus, Story } from '@src/types';
import styled from 'styled-components';
import { StoryLine } from '../StoryLine';
import { StoryListHeader } from '../StoryListHeader';
import { LayoutBox } from '../LayoutBox';
import { Button } from '../Button';
import React, { FC } from 'react';
import { COLORS_MAP } from '@src/constants';

type StoryListProps = {
  stories: Story[];
  onUpvote: (id: string) => void;
  onHide: (id: string) => void;
  onClickMore: () => void;
  status: RequestStatus;
};

const Container = styled.ul`
  display: table;
  width: 100%;
  margin-bottom: 20px;
`;

const Header = styled.header`
  display: flex;
  height: 56px;
  padding: 4px;
  background-color: ${COLORS_MAP.pumpkin};
  img {
    display: block;
    width: 48px;
    align-self: center;
  }
`;

export const StoryList: FC<StoryListProps> = ({
  stories,
  onUpvote,
  onHide,
  status,
  onClickMore,
}: StoryListProps) => {
  return (
    <LayoutBox flexDirection="column" justifyContent="center">
      <Header>
        <img
          src="//d3nb9u6x572n0.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png"
          alt="hn logo"
        />
      </Header>
      <Container>
        <StoryListHeader />
        {stories.map((story) => (
          <StoryLine
            data={story}
            onUpvote={onUpvote}
            key={story.objectID}
            onHide={onHide}
          />
        ))}
      </Container>
      <Button disabled={status === 'pending'} onClick={onClickMore}>
        <strong>More</strong>
      </Button>
    </LayoutBox>
  );
};
