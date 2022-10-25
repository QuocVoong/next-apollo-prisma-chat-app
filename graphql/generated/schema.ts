import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateConversation = {
  __typename?: 'AggregateConversation';
  _count?: Maybe<ConversationCountAggregate>;
  _max?: Maybe<ConversationMaxAggregate>;
  _min?: Maybe<ConversationMinAggregate>;
};

export type AggregateMessage = {
  __typename?: 'AggregateMessage';
  _count?: Maybe<MessageCountAggregate>;
  _max?: Maybe<MessageMaxAggregate>;
  _min?: Maybe<MessageMinAggregate>;
};

export type AggregatePaticipants = {
  __typename?: 'AggregatePaticipants';
  _count?: Maybe<PaticipantsCountAggregate>;
  _max?: Maybe<PaticipantsMaxAggregate>;
  _min?: Maybe<PaticipantsMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Conversation = {
  __typename?: 'Conversation';
  Message: Array<Message>;
  Paticipants: Array<Paticipants>;
  _count?: Maybe<ConversationCount>;
  createdAt: Scalars['DateTime'];
  creator: User;
  creatorId: Scalars['String'];
  id: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  secondaryName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


export type ConversationMessageArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type ConversationPaticipantsArgs = {
  cursor?: InputMaybe<PaticipantsWhereUniqueInput>;
  distinct?: InputMaybe<Array<PaticipantsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PaticipantsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PaticipantsWhereInput>;
};

export type ConversationCount = {
  __typename?: 'ConversationCount';
  Message: Scalars['Int'];
  Paticipants: Scalars['Int'];
};

export type ConversationCountAggregate = {
  __typename?: 'ConversationCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  creatorId: Scalars['Int'];
  id: Scalars['Int'];
  isDeleted: Scalars['Int'];
  name: Scalars['Int'];
  secondaryName: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ConversationCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  creatorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  secondaryName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ConversationCreateInput = {
  Message?: InputMaybe<MessageCreateNestedManyWithoutConversationInput>;
  Paticipants?: InputMaybe<PaticipantsCreateNestedManyWithoutConversationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator: UserCreateNestedOneWithoutConversationInput;
  id?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  secondaryName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ConversationCreateNestedManyWithoutCreatorInput = {
  connect?: InputMaybe<Array<ConversationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ConversationCreateOrConnectWithoutCreatorInput>>;
  create?: InputMaybe<Array<ConversationCreateWithoutCreatorInput>>;
};

export type ConversationCreateNestedOneWithoutMessageInput = {
  connect?: InputMaybe<ConversationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ConversationCreateOrConnectWithoutMessageInput>;
  create?: InputMaybe<ConversationCreateWithoutMessageInput>;
};

export type ConversationCreateNestedOneWithoutPaticipantsInput = {
  connect?: InputMaybe<ConversationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ConversationCreateOrConnectWithoutPaticipantsInput>;
  create?: InputMaybe<ConversationCreateWithoutPaticipantsInput>;
};

export type ConversationCreateOrConnectWithoutCreatorInput = {
  create: ConversationCreateWithoutCreatorInput;
  where: ConversationWhereUniqueInput;
};

export type ConversationCreateOrConnectWithoutMessageInput = {
  create: ConversationCreateWithoutMessageInput;
  where: ConversationWhereUniqueInput;
};

export type ConversationCreateOrConnectWithoutPaticipantsInput = {
  create: ConversationCreateWithoutPaticipantsInput;
  where: ConversationWhereUniqueInput;
};

export type ConversationCreateWithoutCreatorInput = {
  Message?: InputMaybe<MessageCreateNestedManyWithoutConversationInput>;
  Paticipants?: InputMaybe<PaticipantsCreateNestedManyWithoutConversationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  secondaryName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ConversationCreateWithoutMessageInput = {
  Paticipants?: InputMaybe<PaticipantsCreateNestedManyWithoutConversationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator: UserCreateNestedOneWithoutConversationInput;
  id?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  secondaryName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ConversationCreateWithoutPaticipantsInput = {
  Message?: InputMaybe<MessageCreateNestedManyWithoutConversationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creator: UserCreateNestedOneWithoutConversationInput;
  id?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  secondaryName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ConversationGroupBy = {
  __typename?: 'ConversationGroupBy';
  _count?: Maybe<ConversationCountAggregate>;
  _max?: Maybe<ConversationMaxAggregate>;
  _min?: Maybe<ConversationMinAggregate>;
  createdAt: Scalars['DateTime'];
  creatorId: Scalars['String'];
  id: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  secondaryName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ConversationListRelationFilter = {
  every?: InputMaybe<ConversationWhereInput>;
  none?: InputMaybe<ConversationWhereInput>;
  some?: InputMaybe<ConversationWhereInput>;
};

export type ConversationMaxAggregate = {
  __typename?: 'ConversationMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  secondaryName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ConversationMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  creatorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  secondaryName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ConversationMinAggregate = {
  __typename?: 'ConversationMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  secondaryName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ConversationMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  creatorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  secondaryName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ConversationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ConversationOrderByWithAggregationInput = {
  _count?: InputMaybe<ConversationCountOrderByAggregateInput>;
  _max?: InputMaybe<ConversationMaxOrderByAggregateInput>;
  _min?: InputMaybe<ConversationMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  creatorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  secondaryName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ConversationOrderByWithRelationInput = {
  Message?: InputMaybe<MessageOrderByRelationAggregateInput>;
  Paticipants?: InputMaybe<PaticipantsOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  creator?: InputMaybe<UserOrderByWithRelationInput>;
  creatorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  secondaryName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ConversationRelationFilter = {
  is?: InputMaybe<ConversationWhereInput>;
  isNot?: InputMaybe<ConversationWhereInput>;
};

export enum ConversationScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatorId = 'creatorId',
  Id = 'id',
  IsDeleted = 'isDeleted',
  Name = 'name',
  SecondaryName = 'secondaryName',
  UpdatedAt = 'updatedAt'
}

export type ConversationScalarWhereInput = {
  AND?: InputMaybe<Array<ConversationScalarWhereInput>>;
  NOT?: InputMaybe<Array<ConversationScalarWhereInput>>;
  OR?: InputMaybe<Array<ConversationScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  creatorId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringNullableFilter>;
  secondaryName?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ConversationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ConversationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ConversationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ConversationScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  creatorId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  isDeleted?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  secondaryName?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ConversationUpdateInput = {
  Message?: InputMaybe<MessageUpdateManyWithoutConversationNestedInput>;
  Paticipants?: InputMaybe<PaticipantsUpdateManyWithoutConversationNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneRequiredWithoutConversationNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDeleted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  secondaryName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ConversationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDeleted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  secondaryName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ConversationUpdateManyWithWhereWithoutCreatorInput = {
  data: ConversationUpdateManyMutationInput;
  where: ConversationScalarWhereInput;
};

export type ConversationUpdateManyWithoutCreatorNestedInput = {
  connect?: InputMaybe<Array<ConversationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ConversationCreateOrConnectWithoutCreatorInput>>;
  create?: InputMaybe<Array<ConversationCreateWithoutCreatorInput>>;
  delete?: InputMaybe<Array<ConversationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ConversationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ConversationWhereUniqueInput>>;
  set?: InputMaybe<Array<ConversationWhereUniqueInput>>;
  update?: InputMaybe<Array<ConversationUpdateWithWhereUniqueWithoutCreatorInput>>;
  updateMany?: InputMaybe<Array<ConversationUpdateManyWithWhereWithoutCreatorInput>>;
  upsert?: InputMaybe<Array<ConversationUpsertWithWhereUniqueWithoutCreatorInput>>;
};

export type ConversationUpdateOneRequiredWithoutMessageNestedInput = {
  connect?: InputMaybe<ConversationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ConversationCreateOrConnectWithoutMessageInput>;
  create?: InputMaybe<ConversationCreateWithoutMessageInput>;
  update?: InputMaybe<ConversationUpdateWithoutMessageInput>;
  upsert?: InputMaybe<ConversationUpsertWithoutMessageInput>;
};

export type ConversationUpdateOneRequiredWithoutPaticipantsNestedInput = {
  connect?: InputMaybe<ConversationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ConversationCreateOrConnectWithoutPaticipantsInput>;
  create?: InputMaybe<ConversationCreateWithoutPaticipantsInput>;
  update?: InputMaybe<ConversationUpdateWithoutPaticipantsInput>;
  upsert?: InputMaybe<ConversationUpsertWithoutPaticipantsInput>;
};

export type ConversationUpdateWithWhereUniqueWithoutCreatorInput = {
  data: ConversationUpdateWithoutCreatorInput;
  where: ConversationWhereUniqueInput;
};

export type ConversationUpdateWithoutCreatorInput = {
  Message?: InputMaybe<MessageUpdateManyWithoutConversationNestedInput>;
  Paticipants?: InputMaybe<PaticipantsUpdateManyWithoutConversationNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDeleted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  secondaryName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ConversationUpdateWithoutMessageInput = {
  Paticipants?: InputMaybe<PaticipantsUpdateManyWithoutConversationNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneRequiredWithoutConversationNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDeleted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  secondaryName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ConversationUpdateWithoutPaticipantsInput = {
  Message?: InputMaybe<MessageUpdateManyWithoutConversationNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneRequiredWithoutConversationNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDeleted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  secondaryName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ConversationUpsertWithWhereUniqueWithoutCreatorInput = {
  create: ConversationCreateWithoutCreatorInput;
  update: ConversationUpdateWithoutCreatorInput;
  where: ConversationWhereUniqueInput;
};

export type ConversationUpsertWithoutMessageInput = {
  create: ConversationCreateWithoutMessageInput;
  update: ConversationUpdateWithoutMessageInput;
};

export type ConversationUpsertWithoutPaticipantsInput = {
  create: ConversationCreateWithoutPaticipantsInput;
  update: ConversationUpdateWithoutPaticipantsInput;
};

export type ConversationWhereInput = {
  AND?: InputMaybe<Array<ConversationWhereInput>>;
  Message?: InputMaybe<MessageListRelationFilter>;
  NOT?: InputMaybe<Array<ConversationWhereInput>>;
  OR?: InputMaybe<Array<ConversationWhereInput>>;
  Paticipants?: InputMaybe<PaticipantsListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  creator?: InputMaybe<UserRelationFilter>;
  creatorId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringNullableFilter>;
  secondaryName?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ConversationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  message: Scalars['String'];
  status: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  conversation: Conversation;
  conversationId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  from: Scalars['String'];
  fromUser: User;
  id: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type MessageCountAggregate = {
  __typename?: 'MessageCountAggregate';
  _all: Scalars['Int'];
  conversationId: Scalars['Int'];
  createdAt: Scalars['Int'];
  from: Scalars['Int'];
  id: Scalars['Int'];
  isDeleted: Scalars['Int'];
  text: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type MessageCountOrderByAggregateInput = {
  conversationId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MessageCreateInput = {
  conversation: ConversationCreateNestedOneWithoutMessageInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fromUser: UserCreateNestedOneWithoutMessageInput;
  id?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MessageCreateNestedManyWithoutConversationInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutConversationInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutConversationInput>>;
};

export type MessageCreateNestedManyWithoutFromUserInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutFromUserInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutFromUserInput>>;
};

export type MessageCreateOrConnectWithoutConversationInput = {
  create: MessageCreateWithoutConversationInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateOrConnectWithoutFromUserInput = {
  create: MessageCreateWithoutFromUserInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateWithoutConversationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fromUser: UserCreateNestedOneWithoutMessageInput;
  id?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MessageCreateWithoutFromUserInput = {
  conversation: ConversationCreateNestedOneWithoutMessageInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MessageGroupBy = {
  __typename?: 'MessageGroupBy';
  _count?: Maybe<MessageCountAggregate>;
  _max?: Maybe<MessageMaxAggregate>;
  _min?: Maybe<MessageMinAggregate>;
  conversationId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  from: Scalars['String'];
  id: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type MessageListRelationFilter = {
  every?: InputMaybe<MessageWhereInput>;
  none?: InputMaybe<MessageWhereInput>;
  some?: InputMaybe<MessageWhereInput>;
};

export type MessageMaxAggregate = {
  __typename?: 'MessageMaxAggregate';
  conversationId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MessageMaxOrderByAggregateInput = {
  conversationId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MessageMinAggregate = {
  __typename?: 'MessageMinAggregate';
  conversationId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MessageMinOrderByAggregateInput = {
  conversationId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MessageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MessageOrderByWithAggregationInput = {
  _count?: InputMaybe<MessageCountOrderByAggregateInput>;
  _max?: InputMaybe<MessageMaxOrderByAggregateInput>;
  _min?: InputMaybe<MessageMinOrderByAggregateInput>;
  conversationId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MessageOrderByWithRelationInput = {
  conversation?: InputMaybe<ConversationOrderByWithRelationInput>;
  conversationId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  from?: InputMaybe<SortOrder>;
  fromUser?: InputMaybe<UserOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  isDeleted?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum MessageScalarFieldEnum {
  ConversationId = 'conversationId',
  CreatedAt = 'createdAt',
  From = 'from',
  Id = 'id',
  IsDeleted = 'isDeleted',
  Text = 'text',
  UpdatedAt = 'updatedAt'
}

export type MessageScalarWhereInput = {
  AND?: InputMaybe<Array<MessageScalarWhereInput>>;
  NOT?: InputMaybe<Array<MessageScalarWhereInput>>;
  OR?: InputMaybe<Array<MessageScalarWhereInput>>;
  conversationId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  from?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  text?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MessageScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MessageScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MessageScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MessageScalarWhereWithAggregatesInput>>;
  conversationId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  from?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  isDeleted?: InputMaybe<BoolWithAggregatesFilter>;
  text?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type MessageUpdateInput = {
  conversation?: InputMaybe<ConversationUpdateOneRequiredWithoutMessageNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  fromUser?: InputMaybe<UserUpdateOneRequiredWithoutMessageNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDeleted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MessageUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDeleted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MessageUpdateManyWithWhereWithoutConversationInput = {
  data: MessageUpdateManyMutationInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateManyWithWhereWithoutFromUserInput = {
  data: MessageUpdateManyMutationInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateManyWithoutConversationNestedInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutConversationInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutConversationInput>>;
  delete?: InputMaybe<Array<MessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  set?: InputMaybe<Array<MessageWhereUniqueInput>>;
  update?: InputMaybe<Array<MessageUpdateWithWhereUniqueWithoutConversationInput>>;
  updateMany?: InputMaybe<Array<MessageUpdateManyWithWhereWithoutConversationInput>>;
  upsert?: InputMaybe<Array<MessageUpsertWithWhereUniqueWithoutConversationInput>>;
};

export type MessageUpdateManyWithoutFromUserNestedInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutFromUserInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutFromUserInput>>;
  delete?: InputMaybe<Array<MessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  set?: InputMaybe<Array<MessageWhereUniqueInput>>;
  update?: InputMaybe<Array<MessageUpdateWithWhereUniqueWithoutFromUserInput>>;
  updateMany?: InputMaybe<Array<MessageUpdateManyWithWhereWithoutFromUserInput>>;
  upsert?: InputMaybe<Array<MessageUpsertWithWhereUniqueWithoutFromUserInput>>;
};

export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
  data: MessageUpdateWithoutConversationInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateWithWhereUniqueWithoutFromUserInput = {
  data: MessageUpdateWithoutFromUserInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateWithoutConversationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  fromUser?: InputMaybe<UserUpdateOneRequiredWithoutMessageNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDeleted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MessageUpdateWithoutFromUserInput = {
  conversation?: InputMaybe<ConversationUpdateOneRequiredWithoutMessageNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isDeleted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
  create: MessageCreateWithoutConversationInput;
  update: MessageUpdateWithoutConversationInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpsertWithWhereUniqueWithoutFromUserInput = {
  create: MessageCreateWithoutFromUserInput;
  update: MessageUpdateWithoutFromUserInput;
  where: MessageWhereUniqueInput;
};

export type MessageWhereInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>;
  NOT?: InputMaybe<Array<MessageWhereInput>>;
  OR?: InputMaybe<Array<MessageWhereInput>>;
  conversation?: InputMaybe<ConversationRelationFilter>;
  conversationId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  from?: InputMaybe<StringFilter>;
  fromUser?: InputMaybe<UserRelationFilter>;
  id?: InputMaybe<StringFilter>;
  isDeleted?: InputMaybe<BoolFilter>;
  text?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MessageWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneConversation: Conversation;
  createOneMessage: Message;
  createOnePaticipants: Paticipants;
  createOneUser: User;
  deleteManyConversation: AffectedRowsOutput;
  deleteManyMessage: AffectedRowsOutput;
  deleteManyPaticipants: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOneConversation?: Maybe<Conversation>;
  deleteOneMessage?: Maybe<Message>;
  deleteOnePaticipants?: Maybe<Paticipants>;
  deleteOneUser?: Maybe<User>;
  loginUser: LoginResponse;
  signupUser: UserResponse;
  updateManyConversation: AffectedRowsOutput;
  updateManyMessage: AffectedRowsOutput;
  updateManyPaticipants: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOneConversation?: Maybe<Conversation>;
  updateOneMessage?: Maybe<Message>;
  updateOnePaticipants?: Maybe<Paticipants>;
  updateOneUser?: Maybe<User>;
  upsertOneConversation: Conversation;
  upsertOneMessage: Message;
  upsertOnePaticipants: Paticipants;
  upsertOneUser: User;
};


export type MutationCreateOneConversationArgs = {
  data: ConversationCreateInput;
};


export type MutationCreateOneMessageArgs = {
  data: MessageCreateInput;
};


export type MutationCreateOnePaticipantsArgs = {
  data: PaticipantsCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyConversationArgs = {
  where?: InputMaybe<ConversationWhereInput>;
};


export type MutationDeleteManyMessageArgs = {
  where?: InputMaybe<MessageWhereInput>;
};


export type MutationDeleteManyPaticipantsArgs = {
  where?: InputMaybe<PaticipantsWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneConversationArgs = {
  where: ConversationWhereUniqueInput;
};


export type MutationDeleteOneMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type MutationDeleteOnePaticipantsArgs = {
  where: PaticipantsWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginUserArgs = {
  input: LoginInput;
};


export type MutationSignupUserArgs = {
  input: SignUpInput;
};


export type MutationUpdateManyConversationArgs = {
  data: ConversationUpdateManyMutationInput;
  where?: InputMaybe<ConversationWhereInput>;
};


export type MutationUpdateManyMessageArgs = {
  data: MessageUpdateManyMutationInput;
  where?: InputMaybe<MessageWhereInput>;
};


export type MutationUpdateManyPaticipantsArgs = {
  data: PaticipantsUpdateManyMutationInput;
  where?: InputMaybe<PaticipantsWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOneConversationArgs = {
  data: ConversationUpdateInput;
  where: ConversationWhereUniqueInput;
};


export type MutationUpdateOneMessageArgs = {
  data: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};


export type MutationUpdateOnePaticipantsArgs = {
  data: PaticipantsUpdateInput;
  where: PaticipantsWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneConversationArgs = {
  create: ConversationCreateInput;
  update: ConversationUpdateInput;
  where: ConversationWhereUniqueInput;
};


export type MutationUpsertOneMessageArgs = {
  create: MessageCreateInput;
  update: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};


export type MutationUpsertOnePaticipantsArgs = {
  create: PaticipantsCreateInput;
  update: PaticipantsUpdateInput;
  where: PaticipantsWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Paticipants = {
  __typename?: 'Paticipants';
  conversation: Conversation;
  conversationId: Scalars['String'];
  id: Scalars['String'];
  joinedDate: Scalars['DateTime'];
  leftDate: Scalars['DateTime'];
  type: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type PaticipantsCountAggregate = {
  __typename?: 'PaticipantsCountAggregate';
  _all: Scalars['Int'];
  conversationId: Scalars['Int'];
  id: Scalars['Int'];
  joinedDate: Scalars['Int'];
  leftDate: Scalars['Int'];
  type: Scalars['Int'];
  userId: Scalars['Int'];
};

export type PaticipantsCountOrderByAggregateInput = {
  conversationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  joinedDate?: InputMaybe<SortOrder>;
  leftDate?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PaticipantsCreateInput = {
  conversation: ConversationCreateNestedOneWithoutPaticipantsInput;
  id?: InputMaybe<Scalars['String']>;
  joinedDate?: InputMaybe<Scalars['DateTime']>;
  leftDate?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutPaticipantsInput;
};

export type PaticipantsCreateNestedManyWithoutConversationInput = {
  connect?: InputMaybe<Array<PaticipantsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PaticipantsCreateOrConnectWithoutConversationInput>>;
  create?: InputMaybe<Array<PaticipantsCreateWithoutConversationInput>>;
};

export type PaticipantsCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<PaticipantsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PaticipantsCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PaticipantsCreateWithoutUserInput>>;
};

export type PaticipantsCreateOrConnectWithoutConversationInput = {
  create: PaticipantsCreateWithoutConversationInput;
  where: PaticipantsWhereUniqueInput;
};

export type PaticipantsCreateOrConnectWithoutUserInput = {
  create: PaticipantsCreateWithoutUserInput;
  where: PaticipantsWhereUniqueInput;
};

export type PaticipantsCreateWithoutConversationInput = {
  id?: InputMaybe<Scalars['String']>;
  joinedDate?: InputMaybe<Scalars['DateTime']>;
  leftDate?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutPaticipantsInput;
};

export type PaticipantsCreateWithoutUserInput = {
  conversation: ConversationCreateNestedOneWithoutPaticipantsInput;
  id?: InputMaybe<Scalars['String']>;
  joinedDate?: InputMaybe<Scalars['DateTime']>;
  leftDate?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<Scalars['String']>;
};

export type PaticipantsGroupBy = {
  __typename?: 'PaticipantsGroupBy';
  _count?: Maybe<PaticipantsCountAggregate>;
  _max?: Maybe<PaticipantsMaxAggregate>;
  _min?: Maybe<PaticipantsMinAggregate>;
  conversationId: Scalars['String'];
  id: Scalars['String'];
  joinedDate: Scalars['DateTime'];
  leftDate: Scalars['DateTime'];
  type: Scalars['String'];
  userId: Scalars['String'];
};

export type PaticipantsListRelationFilter = {
  every?: InputMaybe<PaticipantsWhereInput>;
  none?: InputMaybe<PaticipantsWhereInput>;
  some?: InputMaybe<PaticipantsWhereInput>;
};

export type PaticipantsMaxAggregate = {
  __typename?: 'PaticipantsMaxAggregate';
  conversationId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  joinedDate?: Maybe<Scalars['DateTime']>;
  leftDate?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type PaticipantsMaxOrderByAggregateInput = {
  conversationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  joinedDate?: InputMaybe<SortOrder>;
  leftDate?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PaticipantsMinAggregate = {
  __typename?: 'PaticipantsMinAggregate';
  conversationId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  joinedDate?: Maybe<Scalars['DateTime']>;
  leftDate?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type PaticipantsMinOrderByAggregateInput = {
  conversationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  joinedDate?: InputMaybe<SortOrder>;
  leftDate?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PaticipantsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PaticipantsOrderByWithAggregationInput = {
  _count?: InputMaybe<PaticipantsCountOrderByAggregateInput>;
  _max?: InputMaybe<PaticipantsMaxOrderByAggregateInput>;
  _min?: InputMaybe<PaticipantsMinOrderByAggregateInput>;
  conversationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  joinedDate?: InputMaybe<SortOrder>;
  leftDate?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PaticipantsOrderByWithRelationInput = {
  conversation?: InputMaybe<ConversationOrderByWithRelationInput>;
  conversationId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  joinedDate?: InputMaybe<SortOrder>;
  leftDate?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum PaticipantsScalarFieldEnum {
  ConversationId = 'conversationId',
  Id = 'id',
  JoinedDate = 'joinedDate',
  LeftDate = 'leftDate',
  Type = 'type',
  UserId = 'userId'
}

export type PaticipantsScalarWhereInput = {
  AND?: InputMaybe<Array<PaticipantsScalarWhereInput>>;
  NOT?: InputMaybe<Array<PaticipantsScalarWhereInput>>;
  OR?: InputMaybe<Array<PaticipantsScalarWhereInput>>;
  conversationId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  joinedDate?: InputMaybe<DateTimeFilter>;
  leftDate?: InputMaybe<DateTimeFilter>;
  type?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type PaticipantsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PaticipantsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PaticipantsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PaticipantsScalarWhereWithAggregatesInput>>;
  conversationId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  joinedDate?: InputMaybe<DateTimeWithAggregatesFilter>;
  leftDate?: InputMaybe<DateTimeWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type PaticipantsUpdateInput = {
  conversation?: InputMaybe<ConversationUpdateOneRequiredWithoutPaticipantsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  joinedDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  leftDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPaticipantsNestedInput>;
};

export type PaticipantsUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  joinedDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  leftDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PaticipantsUpdateManyWithWhereWithoutConversationInput = {
  data: PaticipantsUpdateManyMutationInput;
  where: PaticipantsScalarWhereInput;
};

export type PaticipantsUpdateManyWithWhereWithoutUserInput = {
  data: PaticipantsUpdateManyMutationInput;
  where: PaticipantsScalarWhereInput;
};

export type PaticipantsUpdateManyWithoutConversationNestedInput = {
  connect?: InputMaybe<Array<PaticipantsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PaticipantsCreateOrConnectWithoutConversationInput>>;
  create?: InputMaybe<Array<PaticipantsCreateWithoutConversationInput>>;
  delete?: InputMaybe<Array<PaticipantsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PaticipantsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PaticipantsWhereUniqueInput>>;
  set?: InputMaybe<Array<PaticipantsWhereUniqueInput>>;
  update?: InputMaybe<Array<PaticipantsUpdateWithWhereUniqueWithoutConversationInput>>;
  updateMany?: InputMaybe<Array<PaticipantsUpdateManyWithWhereWithoutConversationInput>>;
  upsert?: InputMaybe<Array<PaticipantsUpsertWithWhereUniqueWithoutConversationInput>>;
};

export type PaticipantsUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<PaticipantsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PaticipantsCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PaticipantsCreateWithoutUserInput>>;
  delete?: InputMaybe<Array<PaticipantsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PaticipantsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PaticipantsWhereUniqueInput>>;
  set?: InputMaybe<Array<PaticipantsWhereUniqueInput>>;
  update?: InputMaybe<Array<PaticipantsUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<PaticipantsUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<PaticipantsUpsertWithWhereUniqueWithoutUserInput>>;
};

export type PaticipantsUpdateWithWhereUniqueWithoutConversationInput = {
  data: PaticipantsUpdateWithoutConversationInput;
  where: PaticipantsWhereUniqueInput;
};

export type PaticipantsUpdateWithWhereUniqueWithoutUserInput = {
  data: PaticipantsUpdateWithoutUserInput;
  where: PaticipantsWhereUniqueInput;
};

export type PaticipantsUpdateWithoutConversationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  joinedDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  leftDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPaticipantsNestedInput>;
};

export type PaticipantsUpdateWithoutUserInput = {
  conversation?: InputMaybe<ConversationUpdateOneRequiredWithoutPaticipantsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  joinedDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  leftDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PaticipantsUpsertWithWhereUniqueWithoutConversationInput = {
  create: PaticipantsCreateWithoutConversationInput;
  update: PaticipantsUpdateWithoutConversationInput;
  where: PaticipantsWhereUniqueInput;
};

export type PaticipantsUpsertWithWhereUniqueWithoutUserInput = {
  create: PaticipantsCreateWithoutUserInput;
  update: PaticipantsUpdateWithoutUserInput;
  where: PaticipantsWhereUniqueInput;
};

export type PaticipantsWhereInput = {
  AND?: InputMaybe<Array<PaticipantsWhereInput>>;
  NOT?: InputMaybe<Array<PaticipantsWhereInput>>;
  OR?: InputMaybe<Array<PaticipantsWhereInput>>;
  conversation?: InputMaybe<ConversationRelationFilter>;
  conversationId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  joinedDate?: InputMaybe<DateTimeFilter>;
  leftDate?: InputMaybe<DateTimeFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type PaticipantsWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateConversation: AggregateConversation;
  aggregateMessage: AggregateMessage;
  aggregatePaticipants: AggregatePaticipants;
  aggregateUser: AggregateUser;
  conversation?: Maybe<Conversation>;
  conversations: Array<Conversation>;
  findFirstConversation?: Maybe<Conversation>;
  findFirstMessage?: Maybe<Message>;
  findFirstPaticipants?: Maybe<Paticipants>;
  findFirstUser?: Maybe<User>;
  findManyPaticipants: Array<Paticipants>;
  findUniquePaticipants?: Maybe<Paticipants>;
  getMe: UserResponse;
  groupByConversation: Array<ConversationGroupBy>;
  groupByMessage: Array<MessageGroupBy>;
  groupByPaticipants: Array<PaticipantsGroupBy>;
  groupByUser: Array<UserGroupBy>;
  logoutUser: Scalars['Boolean'];
  message?: Maybe<Message>;
  messages: Array<Message>;
  refreshAccessToken: LoginResponse;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateConversationArgs = {
  cursor?: InputMaybe<ConversationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ConversationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConversationWhereInput>;
};


export type QueryAggregateMessageArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryAggregatePaticipantsArgs = {
  cursor?: InputMaybe<PaticipantsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PaticipantsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PaticipantsWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryConversationArgs = {
  where: ConversationWhereUniqueInput;
};


export type QueryConversationsArgs = {
  cursor?: InputMaybe<ConversationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ConversationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ConversationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConversationWhereInput>;
};


export type QueryFindFirstConversationArgs = {
  cursor?: InputMaybe<ConversationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ConversationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ConversationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConversationWhereInput>;
};


export type QueryFindFirstMessageArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryFindFirstPaticipantsArgs = {
  cursor?: InputMaybe<PaticipantsWhereUniqueInput>;
  distinct?: InputMaybe<Array<PaticipantsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PaticipantsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PaticipantsWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyPaticipantsArgs = {
  cursor?: InputMaybe<PaticipantsWhereUniqueInput>;
  distinct?: InputMaybe<Array<PaticipantsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PaticipantsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PaticipantsWhereInput>;
};


export type QueryFindUniquePaticipantsArgs = {
  where: PaticipantsWhereUniqueInput;
};


export type QueryGroupByConversationArgs = {
  by: Array<ConversationScalarFieldEnum>;
  having?: InputMaybe<ConversationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ConversationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConversationWhereInput>;
};


export type QueryGroupByMessageArgs = {
  by: Array<MessageScalarFieldEnum>;
  having?: InputMaybe<MessageScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MessageOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryGroupByPaticipantsArgs = {
  by: Array<PaticipantsScalarFieldEnum>;
  having?: InputMaybe<PaticipantsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PaticipantsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PaticipantsWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type QueryMessagesArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type SignUpInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  active: Scalars['Boolean'];
  count: Scalars['Int'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  count?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  count?: InputMaybe<SortOrder>;
};

export type UserContactCreateNestedManyWithoutContactUserInput = {
  connect?: InputMaybe<Array<UserContactWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserContactCreateOrConnectWithoutContactUserInput>>;
  create?: InputMaybe<Array<UserContactCreateWithoutContactUserInput>>;
};

export type UserContactCreateNestedManyWithoutOwnerContactInput = {
  connect?: InputMaybe<Array<UserContactWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserContactCreateOrConnectWithoutOwnerContactInput>>;
  create?: InputMaybe<Array<UserContactCreateWithoutOwnerContactInput>>;
};

export type UserContactCreateOrConnectWithoutContactUserInput = {
  create: UserContactCreateWithoutContactUserInput;
  where: UserContactWhereUniqueInput;
};

export type UserContactCreateOrConnectWithoutOwnerContactInput = {
  create: UserContactCreateWithoutOwnerContactInput;
  where: UserContactWhereUniqueInput;
};

export type UserContactCreateWithoutContactUserInput = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  ownerContact?: InputMaybe<UserCreateNestedOneWithoutOwnerContactInput>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserContactCreateWithoutOwnerContactInput = {
  contactUser: UserCreateNestedOneWithoutContactUserInput;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserContactListRelationFilter = {
  every?: InputMaybe<UserContactWhereInput>;
  none?: InputMaybe<UserContactWhereInput>;
  some?: InputMaybe<UserContactWhereInput>;
};

export type UserContactOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserContactOwnerContactIdContactIdCompoundUniqueInput = {
  contactId: Scalars['String'];
  ownerContactId: Scalars['String'];
};

export type UserContactScalarWhereInput = {
  AND?: InputMaybe<Array<UserContactScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserContactScalarWhereInput>>;
  OR?: InputMaybe<Array<UserContactScalarWhereInput>>;
  contactId?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  ownerContactId?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  photo?: InputMaybe<StringNullableFilter>;
  username?: InputMaybe<StringNullableFilter>;
};

export type UserContactUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserContactUpdateManyWithWhereWithoutContactUserInput = {
  data: UserContactUpdateManyMutationInput;
  where: UserContactScalarWhereInput;
};

export type UserContactUpdateManyWithWhereWithoutOwnerContactInput = {
  data: UserContactUpdateManyMutationInput;
  where: UserContactScalarWhereInput;
};

export type UserContactUpdateManyWithoutContactUserNestedInput = {
  connect?: InputMaybe<Array<UserContactWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserContactCreateOrConnectWithoutContactUserInput>>;
  create?: InputMaybe<Array<UserContactCreateWithoutContactUserInput>>;
  delete?: InputMaybe<Array<UserContactWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserContactScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserContactWhereUniqueInput>>;
  set?: InputMaybe<Array<UserContactWhereUniqueInput>>;
  update?: InputMaybe<Array<UserContactUpdateWithWhereUniqueWithoutContactUserInput>>;
  updateMany?: InputMaybe<Array<UserContactUpdateManyWithWhereWithoutContactUserInput>>;
  upsert?: InputMaybe<Array<UserContactUpsertWithWhereUniqueWithoutContactUserInput>>;
};

export type UserContactUpdateManyWithoutOwnerContactNestedInput = {
  connect?: InputMaybe<Array<UserContactWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserContactCreateOrConnectWithoutOwnerContactInput>>;
  create?: InputMaybe<Array<UserContactCreateWithoutOwnerContactInput>>;
  delete?: InputMaybe<Array<UserContactWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserContactScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserContactWhereUniqueInput>>;
  set?: InputMaybe<Array<UserContactWhereUniqueInput>>;
  update?: InputMaybe<Array<UserContactUpdateWithWhereUniqueWithoutOwnerContactInput>>;
  updateMany?: InputMaybe<Array<UserContactUpdateManyWithWhereWithoutOwnerContactInput>>;
  upsert?: InputMaybe<Array<UserContactUpsertWithWhereUniqueWithoutOwnerContactInput>>;
};

export type UserContactUpdateWithWhereUniqueWithoutContactUserInput = {
  data: UserContactUpdateWithoutContactUserInput;
  where: UserContactWhereUniqueInput;
};

export type UserContactUpdateWithWhereUniqueWithoutOwnerContactInput = {
  data: UserContactUpdateWithoutOwnerContactInput;
  where: UserContactWhereUniqueInput;
};

export type UserContactUpdateWithoutContactUserInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ownerContact?: InputMaybe<UserUpdateOneRequiredWithoutOwnerContactNestedInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserContactUpdateWithoutOwnerContactInput = {
  contactUser?: InputMaybe<UserUpdateOneRequiredWithoutContactUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserContactUpsertWithWhereUniqueWithoutContactUserInput = {
  create: UserContactCreateWithoutContactUserInput;
  update: UserContactUpdateWithoutContactUserInput;
  where: UserContactWhereUniqueInput;
};

export type UserContactUpsertWithWhereUniqueWithoutOwnerContactInput = {
  create: UserContactCreateWithoutOwnerContactInput;
  update: UserContactUpdateWithoutOwnerContactInput;
  where: UserContactWhereUniqueInput;
};

export type UserContactWhereInput = {
  AND?: InputMaybe<Array<UserContactWhereInput>>;
  NOT?: InputMaybe<Array<UserContactWhereInput>>;
  OR?: InputMaybe<Array<UserContactWhereInput>>;
  contactId?: InputMaybe<StringFilter>;
  contactUser?: InputMaybe<UserRelationFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  ownerContact?: InputMaybe<UserRelationFilter>;
  ownerContactId?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  photo?: InputMaybe<StringNullableFilter>;
  username?: InputMaybe<StringNullableFilter>;
};

export type UserContactWhereUniqueInput = {
  ownerContactId?: InputMaybe<Scalars['String']>;
  ownerContactId_contactId?: InputMaybe<UserContactOwnerContactIdContactIdCompoundUniqueInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  Conversation: Scalars['Int'];
  Message: Scalars['Int'];
  Paticipants: Scalars['Int'];
  contactUser: Scalars['Int'];
  ownerContact: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  active: Scalars['Int'];
  count: Scalars['Int'];
  email: Scalars['Int'];
  firstName: Scalars['Int'];
  id: Scalars['Int'];
  isAdmin: Scalars['Int'];
  lastName: Scalars['Int'];
  password: Scalars['Int'];
  phoneNumber: Scalars['Int'];
  photo: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isAdmin?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  photo?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  Conversation?: InputMaybe<ConversationCreateNestedManyWithoutCreatorInput>;
  Message?: InputMaybe<MessageCreateNestedManyWithoutFromUserInput>;
  Paticipants?: InputMaybe<PaticipantsCreateNestedManyWithoutUserInput>;
  active?: InputMaybe<Scalars['Boolean']>;
  contactUser?: InputMaybe<UserContactCreateNestedManyWithoutContactUserInput>;
  count?: InputMaybe<Scalars['Int']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  ownerContact?: InputMaybe<UserContactCreateNestedManyWithoutOwnerContactInput>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserCreateNestedOneWithoutContactUserInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutContactUserInput>;
  create?: InputMaybe<UserCreateWithoutContactUserInput>;
};

export type UserCreateNestedOneWithoutConversationInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutConversationInput>;
  create?: InputMaybe<UserCreateWithoutConversationInput>;
};

export type UserCreateNestedOneWithoutMessageInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMessageInput>;
  create?: InputMaybe<UserCreateWithoutMessageInput>;
};

export type UserCreateNestedOneWithoutOwnerContactInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutOwnerContactInput>;
  create?: InputMaybe<UserCreateWithoutOwnerContactInput>;
};

export type UserCreateNestedOneWithoutPaticipantsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPaticipantsInput>;
  create?: InputMaybe<UserCreateWithoutPaticipantsInput>;
};

export type UserCreateOrConnectWithoutContactUserInput = {
  create: UserCreateWithoutContactUserInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutConversationInput = {
  create: UserCreateWithoutConversationInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMessageInput = {
  create: UserCreateWithoutMessageInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutOwnerContactInput = {
  create: UserCreateWithoutOwnerContactInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPaticipantsInput = {
  create: UserCreateWithoutPaticipantsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutContactUserInput = {
  Conversation?: InputMaybe<ConversationCreateNestedManyWithoutCreatorInput>;
  Message?: InputMaybe<MessageCreateNestedManyWithoutFromUserInput>;
  Paticipants?: InputMaybe<PaticipantsCreateNestedManyWithoutUserInput>;
  active?: InputMaybe<Scalars['Boolean']>;
  count?: InputMaybe<Scalars['Int']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  ownerContact?: InputMaybe<UserContactCreateNestedManyWithoutOwnerContactInput>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutConversationInput = {
  Message?: InputMaybe<MessageCreateNestedManyWithoutFromUserInput>;
  Paticipants?: InputMaybe<PaticipantsCreateNestedManyWithoutUserInput>;
  active?: InputMaybe<Scalars['Boolean']>;
  contactUser?: InputMaybe<UserContactCreateNestedManyWithoutContactUserInput>;
  count?: InputMaybe<Scalars['Int']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  ownerContact?: InputMaybe<UserContactCreateNestedManyWithoutOwnerContactInput>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutMessageInput = {
  Conversation?: InputMaybe<ConversationCreateNestedManyWithoutCreatorInput>;
  Paticipants?: InputMaybe<PaticipantsCreateNestedManyWithoutUserInput>;
  active?: InputMaybe<Scalars['Boolean']>;
  contactUser?: InputMaybe<UserContactCreateNestedManyWithoutContactUserInput>;
  count?: InputMaybe<Scalars['Int']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  ownerContact?: InputMaybe<UserContactCreateNestedManyWithoutOwnerContactInput>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutOwnerContactInput = {
  Conversation?: InputMaybe<ConversationCreateNestedManyWithoutCreatorInput>;
  Message?: InputMaybe<MessageCreateNestedManyWithoutFromUserInput>;
  Paticipants?: InputMaybe<PaticipantsCreateNestedManyWithoutUserInput>;
  active?: InputMaybe<Scalars['Boolean']>;
  contactUser?: InputMaybe<UserContactCreateNestedManyWithoutContactUserInput>;
  count?: InputMaybe<Scalars['Int']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutPaticipantsInput = {
  Conversation?: InputMaybe<ConversationCreateNestedManyWithoutCreatorInput>;
  Message?: InputMaybe<MessageCreateNestedManyWithoutFromUserInput>;
  active?: InputMaybe<Scalars['Boolean']>;
  contactUser?: InputMaybe<UserContactCreateNestedManyWithoutContactUserInput>;
  count?: InputMaybe<Scalars['Int']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  ownerContact?: InputMaybe<UserContactCreateNestedManyWithoutOwnerContactInput>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserData = {
  __typename?: 'UserData';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  active: Scalars['Boolean'];
  count: Scalars['Int'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  active?: Maybe<Scalars['Boolean']>;
  count?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isAdmin?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  photo?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  active?: Maybe<Scalars['Boolean']>;
  count?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isAdmin?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  photo?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  active?: InputMaybe<SortOrder>;
  count?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isAdmin?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  photo?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  Conversation?: InputMaybe<ConversationOrderByRelationAggregateInput>;
  Message?: InputMaybe<MessageOrderByRelationAggregateInput>;
  Paticipants?: InputMaybe<PaticipantsOrderByRelationAggregateInput>;
  active?: InputMaybe<SortOrder>;
  contactUser?: InputMaybe<UserContactOrderByRelationAggregateInput>;
  count?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isAdmin?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  ownerContact?: InputMaybe<UserContactOrderByRelationAggregateInput>;
  phoneNumber?: InputMaybe<SortOrder>;
  photo?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  status: Scalars['String'];
  user?: Maybe<UserData>;
};

export enum UserScalarFieldEnum {
  Active = 'active',
  Count = 'count',
  Email = 'email',
  FirstName = 'firstName',
  Id = 'id',
  IsAdmin = 'isAdmin',
  LastName = 'lastName',
  Password = 'password',
  PhoneNumber = 'phoneNumber',
  Photo = 'photo',
  Username = 'username'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  active?: InputMaybe<BoolWithAggregatesFilter>;
  count?: InputMaybe<IntWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  firstName?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  isAdmin?: InputMaybe<BoolWithAggregatesFilter>;
  lastName?: InputMaybe<StringNullableWithAggregatesFilter>;
  phoneNumber?: InputMaybe<StringNullableWithAggregatesFilter>;
  photo?: InputMaybe<StringNullableWithAggregatesFilter>;
  username?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  count?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  count?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  Conversation?: InputMaybe<ConversationUpdateManyWithoutCreatorNestedInput>;
  Message?: InputMaybe<MessageUpdateManyWithoutFromUserNestedInput>;
  Paticipants?: InputMaybe<PaticipantsUpdateManyWithoutUserNestedInput>;
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  contactUser?: InputMaybe<UserContactUpdateManyWithoutContactUserNestedInput>;
  count?: InputMaybe<IntFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ownerContact?: InputMaybe<UserContactUpdateManyWithoutOwnerContactNestedInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  count?: InputMaybe<IntFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutContactUserNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutContactUserInput>;
  create?: InputMaybe<UserCreateWithoutContactUserInput>;
  update?: InputMaybe<UserUpdateWithoutContactUserInput>;
  upsert?: InputMaybe<UserUpsertWithoutContactUserInput>;
};

export type UserUpdateOneRequiredWithoutConversationNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutConversationInput>;
  create?: InputMaybe<UserCreateWithoutConversationInput>;
  update?: InputMaybe<UserUpdateWithoutConversationInput>;
  upsert?: InputMaybe<UserUpsertWithoutConversationInput>;
};

export type UserUpdateOneRequiredWithoutMessageNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMessageInput>;
  create?: InputMaybe<UserCreateWithoutMessageInput>;
  update?: InputMaybe<UserUpdateWithoutMessageInput>;
  upsert?: InputMaybe<UserUpsertWithoutMessageInput>;
};

export type UserUpdateOneRequiredWithoutOwnerContactNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutOwnerContactInput>;
  create?: InputMaybe<UserCreateWithoutOwnerContactInput>;
  update?: InputMaybe<UserUpdateWithoutOwnerContactInput>;
  upsert?: InputMaybe<UserUpsertWithoutOwnerContactInput>;
};

export type UserUpdateOneRequiredWithoutPaticipantsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPaticipantsInput>;
  create?: InputMaybe<UserCreateWithoutPaticipantsInput>;
  update?: InputMaybe<UserUpdateWithoutPaticipantsInput>;
  upsert?: InputMaybe<UserUpsertWithoutPaticipantsInput>;
};

export type UserUpdateWithoutContactUserInput = {
  Conversation?: InputMaybe<ConversationUpdateManyWithoutCreatorNestedInput>;
  Message?: InputMaybe<MessageUpdateManyWithoutFromUserNestedInput>;
  Paticipants?: InputMaybe<PaticipantsUpdateManyWithoutUserNestedInput>;
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  count?: InputMaybe<IntFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ownerContact?: InputMaybe<UserContactUpdateManyWithoutOwnerContactNestedInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutConversationInput = {
  Message?: InputMaybe<MessageUpdateManyWithoutFromUserNestedInput>;
  Paticipants?: InputMaybe<PaticipantsUpdateManyWithoutUserNestedInput>;
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  contactUser?: InputMaybe<UserContactUpdateManyWithoutContactUserNestedInput>;
  count?: InputMaybe<IntFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ownerContact?: InputMaybe<UserContactUpdateManyWithoutOwnerContactNestedInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutMessageInput = {
  Conversation?: InputMaybe<ConversationUpdateManyWithoutCreatorNestedInput>;
  Paticipants?: InputMaybe<PaticipantsUpdateManyWithoutUserNestedInput>;
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  contactUser?: InputMaybe<UserContactUpdateManyWithoutContactUserNestedInput>;
  count?: InputMaybe<IntFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ownerContact?: InputMaybe<UserContactUpdateManyWithoutOwnerContactNestedInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutOwnerContactInput = {
  Conversation?: InputMaybe<ConversationUpdateManyWithoutCreatorNestedInput>;
  Message?: InputMaybe<MessageUpdateManyWithoutFromUserNestedInput>;
  Paticipants?: InputMaybe<PaticipantsUpdateManyWithoutUserNestedInput>;
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  contactUser?: InputMaybe<UserContactUpdateManyWithoutContactUserNestedInput>;
  count?: InputMaybe<IntFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPaticipantsInput = {
  Conversation?: InputMaybe<ConversationUpdateManyWithoutCreatorNestedInput>;
  Message?: InputMaybe<MessageUpdateManyWithoutFromUserNestedInput>;
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  contactUser?: InputMaybe<UserContactUpdateManyWithoutContactUserNestedInput>;
  count?: InputMaybe<IntFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isAdmin?: InputMaybe<BoolFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ownerContact?: InputMaybe<UserContactUpdateManyWithoutOwnerContactNestedInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutContactUserInput = {
  create: UserCreateWithoutContactUserInput;
  update: UserUpdateWithoutContactUserInput;
};

export type UserUpsertWithoutConversationInput = {
  create: UserCreateWithoutConversationInput;
  update: UserUpdateWithoutConversationInput;
};

export type UserUpsertWithoutMessageInput = {
  create: UserCreateWithoutMessageInput;
  update: UserUpdateWithoutMessageInput;
};

export type UserUpsertWithoutOwnerContactInput = {
  create: UserCreateWithoutOwnerContactInput;
  update: UserUpdateWithoutOwnerContactInput;
};

export type UserUpsertWithoutPaticipantsInput = {
  create: UserCreateWithoutPaticipantsInput;
  update: UserUpdateWithoutPaticipantsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  Conversation?: InputMaybe<ConversationListRelationFilter>;
  Message?: InputMaybe<MessageListRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  Paticipants?: InputMaybe<PaticipantsListRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  contactUser?: InputMaybe<UserContactListRelationFilter>;
  count?: InputMaybe<IntFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isAdmin?: InputMaybe<BoolFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  ownerContact?: InputMaybe<UserContactListRelationFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  photo?: InputMaybe<StringNullableFilter>;
  username?: InputMaybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type CreateOneConversationMutationVariables = Exact<{
  data: ConversationCreateInput;
}>;


export type CreateOneConversationMutation = { __typename?: 'Mutation', createOneConversation: { __typename?: 'Conversation', id: string, name?: string | null, creatorId: string, secondaryName?: string | null, Paticipants: Array<{ __typename?: 'Paticipants', id: string, type: string, userId: string, conversationId: string }> } };

export type ConversationsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConversationWhereInput>;
  messageTake2?: InputMaybe<Scalars['Int']>;
  messageSkip2?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ConversationOrderByWithRelationInput> | ConversationOrderByWithRelationInput>;
  messageOrderBy2?: InputMaybe<Array<MessageOrderByWithRelationInput> | MessageOrderByWithRelationInput>;
}>;


export type ConversationsQuery = { __typename?: 'Query', conversations: Array<{ __typename?: 'Conversation', id: string, name?: string | null, secondaryName?: string | null, creatorId: string, Paticipants: Array<{ __typename?: 'Paticipants', id: string, type: string, conversationId: string, user: { __typename?: 'User', id: string, email: string, username?: string | null, photo?: string | null } }>, Message: Array<{ __typename?: 'Message', id: string, from: string, conversationId: string, text: string }> }>, aggregateConversation: { __typename?: 'AggregateConversation', _count?: { __typename?: 'ConversationCountAggregate', _all: number } | null } };

export type ConversationQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConversationWhereInput>;
}>;


export type ConversationQuery = { __typename?: 'Query', findFirstConversation?: { __typename?: 'Conversation', id: string, name?: string | null, secondaryName?: string | null, creatorId: string, Paticipants: Array<{ __typename?: 'Paticipants', id: string, type: string, userId: string, user: { __typename?: 'User', id: string, email: string, username?: string | null, photo?: string | null } }> } | null };

export type CreateOneMessageMutationVariables = Exact<{
  data: MessageCreateInput;
}>;


export type CreateOneMessageMutation = { __typename?: 'Mutation', createOneMessage: { __typename?: 'Message', id: string, from: string, conversationId: string, text: string, createdAt: any, updatedAt: any, fromUser: { __typename?: 'User', id: string, email: string, username?: string | null }, conversation: { __typename?: 'Conversation', id: string, name?: string | null, creatorId: string, Paticipants: Array<{ __typename?: 'Paticipants', id: string, type: string, userId: string }> } } };

export type MessagesQueryVariables = Exact<{
  where?: InputMaybe<MessageWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput> | MessageOrderByWithRelationInput>;
}>;


export type MessagesQuery = { __typename?: 'Query', messages: Array<{ __typename?: 'Message', id: string, from: string, conversationId: string, text: string, createdAt: any, updatedAt: any, fromUser: { __typename?: 'User', id: string, email: string, username?: string | null }, conversation: { __typename?: 'Conversation', id: string, name?: string | null } }>, aggregateMessage: { __typename?: 'AggregateMessage', _count?: { __typename?: 'MessageCountAggregate', _all: number } | null } };

export type CreateOnePaticipantsMutationVariables = Exact<{
  data: PaticipantsCreateInput;
}>;


export type CreateOnePaticipantsMutation = { __typename?: 'Mutation', createOnePaticipants: { __typename?: 'Paticipants', id: string, type: string, userId: string, conversationId: string, user: { __typename?: 'User', id: string, email: string, username?: string | null, photo?: string | null } } };

export type SignupUserMutationVariables = Exact<{
  input: SignUpInput;
}>;


export type SignupUserMutation = { __typename?: 'Mutation', signupUser: { __typename?: 'UserResponse', status: string, user?: { __typename?: 'UserData', id: string, email: string } | null } };

export type LoginUserMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'LoginResponse', status: string, message: string } };

export type UsersQueryVariables = Exact<{
  where?: InputMaybe<UserWhereInput>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput> | UserOrderByWithRelationInput>;
}>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, username?: string | null, email: string, firstName?: string | null, phoneNumber?: string | null, photo?: string | null, lastName?: string | null, isAdmin: boolean }>, aggregateUser: { __typename?: 'AggregateUser', _count?: { __typename?: 'UserCountAggregate', _all: number } | null } };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', getMe: { __typename?: 'UserResponse', status: string, user?: { __typename?: 'UserData', id: string, email: string, username?: string | null, firstName?: string | null, lastName?: string | null, phoneNumber?: string | null, photo?: string | null } | null } };

export type LogoutQueryVariables = Exact<{ [key: string]: never; }>;


export type LogoutQuery = { __typename?: 'Query', logoutUser: boolean };


export const CreateOneConversationDocument = gql`
    mutation CreateOneConversation($data: ConversationCreateInput!) {
  createOneConversation(data: $data) {
    id
    name
    creatorId
    secondaryName
    creatorId
    Paticipants {
      id
      type
      userId
      conversationId
    }
  }
}
    `;
export type CreateOneConversationMutationFn = Apollo.MutationFunction<CreateOneConversationMutation, CreateOneConversationMutationVariables>;

/**
 * __useCreateOneConversationMutation__
 *
 * To run a mutation, you first call `useCreateOneConversationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneConversationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneConversationMutation, { data, loading, error }] = useCreateOneConversationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneConversationMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneConversationMutation, CreateOneConversationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneConversationMutation, CreateOneConversationMutationVariables>(CreateOneConversationDocument, options);
      }
export type CreateOneConversationMutationHookResult = ReturnType<typeof useCreateOneConversationMutation>;
export type CreateOneConversationMutationResult = Apollo.MutationResult<CreateOneConversationMutation>;
export type CreateOneConversationMutationOptions = Apollo.BaseMutationOptions<CreateOneConversationMutation, CreateOneConversationMutationVariables>;
export const ConversationsDocument = gql`
    query Conversations($take: Int, $skip: Int, $where: ConversationWhereInput, $messageTake2: Int, $messageSkip2: Int, $orderBy: [ConversationOrderByWithRelationInput!], $messageOrderBy2: [MessageOrderByWithRelationInput!]) {
  conversations(take: $take, skip: $skip, where: $where, orderBy: $orderBy) {
    id
    name
    secondaryName
    creatorId
    Paticipants {
      id
      type
      user {
        id
        email
        username
        photo
      }
      conversationId
    }
    Message(take: $messageTake2, skip: $messageSkip2, orderBy: $messageOrderBy2) {
      id
      from
      conversationId
      text
    }
  }
  aggregateConversation(where: $where) {
    _count {
      _all
    }
  }
}
    `;

/**
 * __useConversationsQuery__
 *
 * To run a query within a React component, call `useConversationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useConversationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConversationsQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      where: // value for 'where'
 *      messageTake2: // value for 'messageTake2'
 *      messageSkip2: // value for 'messageSkip2'
 *      orderBy: // value for 'orderBy'
 *      messageOrderBy2: // value for 'messageOrderBy2'
 *   },
 * });
 */
export function useConversationsQuery(baseOptions?: Apollo.QueryHookOptions<ConversationsQuery, ConversationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConversationsQuery, ConversationsQueryVariables>(ConversationsDocument, options);
      }
export function useConversationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConversationsQuery, ConversationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConversationsQuery, ConversationsQueryVariables>(ConversationsDocument, options);
        }
export type ConversationsQueryHookResult = ReturnType<typeof useConversationsQuery>;
export type ConversationsLazyQueryHookResult = ReturnType<typeof useConversationsLazyQuery>;
export type ConversationsQueryResult = Apollo.QueryResult<ConversationsQuery, ConversationsQueryVariables>;
export const ConversationDocument = gql`
    query Conversation($take: Int, $skip: Int, $where: ConversationWhereInput) {
  findFirstConversation(take: $take, skip: $skip, where: $where) {
    id
    name
    secondaryName
    creatorId
    Paticipants {
      id
      type
      userId
      user {
        id
        email
        username
        photo
      }
    }
  }
}
    `;

/**
 * __useConversationQuery__
 *
 * To run a query within a React component, call `useConversationQuery` and pass it any options that fit your needs.
 * When your component renders, `useConversationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConversationQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useConversationQuery(baseOptions?: Apollo.QueryHookOptions<ConversationQuery, ConversationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConversationQuery, ConversationQueryVariables>(ConversationDocument, options);
      }
export function useConversationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConversationQuery, ConversationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConversationQuery, ConversationQueryVariables>(ConversationDocument, options);
        }
export type ConversationQueryHookResult = ReturnType<typeof useConversationQuery>;
export type ConversationLazyQueryHookResult = ReturnType<typeof useConversationLazyQuery>;
export type ConversationQueryResult = Apollo.QueryResult<ConversationQuery, ConversationQueryVariables>;
export const CreateOneMessageDocument = gql`
    mutation CreateOneMessage($data: MessageCreateInput!) {
  createOneMessage(data: $data) {
    id
    from
    conversationId
    text
    createdAt
    updatedAt
    fromUser {
      id
      email
      username
    }
    conversation {
      id
      name
      creatorId
      Paticipants {
        id
        type
        userId
      }
    }
  }
}
    `;
export type CreateOneMessageMutationFn = Apollo.MutationFunction<CreateOneMessageMutation, CreateOneMessageMutationVariables>;

/**
 * __useCreateOneMessageMutation__
 *
 * To run a mutation, you first call `useCreateOneMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneMessageMutation, { data, loading, error }] = useCreateOneMessageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneMessageMutation, CreateOneMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneMessageMutation, CreateOneMessageMutationVariables>(CreateOneMessageDocument, options);
      }
export type CreateOneMessageMutationHookResult = ReturnType<typeof useCreateOneMessageMutation>;
export type CreateOneMessageMutationResult = Apollo.MutationResult<CreateOneMessageMutation>;
export type CreateOneMessageMutationOptions = Apollo.BaseMutationOptions<CreateOneMessageMutation, CreateOneMessageMutationVariables>;
export const MessagesDocument = gql`
    query Messages($where: MessageWhereInput, $skip: Int, $take: Int, $orderBy: [MessageOrderByWithRelationInput!]) {
  messages(where: $where, skip: $skip, take: $take, orderBy: $orderBy) {
    id
    from
    conversationId
    text
    createdAt
    updatedAt
    fromUser {
      id
      email
      username
    }
    conversation {
      id
      name
    }
  }
  aggregateMessage(where: $where) {
    _count {
      _all
    }
  }
}
    `;

/**
 * __useMessagesQuery__
 *
 * To run a query within a React component, call `useMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useMessagesQuery(baseOptions?: Apollo.QueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, options);
      }
export function useMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, options);
        }
export type MessagesQueryHookResult = ReturnType<typeof useMessagesQuery>;
export type MessagesLazyQueryHookResult = ReturnType<typeof useMessagesLazyQuery>;
export type MessagesQueryResult = Apollo.QueryResult<MessagesQuery, MessagesQueryVariables>;
export const CreateOnePaticipantsDocument = gql`
    mutation CreateOnePaticipants($data: PaticipantsCreateInput!) {
  createOnePaticipants(data: $data) {
    id
    type
    userId
    conversationId
    user {
      id
      email
      username
      photo
    }
  }
}
    `;
export type CreateOnePaticipantsMutationFn = Apollo.MutationFunction<CreateOnePaticipantsMutation, CreateOnePaticipantsMutationVariables>;

/**
 * __useCreateOnePaticipantsMutation__
 *
 * To run a mutation, you first call `useCreateOnePaticipantsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOnePaticipantsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOnePaticipantsMutation, { data, loading, error }] = useCreateOnePaticipantsMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOnePaticipantsMutation(baseOptions?: Apollo.MutationHookOptions<CreateOnePaticipantsMutation, CreateOnePaticipantsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOnePaticipantsMutation, CreateOnePaticipantsMutationVariables>(CreateOnePaticipantsDocument, options);
      }
export type CreateOnePaticipantsMutationHookResult = ReturnType<typeof useCreateOnePaticipantsMutation>;
export type CreateOnePaticipantsMutationResult = Apollo.MutationResult<CreateOnePaticipantsMutation>;
export type CreateOnePaticipantsMutationOptions = Apollo.BaseMutationOptions<CreateOnePaticipantsMutation, CreateOnePaticipantsMutationVariables>;
export const SignupUserDocument = gql`
    mutation SignupUser($input: SignUpInput!) {
  signupUser(input: $input) {
    status
    user {
      id
      email
    }
  }
}
    `;
export type SignupUserMutationFn = Apollo.MutationFunction<SignupUserMutation, SignupUserMutationVariables>;

/**
 * __useSignupUserMutation__
 *
 * To run a mutation, you first call `useSignupUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupUserMutation, { data, loading, error }] = useSignupUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupUserMutation(baseOptions?: Apollo.MutationHookOptions<SignupUserMutation, SignupUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupUserMutation, SignupUserMutationVariables>(SignupUserDocument, options);
      }
export type SignupUserMutationHookResult = ReturnType<typeof useSignupUserMutation>;
export type SignupUserMutationResult = Apollo.MutationResult<SignupUserMutation>;
export type SignupUserMutationOptions = Apollo.BaseMutationOptions<SignupUserMutation, SignupUserMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($input: LoginInput!) {
  loginUser(input: $input) {
    status
    message
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const UsersDocument = gql`
    query Users($where: UserWhereInput, $take: Int, $skip: Int, $orderBy: [UserOrderByWithRelationInput!]) {
  users(where: $where, take: $take, skip: $skip, orderBy: $orderBy) {
    id
    username
    email
    firstName
    phoneNumber
    photo
    lastName
    isAdmin
  }
  aggregateUser(where: $where) {
    _count {
      _all
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      where: // value for 'where'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const GetMeDocument = gql`
    query getMe {
  getMe {
    status
    user {
      id
      email
      username
      firstName
      lastName
      phoneNumber
      photo
    }
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;
export const LogoutDocument = gql`
    query Logout {
  logoutUser
}
    `;

/**
 * __useLogoutQuery__
 *
 * To run a query within a React component, call `useLogoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogoutQuery({
 *   variables: {
 *   },
 * });
 */
export function useLogoutQuery(baseOptions?: Apollo.QueryHookOptions<LogoutQuery, LogoutQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, options);
      }
export function useLogoutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LogoutQuery, LogoutQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, options);
        }
export type LogoutQueryHookResult = ReturnType<typeof useLogoutQuery>;
export type LogoutLazyQueryHookResult = ReturnType<typeof useLogoutLazyQuery>;
export type LogoutQueryResult = Apollo.QueryResult<LogoutQuery, LogoutQueryVariables>;