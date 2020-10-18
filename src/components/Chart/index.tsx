import { ChartData } from '@src/types';
import React, { FC } from 'react';
import styled from 'styled-components';
import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type ChartProps = {
  data: ChartData;
};

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  .recharts-text.recharts-label {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Chart: FC<ChartProps> = ({ data }: ChartProps) => (
  <StyledResponsiveContainer width="100%" height={300}>
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ bottom: 100, top: 20, right: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" angle={-90} dy={30}>
        <Label value="ID" offset={60} position="bottom" />
      </XAxis>
      <YAxis>
        <Label
          value="Votes"
          offset={15}
          position="insideLeft"
          angle={-90}
          dy={20}
        />
      </YAxis>
      <Tooltip labelFormatter={(value) => `ID: ${value}`} />
      <Line type="monotone" dataKey="votes" stroke="#8884d8" />
    </LineChart>
  </StyledResponsiveContainer>
);
