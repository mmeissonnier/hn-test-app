import { COLORS_MAP } from '@src/constants';
import styled from 'styled-components';

type StyledLabelProps = {
  size?: 'normal' | 'tiny';
  color?: 'black' | 'grey' | 'pumpkin';
  padding?: string;
  margin?: string;
};

export const Label = styled.span<StyledLabelProps>`
  font-size: ${({ size = 'normal' }) => (size === 'tiny' ? '1rem' : '1.4rem')};
  color: ${({ color = 'black' }) => COLORS_MAP[color]};
  padding: ${({ padding = '0' }) => padding};
  margin: ${({ margin = '0' }) => margin};
`;
