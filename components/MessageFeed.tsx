import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Virtuoso } from 'react-virtuoso';
import { GetMeQuery, MessagesQuery } from "../graphql/generated/schema";
import CustomScrollbar from "./CustomScrollBar";
import { MessageBox } from "./MessageBox";

export type UnsentMessageProps = {};
export type MessageFeedProps = {
  messages: MessagesQuery[];
  me?: GetMeQuery;
  hasNextPage: boolean
};

const START_INDEX = 300;
const MessageFeed: React.FC<MessageFeedProps> = ({
  me,
  messages,
  startReached,
}) => {
  const messagesLength = messages[messages.length - 1]?.isTyping ? messages.length - 1 : messages.length;
  const [firstItemIndex, setFirstItemIndex] = useState(START_INDEX - messagesLength);
  const internalMessages = useMemo(() => {
    const nextFirstItemIndex = START_INDEX - messagesLength
    setFirstItemIndex(nextFirstItemIndex);
    return messages;
  }, [messages, messagesLength]);

  const followOutput = useCallback((isAtBottom) => {
    return isAtBottom ? 'smooth' : false;
  }, []);

  return (
    <Virtuoso
      components={{
        Scroller: CustomScrollbar
      }}
      data={messages}
      overscan={{ main: 0, reverse: 300 }}
      itemContent={(_, message) => (<MessageBox message={message} isMine={me?.id === message?.from}/>)}
      startReached={startReached}
      followOutput={followOutput}
      initialTopMostItemIndex={internalMessages.length - 1}
      firstItemIndex={Math.max(0, firstItemIndex)}
      alignToBottom={true}
      style={{ flex: '1 1 auto', overscrollBehavior: 'contain' }}
    />
  )

  // return (
  //   <ScrollableFeed>
  //     <Box p={3}>
  //       {messages?.map((message: any, key) => (
  //         <MessageBox
  //           message={message}
  //           isMine={me?.id === message?.from}
  //           isUnsent={false}
  //           key={key}
  //         />
  //       ))}
  //       {unsentMessages?.map((message: any, key) => (
  //         <MessageBox
  //           message={message}
  //           isMine={me?.id === message?.from}
  //           isUnsent={true}
  //           key={key}
  //         />
  //       ))}
  //     </Box>
  //   </ScrollableFeed>
  // );
};

export default MessageFeed;
