import React, { FC } from 'react';
import styled from 'styled-components';
import { Label } from '../Label';

const Cell = styled.div`
  padding: 0 4px;
  margin: 2px 0;
  text-align: center;
`;

const Row = styled.li`
  display: none;
  height: 40px;
  padding: 10px 0;

  @media screen and (min-width: 800px) {
    display: table-row;

    ${Cell} {
      display: table-cell;
      vertical-align: middle;
    }
  }
`;

export const StoryListHeader: FC = () => {
  return (
    <Row>
      <Cell>
        <Label size="tiny">
          <strong>Number of comments</strong>
        </Label>
      </Cell>
      <Cell>
        <Label size="tiny">
          <strong>Points</strong>
        </Label>
      </Cell>
      <Cell>
        <Label size="tiny">
          <strong>Title (domain)</strong>
        </Label>
      </Cell>
      <Cell>
        <Label size="tiny">
          <strong>Author</strong>
        </Label>
      </Cell>
      <Cell>
        <Label size="tiny">
          <strong>Post date</strong>
        </Label>
      </Cell>
      <Cell></Cell>
    </Row>
  );
};
