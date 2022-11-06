import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Text,
  WrapItem,
  Icon,
  Stack,
  Button,
  useToast,
  useDisclosure, GridItem, Grid,
} from "@chakra-ui/react";
import { Search2Icon, AddIcon } from '@chakra-ui/icons';
import { BsThreeDotsVertical, BsFillCameraVideoFill, BsFillTelephoneFill, BsFillTelephoneXFill } from 'react-icons/bs';
import moment from "moment";
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import SimplePeer from "simple-peer";
import {
  addNewConversation,
  disconnect,
  sendCallRequest,
  sendCallResponse,
  sendLeftCall,
  sendMessage as sendSocketMessage,
  sendStopTyping,
  sendTyping
} from "../chatService";
import { useAuth } from "../hooks/useAuth";
import {
  useConversationLazyQuery,
  useConversationsQuery,
  useCreateOneMessageMutation, useLogoutLazyQuery,
  useMessagesQuery,
  useUpdateOneConversationMutation,
  useUsersLazyQuery,
} from "../graphql/generated/schema";
import MessageFeed from "../components/MessageFeed";
import ConversationList, { getConversationName } from "../components/ConversationList";
import { connect } from "../chatService";
import { concat, isEqual } from "lodash";
import GroupConversationForm from "../components/GroupConversationForm";
import { useRouter } from "next/router";
import SearchBox from "../components/SearchBox";
import MessageInput from "../components/MessageInput";
import Alert from "../components/Alert";
import Video from "../components/Video";
import Microphone from "../components/Microphone";

const TYPING_TIMER_LENGTH = 700;
const TYPING_STATES = {
  INITIAL: 0,
  IS_TYPING: 1,
  STOP_TYPING: 2,
};

const RenderSearchItem = memo((props) => {
  const { item: user, query } = props;
  const parts = useMemo(() => {
    const matches = match(user?.username, query);
    return parse(user?.username, matches);
  }, [user?.username, query]);
  return (
    <Flex
      key={user.id}
      mb={1}
      p={2}
      cursor="pointer"
      _hover={{
        bg: "gray.100"
      }}
    >
      <WrapItem>
        <Avatar
          name={user.username || user.email}
          src={user.photo}
        />
      </WrapItem>
      <Box ml={1} overflowX="hidden">
        <Text
          fontSize='lg'
          noOfLines={1}
        >
          {parts.map((part, idx) => (
            <Text key={idx} as="span" bg={part.highlight ? "yellow.200" : "transparent"}>
              {part.text}
            </Text>
          ))}
        </Text>
      </Box>
    </Flex>
  )
})

const Chat: React.FC = () => {
  const router = useRouter();
  const socket = useRef();
  const peerRef = useRef();
  const { me, token } = useAuth();
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedConversation, setSelectedConversation] = useState();
  const [selectedFindingUser, setSelectedFindingUser] = useState();
  const [messages, setMessages] = useState<any>([]);
  const [sendMessage] = useCreateOneMessageMutation({});
  const [users, setUsers] = useState([]);
  const [state, setState] = useState({ value: '', isTyping: TYPING_STATES.INITIAL });
  const lastTypingTimeRef = useRef((new Date()).getTime());
  const timerRef = useRef();
  const contentRef = useRef('');
  const { isOpen: isCallingConfirmOpen, onOpen: onOpenCallingConfirm, onClose: onCloseCallingConfirm } = useDisclosure()
  const [callingMsg, setCallingMsg] = useState('');
  const [callState, setCallState] = useState({
    conversation: null,
    signal: null,
    status: 'IDLE',
    localStream: null,
    remoteStream: null,
    currentMember: [],
    peers: []
  });

  const [logout] = useLogoutLazyQuery({
    onCompleted: () => {
      router.push('/login');
    }
  });
  const [fetchUser, { loading: userLoading, data: userData, fetchMore: fetchMoreUser }] = useUsersLazyQuery({})

  const handleFetchUser = useCallback((value) => {
    fetchUser({
      variables: {
        "where": {
          "AND": [
            {
              "username": {
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
  }, [fetchUser, me])

  const handleFetchMoreUser = useCallback(() => {
    fetchMoreUser({
      variables: {
        skip: users.length
      }
    }).then((result) => setUsers(usrs => concat(usrs, result.data.users)))
  }, [fetchMoreUser, users])

  const hasLoadMoreUsers = useMemo(() => {
    return users.length < userData?.aggregateUser?._count?._all
  }, [users, userData?.aggregateUser?._count?._all])

  const { data: conversationsData, refetch: refetchConversations } = useConversationsQuery({
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
      "messageOrderBy2": [
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

  const [updateConversation] = useUpdateOneConversationMutation({})

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
    socket.current = connect(token, {});

    return () => {
      console.log('disconnect ');
      disconnect(me);
    }
  }, [token, me])

  useEffect(() => {
    socket?.current?.on('connect', () => {
      socket?.current?.emit('user_join', me?.id);
    });

    socket?.current?.on('new_conversation', (conversation) => {
      const isSingle = conversation?.Paticipants?.some(item => item.type === 'SINGLE');
      !isSingle && toast({
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
            cursor="pointer"
            onClick={() => {
              refetchConversations({});
              toast.closeAll()
            }}
          >
            <Text noOfLines={1}>you are added to group {getConversationName(conversation, me)}</Text>
          </Box>
        ),
      })
    })

    socket?.current?.on('new_message', (newMessage) => {
      if (newMessage.conversationId === selectedConversation?.id) {
        setMessages(msgs => {
          const nextMessages = [...msgs];
          const lastMessage = msgs[msgs.length - 1];
          if (lastMessage?.isTyping) {
            nextMessages.pop();
          }
          nextMessages.push(newMessage);
          if (lastMessage?.isTyping) {
            nextMessages.push(lastMessage);
          }
          return nextMessages;
        })
      } else {
        // if (!conversationsData?.conversations?.find(con => con.id === newMessage.conversationId)) {
        //   refetchConversations({});
        // }
        refetchConversations({});
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
              cursor="pointer"
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

    socket?.current?.on('typing', (typingMsg) => {
      if (typingMsg.conversation.id === selectedConversation?.id) {
        setMessages(msgs => {
          const nextMsgs = [...msgs];
          const lastMsg = msgs[msgs.length - 1];
          if (!lastMsg.isTyping) {
            nextMsgs.push({ isTyping: true, users: [typingMsg.user] })
          } else {
            const isExist = nextMsgs[nextMsgs.length - 1]?.users?.some(usr => usr.id === typingMsg.user.id);
            if (!isExist) {
              let users = nextMsgs[nextMsgs.length - 1]?.users;
              users = nextMsgs[nextMsgs.length - 1]?.users.push(typingMsg.user)
            }
          }
          return nextMsgs;
        })
      }
    });

    socket?.current?.on('stop_typing', (stypingMsg) => {
      if (stypingMsg.conversation.id === selectedConversation?.id) {
        setMessages(msgs => {
          const nextMsgs = [...msgs];
          const lastMsg = msgs[msgs.length - 1];
          if (lastMsg.isTyping) {
            const isExist = nextMsgs[nextMsgs.length - 1]?.users?.some(usr => usr.id === stypingMsg.user.id);
            if (isExist) {
              let users = nextMsgs[nextMsgs.length - 1]?.users;
              nextMsgs[nextMsgs.length - 1]?.users.filter(usr => usr.id !== stypingMsg.user.id);
            }
            if (users?.length === 0) {
              nextMsgs.pop();
            }
          }
          return nextMsgs;
        })
      }
    })

    socket?.current?.on('call_request', (callRequestMsg) => {
      setCallingMsg(`Receive a call from ${callRequestMsg.fromUser.username}`);
      setCallState((s) => ({ ...s, signal: callRequestMsg.signal, conversation: callRequestMsg.conversation, currentMember: callRequestMsg.currentMember }));
      onOpenCallingConfirm();
    })

    socket?.current?.on('call_response', (callResponseMsg) => {
      if (!callResponseMsg.accept) {
        if (callState.currentMember.Paticipants.length === 2 || callState.currentMember.length === 2) {
          setCallState(s => ({
            conversation: null,
            signal: null,
            status: 'IDLE',
            localStream: null,
            remoteStream: null,
            currentMember: [],
            peers: []
          }))
        }
      }
      if (callResponseMsg.accept && callResponseMsg.signal) {
        peerRef.current?.signal(callResponseMsg.signal)
        setCallState(s => ({ ...s, currentMember: [...s.currentMember, callResponseMsg.fromUser ]}))
      }
    })

    socket?.current?.on('left_call', (leftCallMsg) => {
      if (leftCallMsg.conversation.Paticipants.length === 2) {
        callState.localStream?.getTracks().forEach((track) => track.stop());
        callState.remoteStream?.getTracks().forEach((track) => track.stop());
        setCallState({
          conversation: null,
          signal: null,
          status: 'IDLE',
          localStream: null,
          remoteStream: null,
          currentMember: [],
          peers: [],
        })
      }
      onCloseCallingConfirm();
    })

    return () => {
      socket?.current?.off('connect');
      socket?.current?.off('new_conversation');
      socket?.current?.off('new_message');
      socket?.current?.off('typing');
      socket?.current?.off('stop_typing');
      socket?.current?.off('call_request');
      socket?.current?.off('call_response');
      socket?.current?.off('join_call');
      socket?.current?.off('left_call');
    }
  }, [messages, conversationsData?.conversations, selectedConversation, callState, me]);

  useEffect(() => {
    switch (state.isTyping) {
      case TYPING_STATES.IS_TYPING: {
        sendTyping({ conversation: selectedConversation, user: me });
        return;
      }
      case TYPING_STATES.STOP_TYPING: {
        sendStopTyping({ conversation: selectedConversation, user: me });
        return;
      }
      case TYPING_STATES.INITIAL:
      default:
        return;
    }
  }, [state.isTyping, selectedConversation, me]);

  const handleClickFindingUser = useCallback((user) => {
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
          setMessages([...messages, result?.createOneMessage]);
          updateConversation({
            variables: {
              "where": {
                "id": result.createOneMessage.conversationId,
              },
              "data": {
                "updatedAt": {
                  "set": moment().toISOString()
                }
              }
            }
          });
          if (!selectedConversation?.id) {
            setSelectedConversation(result.createOneMessage?.conversation);
            addNewConversation(result.createOneMessage?.conversation);
          }
          setTimeout(() => {
            sendSocketMessage(result.createOneMessage);
          }, 100);
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

  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    lastTypingTimeRef.current = (new Date()).getTime();
    timerRef.current && clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const typingTimer = (new Date()).getTime();
      const timeDiff = typingTimer - lastTypingTimeRef.current;
      if (timeDiff >= TYPING_TIMER_LENGTH && isEqual(contentRef.current, value)) {
        setState(prev => {
          return {
            ...prev,
            isTyping: prev.isTyping === TYPING_STATES.IS_TYPING ? TYPING_STATES.STOP_TYPING : prev.isTyping
          };
        });
      }
    }, TYPING_TIMER_LENGTH);
    contentRef.current = value;
    setState(prev => ({ ...prev, isTyping: TYPING_STATES.IS_TYPING, value }));
  }, [])

  const handleCallRequest = useCallback((audioOnly) => {
    return () => {
      navigator.mediaDevices.getUserMedia({ audio: true, video: !audioOnly})
        .then((stream) => {
          setCallState(s => ({ ...s, localStream: stream }));
          const peer = new SimplePeer({
            initiator: true,
            trickle: false,
            config: {
              iceServers: [
                {
                  urls: "stun:stun.l.google.com:19302",
                },
              ],
            },
            stream: stream,
          });
          peerRef.current = peer;

          peer.on("signal", (signal) => {
            console.log("SIGNAL", signal);
            sendCallRequest({ audioOnly, conversation: selectedConversation, fromUser: me, currentMember: [{ ...me, isAudioOnly: audioOnly }], signal });
          });

          peer.on("stream", (stream) => {
            console.log("REMOTE STREAM", stream);
            setCallState(s => ({ ...s, remoteStream: stream }))
          });

          setCallState(s => ({ ...s, isAudioOnly: audioOnly}))
        })
        .catch(err => console.log(err))
      setCallState(s => ({ ...s, status: 'CALLING', conversation: selectedConversation, currentMember: [{ ...me, isAudioOnly: audioOnly }] }))
    }
  }, [selectedConversation, setCallState, me]);

  const handleCallResponse = useCallback((accept, audioOnly) => {
    return () => {
      if (accept) {
        navigator.mediaDevices.getUserMedia({ audio: true, video: !audioOnly })
          .then((stream) => {
            setCallState(s => ({ ...s, localStream: stream }));
            const peer = new SimplePeer({
              initiator: false,
              trickle: false,
              config: {
                iceServers: [
                  {
                    urls: "stun:stun.l.google.com:19302",
                  },
                ],
              },
              stream: stream,
            });
            peerRef.current = peer;

            peer.on("signal", (signal) => {
              console.log("SIGNAL Res", signal);
              sendCallResponse({ conversation: callState.conversation, fromUser: { ...me, isAudioOnly: audioOnly }, accept: true, signal })
            });
            peer.on("stream", (stream) => {
              console.log("REMOTE STREAM 1", stream);
              setCallState(s => ({ ...s, remoteStream: stream }))
            });
            peer.signal(callState?.signal);

            // TODO
            setCallState(s => ({ ...s, status: 'CALLING', isAudioOnly: true, currentMember: [{ ...me, isAudioOnly: audioOnly }, ...s.currentMember] }))
          })
          .catch(err => console.log(err));
      }
      onCloseCallingConfirm();
    }
  }, [callState, setCallState, me, onCloseCallingConfirm]);

  const handleEndCall = useCallback(() => {
    callState.localStream?.getTracks().forEach((track) => track.stop());
    callState.remoteStream?.getTracks().forEach((track) => track.stop());
    setCallState({
      conversation: null,
      signal: null,
      status: 'IDLE',
      localStream: null,
      remoteStream: null,
      currentMember: [],
      peers: [],
    });
    sendLeftCall({ conversation: selectedConversation, fromUser: me, signal: callState.signal })
  }, [callState])

  return (
    <>
      <Flex w="100%" justify="end" px={4} py={1}>
        <Button colorScheme='blue' variant='outline' onClick={logout}>Logout</Button>
      </Flex>
      <Flex
        w="100%"
        maxW={1200}
        height={800}
        maxHeight="calc(100vh - 5rem)"
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
            <GroupConversationForm isOpen={isOpen} onClose={onClose} me={me}/>
          </Stack>
          <SearchBox
            placeholder="search people"
            itemToString={(item) => item.username}
            loading={true}
            onFetch={handleFetchUser}
            hasLoadMore={hasLoadMoreUsers}
            onFetchMore={handleFetchMoreUser}
            data={users}
            selectedItemChange={handleClickFindingUser}
            components={{
              renderItem: RenderSearchItem
            }}
          />
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
                    <Button
                      variant='ghost'
                      width="40px"
                      borderRadius="50%"
                      disabled={callState.status === 'CALLING'}
                      onClick={handleCallRequest(false)}>
                      <Icon as={BsFillCameraVideoFill} m={2}></Icon>
                    </Button>
                    <Button
                      variant='ghost'
                      width="40px"
                      borderRadius="50%"
                      disabled={callState.status === 'CALLING'}
                      onClick={handleCallRequest(true)}>
                      <Icon as={BsFillTelephoneFill} m={2}></Icon>
                    </Button>
                    <AddIcon m={2}/>
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
                  >Say Hi! {String.fromCodePoint(0x1f590)}
                  </Button>
                </Flex>
              ) : (
                <Flex width="100%" justify="center" align="center" height={16}>
                  <Text fontSize={20}>Welcome you to chatty, please search a person to chat!</Text>
                </Flex>
              )
            }
          </Flex>
          {callState.status === 'CALLING'
            ? (<Flex grow={1} direction="column" position="relative" px={2} py={4} sx={{ _hover: { '.action': { display: 'flex' } }}}>
              <Grid templateColumns='repeat(2, 1fr)' gap={2}>
                {callState.localStream && callState.currentMember?.map((member, i) => (
                  <GridItem key={member.id} minHeight="150px" border="1px solid lightgrey" borderRadius="4px" position="relative">
                    {member.isAudioOnly && <Avatar
                      sx={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%,-50%)"
                      }}
                      name={member.username}
                      src={member.photo}
                    />}
                    {callState.localStream && i=== 0 && <Video stream={callState.localStream} isLocalStream={true} />}
                    {callState.remoteStream && i!== 0 && <Video stream={callState.remoteStream} isLocalStream={false} />}
                  </GridItem>
                ))}
              </Grid>
              <Box
                className="action"
                p={3}
                bg="gray.200"
                borderRadius="16px"
                sx={{
                  position: 'absolute',
                  bottom: '4px',
                  left: "50%",
                  transform: 'translate(-50%, 0)',
                  display: 'none',
                }}
              >
                <Microphone localStream={callState.localStream} />
                <Button
                  variant='ghost'
                  width="40px"
                  borderRadius="50%"
                  color="red.400"
                  onClick={handleEndCall}>
                  <Icon as={BsFillTelephoneXFill} m={2}></Icon>
                </Button>
              </Box>
            </Flex>)
            : (
              <MessageFeed
                me={me}
                messages={messages}
                startReached={startReachedMessages}
              />
            )
          }
          <Flex px={4} pb={4} pt={1} alignItems="center" direction="column">
            <Box w="100%">
              <MessageInput
                placeholder="Type a message"
                size="lg"
                bg="white"
                maxRows={5}
                _focus={{
                  outline: "none",
                }}
                onChange={handleInputChange}
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
            </Box>
          </Flex>
          <Alert
            isOpen={isCallingConfirmOpen}
            okText="Accept Audio"
            cancelText="Reject"
            title="Calling"
            message={callingMsg}
            onOk={handleCallResponse(true, true)}
            onClose={handleCallResponse(false, true)}
            moreBtn={{
              text: 'Accept Video',
              onClick: handleCallResponse(true, false),
              colorScheme: 'green'
            }}
          />
        </Flex>
      </Flex>
      <Flex w="100%" justify="end" px={4} py={1}>Develop by quocvoong</Flex>
    </>
  );
};

// export const getStaticProps = async () => {};

export default Chat;
