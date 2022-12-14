import { Avatar, Flex, Spinner, Tag, Text, WrapItem } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import moment from "moment";
import React, { useEffect } from "react";
import { Message, User } from "../graphql/generated/schema";
import BeatLoader from "react-spinners/BeatLoader";

interface MessageProps {
  message: Message & { isTyping: boolean, users: User[]};
  isMine: Boolean;
  key: String;
}

export const MessageBox: React.FC<MessageProps> = ({
  message,
  isMine,
}) => {
  if (message.isTyping) {
    return (
      <Flex px={6} py={1}>
        <Flex mb={1} alignItems="center">
          {message.users?.map(usr => (
            <>
              <Text fontSize="12px" color="blue.300" mr={1}>{usr.username} is typing</Text>
              <BeatLoader size={5} color='#63B3ED' margin={1} speedMultiplier={0.5}/>
            </>
          ))}
        </Flex>
      </Flex>
    )
  }

  return (
    <Flex px={6} py={1}>
      {!isMine && (
        <Flex mr={2}>
          <WrapItem>
            <Avatar
              name={message.fromUser.username || message.fromUser.email}
              src={message.fromUser.photo}
            />
          </WrapItem>
        </Flex>
      )}
      <Flex flexDirection="column" width="100%">
        <Text
          color="grey"
          fontSize={12}
          ml={isMine ? "auto" : undefined}
          mr={isMine ? undefined : "auto"}
        >
          {moment(message?.createdAt).format("hh:mm A")}
        </Text>
        <Flex
          bg={isMine ? "blue.50" : "gray.50"}
          py={2}
          px={6}
          alignItems="center"
          borderRadius={12}
          boxShadow="0 2px 2px #0f0f0f0f"
          ml={isMine ? "auto" : undefined}
          mr={isMine ? undefined : "auto"}
        >
          <Text fontSize={15} maxWidth={400} sx={{ whiteSpace: 'pre-wrap' }}>
            {message?.text}
          </Text>
          {message.isUnsent && (
            <Spinner size='xs' ml={2} />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
