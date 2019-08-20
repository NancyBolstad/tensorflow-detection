import * as React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const Loading = ({
  type = 'bubbles',
  color = '#fff',
  delay = 1000,
  height = 64,
  width = 64,
}: Props) => {
  return (
    <LoadingWrapper width={width} height={height}>
      <ReactLoading type={type} color={color} delay={delay} height={height} width={width} />
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled('div')<{
  width: number;
  height: number;
}>`
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

interface Props {
  type?:
    | 'blank'
    | 'balls'
    | 'bars'
    | 'bubbles'
    | 'cubes'
    | 'cylon'
    | 'spin'
    | 'spinningBubbles'
    | 'spokes';
  color?: string;
  delay?: number;
  height?: number;
  width?: number;
}

export default Loading;
