import styled, { StyleSheetManager } from 'styled-components';
import React, { PropsWithChildren, FC } from 'react';

type LayoutBoxProps = {
  className?: string;
  css?: string;
  flex?: number;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretched' | 'baseline';
  alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'stretched' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch';
  padding?: string;
  margin?: string;
  shadow?: string;
};

const StyledElement = styled.div<LayoutBoxProps>`
  display: flex;
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  align-self: ${(props) => props.alignSelf};
  justify-content: ${(props) => props.justifyContent};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  box-shadow: ${(props) => props.shadow};
`;

export const LayoutBox: FC<PropsWithChildren<LayoutBoxProps>> = ({
  css,
  className,
  children,
  ...rest
}: PropsWithChildren<LayoutBoxProps>) => (
  <StyleSheetManager disableVendorPrefixes>
    <StyledElement className={className} css={css} {...rest}>
      {children}
    </StyledElement>
  </StyleSheetManager>
);
