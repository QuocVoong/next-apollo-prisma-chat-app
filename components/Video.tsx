import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const Video: React.FC<{
  stream: MediaStream;
  isLocalStream: boolean;
}> = ({ stream, isLocalStream }) => {

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    video!.srcObject = stream;

    video!.onloadedmetadata = () => {
      video!.play()

      if (isLocalStream) {
        video!.muted = true;
        video!.volume = 0;
      }
    };

  }, [stream, isLocalStream]);

  return (
    <Box
      height="100%"
      width="100%"
      sx={{
        video: {
          width: '100%',
          height: '100%',
        }
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted={isLocalStream}
      />
    </Box>
  );
};

export default Video;
