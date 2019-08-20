import * as React from 'react';

interface IProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  options?: Partial<IOptions>;
}

interface IOptions {
  videoConstraints: {[key: string]: any};
  videoSize: {width: number; height: number};
}

const HAS_NOT_MEDIADEVICES_ERROR =
  'This browser does not support video capture, or this device does not have a camera';
const DEFAULT_CONSTRAINTS = {
  audio: false,
  video: {
    facingMode: 'user',
  },
};
const DEFAULT_OPTION: IOptions = {
  videoConstraints: DEFAULT_CONSTRAINTS,
  videoSize: {width: 500, height: 500},
};

const useMediaStream = (props: IProps) => {
  const {videoRef} = props;
  const [stream, setStream] = React.useState<MediaStream | null>(null);
  const options = {...DEFAULT_OPTION, ...props.options};

  React.useEffect(() => {
    if (stream) stream.getTracks().forEach(track => track.stop());
    if (!navigator.mediaDevices) {
      throw new Error(HAS_NOT_MEDIADEVICES_ERROR);
    }
    watchMediaStream();
  }, []);

  React.useEffect(() => {
    const video = videoRef.current;
    if (video) video.srcObject = stream;
  }, [stream]);

  const watchMediaStream = React.useCallback(async () => {
    const mediaStream = await navigator.mediaDevices
      .getUserMedia(options.videoConstraints)
      .catch(e => {
        throw new Error(e);
      });
    setStream(mediaStream);
  }, [options.videoConstraints]);

  return {};
};

export default useMediaStream;
