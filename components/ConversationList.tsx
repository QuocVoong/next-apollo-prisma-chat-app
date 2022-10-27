import { Avatar, Box, Flex, WrapItem, Text } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { GetMeQuery } from "../graphql/generated/schema";
import moment from "moment";

type Paticipants = {
  id: string,
  type: string,
  userId: string,
  conversationId: string
}

type Message = {
  id: string,
  text: string,
  from: string,
}

export type Conversation = {
  id: string,
  name: string,
  secondaryName?: string,
  photo?: string,
  creatorId: string,
  Message?: Message,
  Paticipants: Paticipants[],
}

type ConversationProps = {
  conversations: Conversation[],
  selectedConversation: Conversation,
  onSelectConversation: Function,
  me: GetMeQuery,
}

export const getConversationName = (conversation: Conversation, currentUser: any) => {
  const isSingle = conversation?.Paticipants?.some(item => item.type === 'SINGLE');
  return (isSingle && conversation.creatorId !== currentUser?.id) ? conversation.secondaryName : conversation.name;
}

const ConversationList: React.FC = (props: ConversationProps) => {
  const { conversations, selectedConversation, onSelectConversation, me } = props;

  return (
    <Flex
      h="100%"
      my={2}
      direction="column"
      cursor="pointer"
    >
      <Text color="gray">Recently</Text>
      {conversations?.map(con => (
        <Flex
          key={con.id}
          w="100%"
          bg={con.id === selectedConversation?.id ? "gray.300" : 'none'}
          _hover={{
            bg: "gray.100"
          }}
          p={2}
          mb={0.5}
          borderRadius={4}
          onClick={() => onSelectConversation(con)}
        >
          <WrapItem>
            <Avatar name={getConversationName(con, me)} src={con.photo} />
          </WrapItem>
          <Flex ml={1} grow={1} overflowX="hidden" direction="column">
            <Flex w="100%" justify="space-between">
              <Text fontSize='lg' noOfLines={1}>{getConversationName(con, me)}</Text>
              <Text color="grey" fontSize={12} mr={1}>{moment(con.Message?.[0]?.updatedAt).format("hh:mm A")}</Text>
            </Flex>
            <Text fontSize='md' color="grey" noOfLines={1}>{con.Message?.[0]?.text}</Text>
          </Flex>
        </Flex>
      ))}
    </Flex>)
}

export default ConversationList;
