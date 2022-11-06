import React, { useState } from "react";
import { Button, Icon } from "@chakra-ui/react";
import { BsFillMicFill, BsFillMicMuteFill } from 'react-icons/bs';

const Microphone: React.FC<{
  localStream: MediaStream;
}> = ({localStream}) => {
  const [micEnabled, setMicEnabled] = useState(true);

  const handleToggleMic = () => {
    localStream.getAudioTracks().forEach((track) => track.enabled = !track.enabled);
    setMicEnabled(!micEnabled);
  };

  return (
    <Button
      variant='ghost'
      width="40px"
      borderRadius="50%"
      onClick={handleToggleMic}
    >
      {!micEnabled
        ? <Icon as={BsFillMicFill} m={2}></Icon>
        : <Icon as={BsFillMicMuteFill} m={2}></Icon>
      }
    </Button>
  );
};

export default Microphone;
