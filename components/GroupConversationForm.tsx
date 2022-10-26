import {
  Avatar,
  AvatarBadge,
  Box,
  Button, Checkbox, Flex,
  Input, Menu, MenuButton, MenuItem, MenuList, Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader, ModalOverlay, Spinner, Stack, Text, WrapItem
} from "@chakra-ui/react";
import { FieldArray, Formik } from "formik";
import { InputField } from "./InputField";
import React, { useCallback, useEffect, useState } from "react";
import * as Yup from "yup";
import {
  ConversationsDocument,
  ConversationsQuery,
  CreateOneConversationDocument,
  useCreateOneConversationMutation,
  useUsersLazyQuery
} from "../graphql/generated/schema";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { concat, findIndex } from "lodash";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { addNewConversation } from "../chatService";

const GroupSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required"),
  members: Yup.array().min(1, "should not empty")
});

const initialGroupValues = {
  name: '',
  members: []
}

const GroupConversationForm = (props) => {
  const { onClose, isOpen, me } = props;
  const [users, setUsers] = useState([]);
  const [create] = useCreateOneConversationMutation();
  const [fetchUser, { loading, data: userData, fetchMore: fetchMoreUser }] = useUsersLazyQuery({
    fetchPolicy: "no-cache"
  })

  const handleOnClose = useCallback(() => {
    onClose();
    setUsers([]);
  }, [onClose])

  const handleCreateGroup = useCallback(async (values) => {
    const paticipants = concat([me], values.members).map(mem => {
      return {
        "type": "GROUP",
        "user": {
          "connect": {
            "id": mem.id
          }
        }
      }
    })
    await create({
      variables: {
        "data": {
          "name": values.name,
          "creator": {
            "connect": {
              "id": me.id
            }
          },
          "Paticipants": {
            "create": paticipants
          }
        }
      },
      refetchQueries: ['Conversations'],
      onCompleted: (result) => {
        addNewConversation(result.createOneConversation);
      }
    });
    onClose();
  }, [create, me, onClose])

  return (
    <Modal isOpen={isOpen} onClose={handleOnClose} size="xl">
      <ModalOverlay/>
      <ModalContent>
        <Formik validationSchema={GroupSchema} initialValues={initialGroupValues} onSubmit={(handleCreateGroup)}>
          {({ handleSubmit, isSubmitting, dirty, isValid, values }) => {
            console.log('values ', values);
            return (
              <form autoComplete='off' onSubmit={handleSubmit}>
                <ModalHeader>New Group </ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                  <InputField label="Group Name" name="name"/>
                  <FieldArray
                    name='members'
                    render={arrayHelpers => (
                      <Box>
                        <Input
                          placeholder='search people' _focus={{ outline: "none" }}
                          onKeyPress={(event) => {
                            const value = event.currentTarget.value;
                            if (event.key === "Enter") {
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
                            }
                          }}
                        />
                        {loading && <Flex width="100%" justify="center"><Spinner color='blue.400'/></Flex>}
                        <Box>
                          <OverlayScrollbarsComponent>
                            <Box style={{ maxHeight: '200px' }}>
                              {users?.map(user => (
                                <Flex
                                  key={user.id}
                                  mb={1}
                                  p={4}
                                  cursor="pointer"
                                  _hover={{
                                    bg: "gray.100"
                                  }}
                                  justify="space-between"
                                  onClick={() => {
                                    const idx = findIndex(values.members, (item) => item.id === user.id);
                                    if (idx < 0) {
                                      arrayHelpers.push(user);
                                    } else {
                                      arrayHelpers.remove(idx);
                                    }
                                  }}
                                >
                                  <Flex>
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
                                  <Checkbox
                                    mr={2}
                                    size='lg'
                                    colorScheme='blue'
                                    isChecked={values.members.map(usr => usr.id)?.includes(user.id)}
                                  />
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
                          <Box>
                            <Text fontSize={18} fontWeight="bold">Members</Text>
                            <Flex>
                              {values.members.map(member => (
                                <Box key={member.id} mr={2}>
                                  <WrapItem>
                                    <Avatar
                                      name={member.username || member.email}
                                      src={member.photo}
                                    >
                                      <AvatarBadge
                                        boxSize='1.25em'
                                        bg='gray.400'
                                        sx={{
                                          top: "-10px",
                                          cursor: 'pointer'
                                        }}
                                        onClick={() => {
                                          const idx = findIndex(values.members, (item) => item.id === member.id);
                                          arrayHelpers.remove(idx);
                                        }}
                                        ><SmallCloseIcon/>
                                      </AvatarBadge>
                                    </Avatar>
                                  </WrapItem>
                                </Box>
                              ))}
                            </Flex>
                          </Box>
                        </Box>
                      </Box>
                    )}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button variant='ghost' mr={3} onClick={handleOnClose}>Close</Button>
                  <Button colorScheme='blue' type="submit" isDisabled={!dirty || !isValid || isSubmitting}
                          isLoading={isSubmitting}>Create</Button>
                </ModalFooter>
              </form>
            )
          }}
        </Formik>
      </ModalContent>
    </Modal>
  )
}

export default GroupConversationForm;
