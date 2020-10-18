import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { Story } from '@types';
import { Label } from '../Label';
import { Button } from '../Button';
import { getDomainFromURL, getFormattedDiffFromNow } from '@utils';

type LineProps = {
  data: Story;
  onUpvote: (id: string) => void;
  onHide: (id: string) => void;
};

const Cell = styled.div`
  padding: 0 4px;
  margin: 2px 0;
`;

const Row = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  ${Cell} {
    &:nth-child(2),
    &:nth-last-child(3) ${Label}, &:nth-last-child(2) ${Label} {
      white-space: nowrap;
    }

    &:nth-child(1),
    &:nth-child(-n + 2) {
      order: 4;
    }

    &:last-child {
      order: 8;
    }
  }

  ${Label} + ${Button} {
    margin-left: 5px;
  }

  @media screen and (min-width: 800px) {
    display: table-row;
    margin-bottom: 5px;

    ${Cell} {
      display: table-cell;
      &:nth-child(2) {
        text-align: right;
      }

      &:nth-child(-n + 2) {
        text-align: center;
      }
    }
    .hide-md {
      display: none;
    }
  }
`;

export const StoryLine: FC<LineProps> = ({
  data,
  onUpvote,
  onHide,
}: LineProps) => {
  const upvoteClickHandler = useCallback(() => {
    onUpvote(data.objectID);
  }, [data.objectID, onUpvote]);

  const hideClickHandler = useCallback(() => {
    onHide(data.objectID);
  }, [data.objectID, onHide]);
  return (
    <Row>
      <Cell>
        <Label>
          <Label size="tiny" color="grey" className="hide-md">
            Comments:
          </Label>
          {data.num_comments}
        </Label>
      </Cell>
      <Cell>
        <Label>
          <Label size="tiny" color="grey" className="hide-md">
            Points:
          </Label>
          {data.points}
        </Label>
        <Button onClick={upvoteClickHandler}>▲</Button>
      </Cell>
      <Cell>
        <Label>{data.title} </Label>
        <Label size="tiny" color="grey">
          ({getDomainFromURL(data.url)})
        </Label>
      </Cell>
      <Cell>
        <Label>
          <Label size="tiny">by</Label> {data.author}
        </Label>
      </Cell>
      <Cell>
        <Label size="tiny" color="grey">
          {getFormattedDiffFromNow(data.created_at)}
        </Label>
      </Cell>
      <Cell>
        <Button onClick={hideClickHandler}>[ Hide ]</Button>
      </Cell>
    </Row>
  );
};
