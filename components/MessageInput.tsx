import { Box, Button, Flex, Popover, PopoverContent, PopoverTrigger, Portal, useBoolean } from "@chakra-ui/react";
import React, { useCallback, useRef, useState } from "react";
import EmojiPicker from 'emoji-picker-react';
import { AutoResizeTextarea } from "./AutoResizeTextarea";

const MessageInput = (props) => {
  const inputRef = useRef();
  const [show, setShow] = useBoolean();

  const pickEmoji = useCallback(({ emoji }, event) => {
    const start = inputRef.current?.value.substring(0, inputRef.current?.selectionStart);
    const end = inputRef.current?.value.substring(inputRef.current?.selectionEnd);
    inputRef.current.value = start + emoji + end;
    inputRef.current.selectionEnd = start.length + emoji.length;
    inputRef.current.focus();
  }, [inputRef.current])

  return (
    <Flex>
      <AutoResizeTextarea {...props} ref={inputRef} />
      <Box as="span">
        <Popover placement='top-end' isOpen={show}>
          <PopoverTrigger>
            <Button variant='ghost' onClick={setShow.toggle} width="40px" borderRadius="50%">
              {String.fromCodePoint(0x1f60a)}
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              {show && <EmojiPicker
                onEmojiClick={pickEmoji}
                lazyLoadEmojis={true}
                previewConfig={{ showPreview: false }}
                emojiStyle="apple"
                width={340}
              />}
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
    </Flex>
  )
}

export default MessageInput;