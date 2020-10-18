import { COLORS_MAP } from '@src/constants';
import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${COLORS_MAP.pumpkin};
  }
`;
