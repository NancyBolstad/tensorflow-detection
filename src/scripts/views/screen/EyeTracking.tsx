import * as React from 'react';
import styled from 'styled-components';

import useMediaStream from '../../hooks/useMediaStream';
import usePoseDetection, {IEyesPotion} from '../../hooks/usePoseDetection';

const COEFFICIENT = 1.5;

const EyeTracking = () => {
  const [videoSize] = React.useState<{width: number; height: number}>({width: 600, height: 600});
  const videoRef = React.useRef<HTMLVideoElement>(null);
  React.useEffect(() => {}, [videoRef]);
  useMediaStream({videoRef, options: {videoSize}});
  const {eyesPotions} = usePoseDetection({videoRef});
  return (
    <Wrapper>
      <Video ref={videoRef} autoPlay={true} width={videoSize.width} height={videoSize.height} />
      <Eyes eyesPotions={eyesPotions} />
    </Wrapper>
  );
};

const Eyes = ({eyesPotions}: {eyesPotions: IEyesPotion}) => {
  const {left, right} = eyesPotions;
  return (
    <EyesWrapper>
      <Eye x={left.x * 100} y={left.y * 100} />
      <Eye x={right.x * 100} y={right.y * 100} />
    </EyesWrapper>
  );
};

const Eye = ({x, y}: {x: number; y: number}) => {
  return (
    <WhiteEye width={200} height={200}>
      <BlackEye width={100} height={100} x={x} y={y} />
    </WhiteEye>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Video = styled.video`
  visibility: hidden;
  position: absolute;
`;

const EyesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > *:nth-child(n + 2) {
    margin-left: 12px;
  }
`;

const StyledEye = styled.div<{
  width: number;
  height: number;
}>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 50%;
`;

const WhiteEye = styled(StyledEye)`
  background-color: #fff;
  position: relative;
`;

const BlackEye = styled(StyledEye)<{
  x: number;
  y: number;
}>`
  background-color: #000;
  transform: translateX(${props => -(props.x * COEFFICIENT || 50)}%)
    translateY(${props => -((100 - props.y) * COEFFICIENT || 50)}%);
  position: absolute;
  top: 50%;
  left: 50%;
`;

export default EyeTracking;
