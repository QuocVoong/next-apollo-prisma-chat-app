import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Input,
  Text,
  WrapItem,
  Icon,
  Stack,
  Button,
  useToast,
  useDisclosure,
  InputGroup,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import { Search2Icon, AddIcon } from '@chakra-ui/icons'
import { BsThreeDotsVertical } from 'react-icons/bs'
import moment from "moment";
import { disconnect, sendMessage as sendSocketMessage } from "../chatService";
import { isAuth } from "../lib/isAuth";
import {
  useConversationLazyQuery,
  useConversationsQuery,
  useCreateOneMessageMutation,
  useMessagesQuery, useUsersLazyQuery,
  useUsersQuery
} from "../graphql/generated/schema";
import MessageFeed from "../components/MessageFeed";
import ConversationList, { Conversation, getConversationName } from "../components/ConversationList";
import { connect } from "../chatService";
import { concat } from "lodash";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { AutoResizeTextarea } from "../components/AutoResizeTextarea";
import GroupConversationForm from "../components/GroupConversationForm";

const Chat: React.FC = () => {
  const socket = useRef();
  const { me, token } = isAuth();
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedConversation, setSelectedConversation] = useState();
  const [selectedFindingUser, setSelectedFindingUser] = useState();
  const [searchText, setSearchText] = useState<string>();
  const [messages, setMessages] = useState<any>([]);
  const [sendMessage] = useCreateOneMessageMutation({});
  const [users, setUsers] = useState([]);

  const [fetchUser, { loading: userLoading, data: userData, fetchMore: fetchMoreUser }] = useUsersLazyQuery({
    fetchPolicy: "no-cache"
  })

  const { data: conversationsData } = useConversationsQuery({
    variables: {
      "where": {
        "Paticipants": {
          "some": {
            "userId": {
              "equals": me?.id
            }
          }
        }
      },
      "messageTake2": 1,
      "messageSkip2": 0,
      "orderBy": [
        {
          "updatedAt": "desc"
        }
      ],
      take: 100,
      skip: 0,
    },
    skip: !me,
    onCompleted: (result) => {
      setSelectedConversation(result.conversations[0]);
    }
  });

  const [findConversation, { data: findingConversationData }] = useConversationLazyQuery({
    onCompleted: (result) => {
      setSelectedConversation(result?.findFirstConversation);
      setMessages([]);
    }
  });

  const { data: messagesData, refetch: refreshMessages, fetchMore: fetchMoreMessages } = useMessagesQuery({
    variables: {
      where: {
        conversationId: {
          "equals": selectedConversation?.id
        }
      },
      orderBy: [
        {
          createdAt: 'desc'
        }
      ],
      skip: 0,
      take: 20,
    },
    skip: !selectedConversation,
    onCompleted: (result) => {
      setMessages(result.messages.slice().sort((a, b) => a.createdAt > b.createdAt ? 1 : a.createdAt < b.createdAt ? -1 : 0));
    }
  });
  useEffect(() => {
    if (!socket.current && conversationsData?.conversations) {
      socket.current = connect(token, {});
    }

    socket?.current?.on('connect', () => {
      socket?.current?.emit('user_join', conversationsData?.conversations?.map(con => con.id));
    });

    socket?.current?.on('new_message', (newMessage) => {
      console.log('newMesage ', newMessage);
      console.log('selectedConversation.id ', selectedConversation.id);
      if (newMessage.conversationId === selectedConversation?.id) {
        setMessages(msgs => {
          return msgs.concat(newMessage);
        })
      } else {
        toast({
          position: 'bottom-right',
          duration: 5000,
          isClosable: true,
          variant: 'left-accent',
          render: () => (
            <Box
              color='white'
              p={3}
              bg='blue.500'
              overflowX="hidden"
              onClick={() => {
                setSelectedConversation(newMessage?.conversation);
                refreshMessages({
                  where: {
                    conversationId: {
                      "equals": newMessage?.conversationId
                    }
                  },
                });
                toast.closeAll()
              }}
            >
              <Text fontSize={18} fontWeight="bold" noOfLines={1}>{newMessage?.conversation?.name}</Text>
              <Text noOfLines={1}>{newMessage.text}</Text>
            </Box>
          ),
        })
      }
    })
    return () => {
      socket?.current?.off('connect');
      socket?.current?.off('new_message');
    }
  }, [messages, conversationsData?.conversations, selectedConversation]);

  const handleClickFindingUser = useCallback((user) => {
    return () => {
      setSelectedFindingUser(user);
      findConversation({
        variables: {
          "take": 1,
          "skip": 0,
          "where": {
            "Paticipants": {
              "every": {
                "OR": [
                  {
                    "type": {
                      "equals": "SINGLE"
                    },
                    "userId": {
                      "equals": user.id
                    }
                  },
                  {
                    "type": {
                      "equals": "SINGLE"
                    },
                    "userId": {
                      "equals": me?.id
                    }
                  }
                ]
              }
            }
          }
        }
      })
    }
  }, [setSelectedFindingUser, findConversation, me])

  const emitMessage = async (input: string) => {
    const from = me?.id;

    if (from) {
      await sendMessage({
        variables: {
          data: {
            "fromUser": {
              "connect": {
                "id": from
              }
            },
            "conversation": {
              "connectOrCreate": {
                "where": {
                  "id": selectedConversation?.id || "Anonymous",
                },
                "create": {
                  "name": selectedFindingUser?.username,
                  "secondaryName": me?.username,
                  "creator": {
                    "connect": {
                      "id": from
                    }
                  },
                  "Paticipants": {
                    "create": [
                      {
                        "type": "SINGLE",
                        "user": {
                          "connect": {
                            "id": from
                          }
                        }
                      },
                      {
                        "type": "SINGLE",
                        "user": {
                          "connect": {
                            "id": selectedFindingUser?.id || 'None'
                          }
                        }
                      }
                    ]
                  }
                }
              }
            },
            "text": input,
          }
        },
        onCompleted: (result) => {
          sendSocketMessage(result.createOneMessage);
          setMessages([...messages, result?.createOneMessage]);
        },
        onError: () => {
          //TODO retry and sync after reconnect
        }
      })
    }
  };

  const startReachedMessages = useCallback(() => {
    if (messagesData?.aggregateMessage?._count?._all > messages.length) {
      fetchMoreMessages({
        variables: {
          skip: messages.length
        },
      }).then((result) => {
        const nextMessages = result.data?.messages?.slice().sort((a, b) => a.createdAt > b.createdAt ? 1 : a.createdAt < b.createdAt ? -1 : 0)
        setMessages((msgs) => {
          return concat(nextMessages, msgs);
          // return concat(nextMessages, msgs);
        });
      });
    }

  }, [fetchMoreMessages, messages, messagesData?.aggregateMessage]);

  return (
    <Flex
      w="100%"
      maxW={1200}
      height={800}
      maxHeight="calc(100vh - 2rem)"
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
    >
      <Box p={2} width="280px" borderRight="1px solid #bababa">
        <Flex justify="space-between">
          <Flex mb={2}>
            <WrapItem>
              <Avatar
                name={me?.username || me?.email}
                src={me?.photo}
              />
            </WrapItem>
            <Box ml={1} overflowX="hidden">
              <Text fontSize='lg' noOfLines={1}>{me?.username || me?.email}</Text>
            </Box>
          </Flex>
          <Box>
            <Icon as={BsThreeDotsVertical}></Icon>
          </Box>
        </Flex>
        <Stack mb={2} fontWeight="normal">
          <Flex justifyContent="space-between">
            <Button colorScheme='blue' variant='outline'>Host Meeting</Button>
            <Button colorScheme='blue' variant='outline' onClick={onOpen}>New Group</Button>
          </Flex>
          <GroupConversationForm isOpen={isOpen} onClose={onClose} me={me} />
        </Stack>
        <Stack>
          <InputGroup>
            <Input
              placeholder='search people'
              size='md'
              _focus={{
                outline: "none",
              }}
              onKeyPress={(event) => {
                const value = event.currentTarget.value;
                if (event.key === "Enter") {
                  setSearchText(value);
                  fetchUser({
                    variables: {
                      "where": {
                        "AND": [
                          {
                            "email": {
                              "contains": value || '$'
                            }
                          },
                          {
                            "id": {
                              "not": {
                                "equals": me?.id
                              }
                            }
                          }
                        ]
                      },
                      "take": 5,
                      "skip": 0
                    },
                    onCompleted: (result) => {
                      setUsers(result.users);
                    }
                  });
                }
              }}
            />
            <InputRightElement>
              <Search2Icon />
            </InputRightElement>
          </InputGroup>
          {userLoading && <Flex width="100%" justify="center"><Spinner color='blue.400' /></Flex>}
          <Box>
            <OverlayScrollbarsComponent>
              <Box style={{ maxHeight: '250px' }}>
                {users?.map(user => (
                  <Flex
                    mb={1}
                    p={2}
                    cursor="pointer"
                    _hover={{
                      bg: "gray.100"
                    }}
                    onClick={handleClickFindingUser(user)}
                  >
                    <WrapItem>
                      <Avatar
                        name={user.username || user.email}
                        src={user.photo}
                      />
                    </WrapItem>
                    <Box ml={1} overflowX="hidden">
                      <Text fontSize='lg' noOfLines={1}>{user.username || user.email}</Text>
                    </Box>
                  </Flex>
                ))}
              </Box>
            </OverlayScrollbarsComponent>
            <>
              {users.length < userData?.aggregateUser?._count?._all && <Flex justify="flex-end">
                <Button
                  variant='link'
                  onClick={() => {
                    fetchMoreUser({
                      variables: {
                        skip: users.length
                      }
                    }).then((result) => setUsers(usrs => concat(usrs, result.data.users)))
                  }}
                >More
                </Button>
              </Flex>}
            </>
          </Box>
        </Stack>
        <ConversationList
          me={me}
          conversations={conversationsData?.conversations}
          selectedConversation={selectedConversation}
          onSelectConversation={setSelectedConversation}
        />
      </Box>
      <Flex
        maxHeight="100%"
        height="100%"
        bg="gray.100"
        overflow="hidden"
        boxShadow="0 2px 2px #0f0f0f04"
        direction="column"
        grow={1}
      >
        <Flex
          width="100%"
          bg="gray.300"
          borderBottom="1px solid light"
          justify="space-between"
          px={4}
          py={2}
        >
          {selectedConversation
            ? (
              <>
                <Flex>
                  <WrapItem>
                    <Avatar
                      name={getConversationName(selectedConversation, me)}
                      src={selectedConversation?.photo}
                    />
                  </WrapItem>
                  <Box ml={1} overflowX="hidden">
                    <Text fontSize='lg' noOfLines={1}>{getConversationName(selectedConversation, me)}</Text>
                  </Box>
                </Flex>
                <Flex align="center">
                  <Search2Icon m={2}/>
                  <AddIcon m={2} />
                </Flex>
              </>
            )
            : selectedFindingUser ? (
              <Flex width="100%" direction="column" justify="center" align="center" height={32}>
                <WrapItem>
                  <Avatar
                    name={selectedFindingUser.username || selectedFindingUser.email}
                    src={selectedFindingUser.photo}
                  />
                </WrapItem>
                <Box my={1} overflowX="hidden">
                  <Text fontSize='lg' noOfLines={1}>{selectedFindingUser.username || selectedFindingUser.email}</Text>
                </Box>
                <Button
                  onClick={() => {
                    emitMessage("Hello!")
                  }}
                >Say Hi!
                </Button>
              </Flex>
            ) : (
              <Flex width="100%" justify="center" align="center" height={16}>
                <Text fontSize={20}>Welcome you to chatty, please search a person to chat!</Text>
              </Flex>
            )
          }
        </Flex>
        <MessageFeed
          me={me}
          messages={messages}
          startReached={startReachedMessages}
        />
        <Flex px={4} py={4} alignItems="center">
          <AutoResizeTextarea
            placeholder="Type a message"
            size="lg"
            bg="white"
            maxRows={5}
            _focus={{
              outline: "none",
            }}
            onKeyPress={(event) => {
              const value = event.currentTarget.value;
              if (
                event.key === "Enter" && !event.shiftKey &&
                value.length > 0
              ) {
                event.preventDefault();
                emitMessage(event.currentTarget.value);
                event.currentTarget.value = "";
              }
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );

  return <div>chat</div>
};

// export const getStaticProps = async () => {};

export default Chat;
