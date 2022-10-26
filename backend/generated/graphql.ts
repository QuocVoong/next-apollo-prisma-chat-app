import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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

export type ConversationCreateManyCreatorInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  secondaryName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ConversationCreateManyCreatorInputEnvelope = {
  data: Array<ConversationCreateManyCreatorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ConversationCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creatorId: Scalars['String'];
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
  createMany?: InputMaybe<ConversationCreateManyCreatorInputEnvelope>;
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
  createMany?: InputMaybe<ConversationCreateManyCreatorInputEnvelope>;
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

export type MessageCreateManyConversationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  from: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MessageCreateManyConversationInputEnvelope = {
  data: Array<MessageCreateManyConversationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MessageCreateManyFromUserInput = {
  conversationId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MessageCreateManyFromUserInputEnvelope = {
  data: Array<MessageCreateManyFromUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MessageCreateManyInput = {
  conversationId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  from: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MessageCreateNestedManyWithoutConversationInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutConversationInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutConversationInput>>;
  createMany?: InputMaybe<MessageCreateManyConversationInputEnvelope>;
};

export type MessageCreateNestedManyWithoutFromUserInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutFromUserInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutFromUserInput>>;
  createMany?: InputMaybe<MessageCreateManyFromUserInputEnvelope>;
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
  createMany?: InputMaybe<MessageCreateManyConversationInputEnvelope>;
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
  createMany?: InputMaybe<MessageCreateManyFromUserInputEnvelope>;
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
  createManyConversation: AffectedRowsOutput;
  createManyMessage: AffectedRowsOutput;
  createManyPaticipants: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
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


export type MutationCreateManyConversationArgs = {
  data: Array<ConversationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyMessageArgs = {
  data: Array<MessageCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPaticipantsArgs = {
  data: Array<PaticipantsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
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

export type PaticipantsCreateManyConversationInput = {
  id?: InputMaybe<Scalars['String']>;
  joinedDate?: InputMaybe<Scalars['DateTime']>;
  leftDate?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type PaticipantsCreateManyConversationInputEnvelope = {
  data: Array<PaticipantsCreateManyConversationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PaticipantsCreateManyInput = {
  conversationId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  joinedDate?: InputMaybe<Scalars['DateTime']>;
  leftDate?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type PaticipantsCreateManyUserInput = {
  conversationId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  joinedDate?: InputMaybe<Scalars['DateTime']>;
  leftDate?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<Scalars['String']>;
};

export type PaticipantsCreateManyUserInputEnvelope = {
  data: Array<PaticipantsCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PaticipantsCreateNestedManyWithoutConversationInput = {
  connect?: InputMaybe<Array<PaticipantsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PaticipantsCreateOrConnectWithoutConversationInput>>;
  create?: InputMaybe<Array<PaticipantsCreateWithoutConversationInput>>;
  createMany?: InputMaybe<PaticipantsCreateManyConversationInputEnvelope>;
};

export type PaticipantsCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<PaticipantsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PaticipantsCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PaticipantsCreateWithoutUserInput>>;
  createMany?: InputMaybe<PaticipantsCreateManyUserInputEnvelope>;
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
  createMany?: InputMaybe<PaticipantsCreateManyConversationInputEnvelope>;
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
  createMany?: InputMaybe<PaticipantsCreateManyUserInputEnvelope>;
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

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

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
  mode?: InputMaybe<QueryMode>;
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
  mode?: InputMaybe<QueryMode>;
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
  mode?: InputMaybe<QueryMode>;
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
  mode?: InputMaybe<QueryMode>;
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

export type UserContactCreateManyContactUserInput = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  ownerContactId?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserContactCreateManyContactUserInputEnvelope = {
  data: Array<UserContactCreateManyContactUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserContactCreateManyOwnerContactInput = {
  contactId: Scalars['String'];
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserContactCreateManyOwnerContactInputEnvelope = {
  data: Array<UserContactCreateManyOwnerContactInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserContactCreateNestedManyWithoutContactUserInput = {
  connect?: InputMaybe<Array<UserContactWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserContactCreateOrConnectWithoutContactUserInput>>;
  create?: InputMaybe<Array<UserContactCreateWithoutContactUserInput>>;
  createMany?: InputMaybe<UserContactCreateManyContactUserInputEnvelope>;
};

export type UserContactCreateNestedManyWithoutOwnerContactInput = {
  connect?: InputMaybe<Array<UserContactWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserContactCreateOrConnectWithoutOwnerContactInput>>;
  create?: InputMaybe<Array<UserContactCreateWithoutOwnerContactInput>>;
  createMany?: InputMaybe<UserContactCreateManyOwnerContactInputEnvelope>;
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
  createMany?: InputMaybe<UserContactCreateManyContactUserInputEnvelope>;
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
  createMany?: InputMaybe<UserContactCreateManyOwnerContactInputEnvelope>;
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

export type UserCreateManyInput = {
  active?: InputMaybe<Scalars['Boolean']>;
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AffectedRowsOutput: ResolverTypeWrapper<AffectedRowsOutput>;
  AggregateConversation: ResolverTypeWrapper<AggregateConversation>;
  AggregateMessage: ResolverTypeWrapper<AggregateMessage>;
  AggregatePaticipants: ResolverTypeWrapper<AggregatePaticipants>;
  AggregateUser: ResolverTypeWrapper<AggregateUser>;
  BoolFieldUpdateOperationsInput: BoolFieldUpdateOperationsInput;
  BoolFilter: BoolFilter;
  BoolWithAggregatesFilter: BoolWithAggregatesFilter;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Conversation: ResolverTypeWrapper<Conversation>;
  ConversationCount: ResolverTypeWrapper<ConversationCount>;
  ConversationCountAggregate: ResolverTypeWrapper<ConversationCountAggregate>;
  ConversationCountOrderByAggregateInput: ConversationCountOrderByAggregateInput;
  ConversationCreateInput: ConversationCreateInput;
  ConversationCreateManyCreatorInput: ConversationCreateManyCreatorInput;
  ConversationCreateManyCreatorInputEnvelope: ConversationCreateManyCreatorInputEnvelope;
  ConversationCreateManyInput: ConversationCreateManyInput;
  ConversationCreateNestedManyWithoutCreatorInput: ConversationCreateNestedManyWithoutCreatorInput;
  ConversationCreateNestedOneWithoutMessageInput: ConversationCreateNestedOneWithoutMessageInput;
  ConversationCreateNestedOneWithoutPaticipantsInput: ConversationCreateNestedOneWithoutPaticipantsInput;
  ConversationCreateOrConnectWithoutCreatorInput: ConversationCreateOrConnectWithoutCreatorInput;
  ConversationCreateOrConnectWithoutMessageInput: ConversationCreateOrConnectWithoutMessageInput;
  ConversationCreateOrConnectWithoutPaticipantsInput: ConversationCreateOrConnectWithoutPaticipantsInput;
  ConversationCreateWithoutCreatorInput: ConversationCreateWithoutCreatorInput;
  ConversationCreateWithoutMessageInput: ConversationCreateWithoutMessageInput;
  ConversationCreateWithoutPaticipantsInput: ConversationCreateWithoutPaticipantsInput;
  ConversationGroupBy: ResolverTypeWrapper<ConversationGroupBy>;
  ConversationListRelationFilter: ConversationListRelationFilter;
  ConversationMaxAggregate: ResolverTypeWrapper<ConversationMaxAggregate>;
  ConversationMaxOrderByAggregateInput: ConversationMaxOrderByAggregateInput;
  ConversationMinAggregate: ResolverTypeWrapper<ConversationMinAggregate>;
  ConversationMinOrderByAggregateInput: ConversationMinOrderByAggregateInput;
  ConversationOrderByRelationAggregateInput: ConversationOrderByRelationAggregateInput;
  ConversationOrderByWithAggregationInput: ConversationOrderByWithAggregationInput;
  ConversationOrderByWithRelationInput: ConversationOrderByWithRelationInput;
  ConversationRelationFilter: ConversationRelationFilter;
  ConversationScalarFieldEnum: ConversationScalarFieldEnum;
  ConversationScalarWhereInput: ConversationScalarWhereInput;
  ConversationScalarWhereWithAggregatesInput: ConversationScalarWhereWithAggregatesInput;
  ConversationUpdateInput: ConversationUpdateInput;
  ConversationUpdateManyMutationInput: ConversationUpdateManyMutationInput;
  ConversationUpdateManyWithWhereWithoutCreatorInput: ConversationUpdateManyWithWhereWithoutCreatorInput;
  ConversationUpdateManyWithoutCreatorNestedInput: ConversationUpdateManyWithoutCreatorNestedInput;
  ConversationUpdateOneRequiredWithoutMessageNestedInput: ConversationUpdateOneRequiredWithoutMessageNestedInput;
  ConversationUpdateOneRequiredWithoutPaticipantsNestedInput: ConversationUpdateOneRequiredWithoutPaticipantsNestedInput;
  ConversationUpdateWithWhereUniqueWithoutCreatorInput: ConversationUpdateWithWhereUniqueWithoutCreatorInput;
  ConversationUpdateWithoutCreatorInput: ConversationUpdateWithoutCreatorInput;
  ConversationUpdateWithoutMessageInput: ConversationUpdateWithoutMessageInput;
  ConversationUpdateWithoutPaticipantsInput: ConversationUpdateWithoutPaticipantsInput;
  ConversationUpsertWithWhereUniqueWithoutCreatorInput: ConversationUpsertWithWhereUniqueWithoutCreatorInput;
  ConversationUpsertWithoutMessageInput: ConversationUpsertWithoutMessageInput;
  ConversationUpsertWithoutPaticipantsInput: ConversationUpsertWithoutPaticipantsInput;
  ConversationWhereInput: ConversationWhereInput;
  ConversationWhereUniqueInput: ConversationWhereUniqueInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  DateTimeWithAggregatesFilter: DateTimeWithAggregatesFilter;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  IntFilter: IntFilter;
  IntWithAggregatesFilter: IntWithAggregatesFilter;
  LoginInput: LoginInput;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  Message: ResolverTypeWrapper<Message>;
  MessageCountAggregate: ResolverTypeWrapper<MessageCountAggregate>;
  MessageCountOrderByAggregateInput: MessageCountOrderByAggregateInput;
  MessageCreateInput: MessageCreateInput;
  MessageCreateManyConversationInput: MessageCreateManyConversationInput;
  MessageCreateManyConversationInputEnvelope: MessageCreateManyConversationInputEnvelope;
  MessageCreateManyFromUserInput: MessageCreateManyFromUserInput;
  MessageCreateManyFromUserInputEnvelope: MessageCreateManyFromUserInputEnvelope;
  MessageCreateManyInput: MessageCreateManyInput;
  MessageCreateNestedManyWithoutConversationInput: MessageCreateNestedManyWithoutConversationInput;
  MessageCreateNestedManyWithoutFromUserInput: MessageCreateNestedManyWithoutFromUserInput;
  MessageCreateOrConnectWithoutConversationInput: MessageCreateOrConnectWithoutConversationInput;
  MessageCreateOrConnectWithoutFromUserInput: MessageCreateOrConnectWithoutFromUserInput;
  MessageCreateWithoutConversationInput: MessageCreateWithoutConversationInput;
  MessageCreateWithoutFromUserInput: MessageCreateWithoutFromUserInput;
  MessageGroupBy: ResolverTypeWrapper<MessageGroupBy>;
  MessageListRelationFilter: MessageListRelationFilter;
  MessageMaxAggregate: ResolverTypeWrapper<MessageMaxAggregate>;
  MessageMaxOrderByAggregateInput: MessageMaxOrderByAggregateInput;
  MessageMinAggregate: ResolverTypeWrapper<MessageMinAggregate>;
  MessageMinOrderByAggregateInput: MessageMinOrderByAggregateInput;
  MessageOrderByRelationAggregateInput: MessageOrderByRelationAggregateInput;
  MessageOrderByWithAggregationInput: MessageOrderByWithAggregationInput;
  MessageOrderByWithRelationInput: MessageOrderByWithRelationInput;
  MessageScalarFieldEnum: MessageScalarFieldEnum;
  MessageScalarWhereInput: MessageScalarWhereInput;
  MessageScalarWhereWithAggregatesInput: MessageScalarWhereWithAggregatesInput;
  MessageUpdateInput: MessageUpdateInput;
  MessageUpdateManyMutationInput: MessageUpdateManyMutationInput;
  MessageUpdateManyWithWhereWithoutConversationInput: MessageUpdateManyWithWhereWithoutConversationInput;
  MessageUpdateManyWithWhereWithoutFromUserInput: MessageUpdateManyWithWhereWithoutFromUserInput;
  MessageUpdateManyWithoutConversationNestedInput: MessageUpdateManyWithoutConversationNestedInput;
  MessageUpdateManyWithoutFromUserNestedInput: MessageUpdateManyWithoutFromUserNestedInput;
  MessageUpdateWithWhereUniqueWithoutConversationInput: MessageUpdateWithWhereUniqueWithoutConversationInput;
  MessageUpdateWithWhereUniqueWithoutFromUserInput: MessageUpdateWithWhereUniqueWithoutFromUserInput;
  MessageUpdateWithoutConversationInput: MessageUpdateWithoutConversationInput;
  MessageUpdateWithoutFromUserInput: MessageUpdateWithoutFromUserInput;
  MessageUpsertWithWhereUniqueWithoutConversationInput: MessageUpsertWithWhereUniqueWithoutConversationInput;
  MessageUpsertWithWhereUniqueWithoutFromUserInput: MessageUpsertWithWhereUniqueWithoutFromUserInput;
  MessageWhereInput: MessageWhereInput;
  MessageWhereUniqueInput: MessageWhereUniqueInput;
  Mutation: ResolverTypeWrapper<{}>;
  NestedBoolFilter: NestedBoolFilter;
  NestedBoolWithAggregatesFilter: NestedBoolWithAggregatesFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeWithAggregatesFilter: NestedDateTimeWithAggregatesFilter;
  NestedFloatFilter: NestedFloatFilter;
  NestedIntFilter: NestedIntFilter;
  NestedIntNullableFilter: NestedIntNullableFilter;
  NestedIntWithAggregatesFilter: NestedIntWithAggregatesFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  NestedStringNullableWithAggregatesFilter: NestedStringNullableWithAggregatesFilter;
  NestedStringWithAggregatesFilter: NestedStringWithAggregatesFilter;
  NullableStringFieldUpdateOperationsInput: NullableStringFieldUpdateOperationsInput;
  Paticipants: ResolverTypeWrapper<Paticipants>;
  PaticipantsCountAggregate: ResolverTypeWrapper<PaticipantsCountAggregate>;
  PaticipantsCountOrderByAggregateInput: PaticipantsCountOrderByAggregateInput;
  PaticipantsCreateInput: PaticipantsCreateInput;
  PaticipantsCreateManyConversationInput: PaticipantsCreateManyConversationInput;
  PaticipantsCreateManyConversationInputEnvelope: PaticipantsCreateManyConversationInputEnvelope;
  PaticipantsCreateManyInput: PaticipantsCreateManyInput;
  PaticipantsCreateManyUserInput: PaticipantsCreateManyUserInput;
  PaticipantsCreateManyUserInputEnvelope: PaticipantsCreateManyUserInputEnvelope;
  PaticipantsCreateNestedManyWithoutConversationInput: PaticipantsCreateNestedManyWithoutConversationInput;
  PaticipantsCreateNestedManyWithoutUserInput: PaticipantsCreateNestedManyWithoutUserInput;
  PaticipantsCreateOrConnectWithoutConversationInput: PaticipantsCreateOrConnectWithoutConversationInput;
  PaticipantsCreateOrConnectWithoutUserInput: PaticipantsCreateOrConnectWithoutUserInput;
  PaticipantsCreateWithoutConversationInput: PaticipantsCreateWithoutConversationInput;
  PaticipantsCreateWithoutUserInput: PaticipantsCreateWithoutUserInput;
  PaticipantsGroupBy: ResolverTypeWrapper<PaticipantsGroupBy>;
  PaticipantsListRelationFilter: PaticipantsListRelationFilter;
  PaticipantsMaxAggregate: ResolverTypeWrapper<PaticipantsMaxAggregate>;
  PaticipantsMaxOrderByAggregateInput: PaticipantsMaxOrderByAggregateInput;
  PaticipantsMinAggregate: ResolverTypeWrapper<PaticipantsMinAggregate>;
  PaticipantsMinOrderByAggregateInput: PaticipantsMinOrderByAggregateInput;
  PaticipantsOrderByRelationAggregateInput: PaticipantsOrderByRelationAggregateInput;
  PaticipantsOrderByWithAggregationInput: PaticipantsOrderByWithAggregationInput;
  PaticipantsOrderByWithRelationInput: PaticipantsOrderByWithRelationInput;
  PaticipantsScalarFieldEnum: PaticipantsScalarFieldEnum;
  PaticipantsScalarWhereInput: PaticipantsScalarWhereInput;
  PaticipantsScalarWhereWithAggregatesInput: PaticipantsScalarWhereWithAggregatesInput;
  PaticipantsUpdateInput: PaticipantsUpdateInput;
  PaticipantsUpdateManyMutationInput: PaticipantsUpdateManyMutationInput;
  PaticipantsUpdateManyWithWhereWithoutConversationInput: PaticipantsUpdateManyWithWhereWithoutConversationInput;
  PaticipantsUpdateManyWithWhereWithoutUserInput: PaticipantsUpdateManyWithWhereWithoutUserInput;
  PaticipantsUpdateManyWithoutConversationNestedInput: PaticipantsUpdateManyWithoutConversationNestedInput;
  PaticipantsUpdateManyWithoutUserNestedInput: PaticipantsUpdateManyWithoutUserNestedInput;
  PaticipantsUpdateWithWhereUniqueWithoutConversationInput: PaticipantsUpdateWithWhereUniqueWithoutConversationInput;
  PaticipantsUpdateWithWhereUniqueWithoutUserInput: PaticipantsUpdateWithWhereUniqueWithoutUserInput;
  PaticipantsUpdateWithoutConversationInput: PaticipantsUpdateWithoutConversationInput;
  PaticipantsUpdateWithoutUserInput: PaticipantsUpdateWithoutUserInput;
  PaticipantsUpsertWithWhereUniqueWithoutConversationInput: PaticipantsUpsertWithWhereUniqueWithoutConversationInput;
  PaticipantsUpsertWithWhereUniqueWithoutUserInput: PaticipantsUpsertWithWhereUniqueWithoutUserInput;
  PaticipantsWhereInput: PaticipantsWhereInput;
  PaticipantsWhereUniqueInput: PaticipantsWhereUniqueInput;
  Query: ResolverTypeWrapper<{}>;
  QueryMode: QueryMode;
  SignUpInput: SignUpInput;
  SortOrder: SortOrder;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  StringNullableWithAggregatesFilter: StringNullableWithAggregatesFilter;
  StringWithAggregatesFilter: StringWithAggregatesFilter;
  User: ResolverTypeWrapper<User>;
  UserAvgAggregate: ResolverTypeWrapper<UserAvgAggregate>;
  UserAvgOrderByAggregateInput: UserAvgOrderByAggregateInput;
  UserContactCreateManyContactUserInput: UserContactCreateManyContactUserInput;
  UserContactCreateManyContactUserInputEnvelope: UserContactCreateManyContactUserInputEnvelope;
  UserContactCreateManyOwnerContactInput: UserContactCreateManyOwnerContactInput;
  UserContactCreateManyOwnerContactInputEnvelope: UserContactCreateManyOwnerContactInputEnvelope;
  UserContactCreateNestedManyWithoutContactUserInput: UserContactCreateNestedManyWithoutContactUserInput;
  UserContactCreateNestedManyWithoutOwnerContactInput: UserContactCreateNestedManyWithoutOwnerContactInput;
  UserContactCreateOrConnectWithoutContactUserInput: UserContactCreateOrConnectWithoutContactUserInput;
  UserContactCreateOrConnectWithoutOwnerContactInput: UserContactCreateOrConnectWithoutOwnerContactInput;
  UserContactCreateWithoutContactUserInput: UserContactCreateWithoutContactUserInput;
  UserContactCreateWithoutOwnerContactInput: UserContactCreateWithoutOwnerContactInput;
  UserContactListRelationFilter: UserContactListRelationFilter;
  UserContactOrderByRelationAggregateInput: UserContactOrderByRelationAggregateInput;
  UserContactOwnerContactIdContactIdCompoundUniqueInput: UserContactOwnerContactIdContactIdCompoundUniqueInput;
  UserContactScalarWhereInput: UserContactScalarWhereInput;
  UserContactUpdateManyMutationInput: UserContactUpdateManyMutationInput;
  UserContactUpdateManyWithWhereWithoutContactUserInput: UserContactUpdateManyWithWhereWithoutContactUserInput;
  UserContactUpdateManyWithWhereWithoutOwnerContactInput: UserContactUpdateManyWithWhereWithoutOwnerContactInput;
  UserContactUpdateManyWithoutContactUserNestedInput: UserContactUpdateManyWithoutContactUserNestedInput;
  UserContactUpdateManyWithoutOwnerContactNestedInput: UserContactUpdateManyWithoutOwnerContactNestedInput;
  UserContactUpdateWithWhereUniqueWithoutContactUserInput: UserContactUpdateWithWhereUniqueWithoutContactUserInput;
  UserContactUpdateWithWhereUniqueWithoutOwnerContactInput: UserContactUpdateWithWhereUniqueWithoutOwnerContactInput;
  UserContactUpdateWithoutContactUserInput: UserContactUpdateWithoutContactUserInput;
  UserContactUpdateWithoutOwnerContactInput: UserContactUpdateWithoutOwnerContactInput;
  UserContactUpsertWithWhereUniqueWithoutContactUserInput: UserContactUpsertWithWhereUniqueWithoutContactUserInput;
  UserContactUpsertWithWhereUniqueWithoutOwnerContactInput: UserContactUpsertWithWhereUniqueWithoutOwnerContactInput;
  UserContactWhereInput: UserContactWhereInput;
  UserContactWhereUniqueInput: UserContactWhereUniqueInput;
  UserCount: ResolverTypeWrapper<UserCount>;
  UserCountAggregate: ResolverTypeWrapper<UserCountAggregate>;
  UserCountOrderByAggregateInput: UserCountOrderByAggregateInput;
  UserCreateInput: UserCreateInput;
  UserCreateManyInput: UserCreateManyInput;
  UserCreateNestedOneWithoutContactUserInput: UserCreateNestedOneWithoutContactUserInput;
  UserCreateNestedOneWithoutConversationInput: UserCreateNestedOneWithoutConversationInput;
  UserCreateNestedOneWithoutMessageInput: UserCreateNestedOneWithoutMessageInput;
  UserCreateNestedOneWithoutOwnerContactInput: UserCreateNestedOneWithoutOwnerContactInput;
  UserCreateNestedOneWithoutPaticipantsInput: UserCreateNestedOneWithoutPaticipantsInput;
  UserCreateOrConnectWithoutContactUserInput: UserCreateOrConnectWithoutContactUserInput;
  UserCreateOrConnectWithoutConversationInput: UserCreateOrConnectWithoutConversationInput;
  UserCreateOrConnectWithoutMessageInput: UserCreateOrConnectWithoutMessageInput;
  UserCreateOrConnectWithoutOwnerContactInput: UserCreateOrConnectWithoutOwnerContactInput;
  UserCreateOrConnectWithoutPaticipantsInput: UserCreateOrConnectWithoutPaticipantsInput;
  UserCreateWithoutContactUserInput: UserCreateWithoutContactUserInput;
  UserCreateWithoutConversationInput: UserCreateWithoutConversationInput;
  UserCreateWithoutMessageInput: UserCreateWithoutMessageInput;
  UserCreateWithoutOwnerContactInput: UserCreateWithoutOwnerContactInput;
  UserCreateWithoutPaticipantsInput: UserCreateWithoutPaticipantsInput;
  UserData: ResolverTypeWrapper<UserData>;
  UserGroupBy: ResolverTypeWrapper<UserGroupBy>;
  UserMaxAggregate: ResolverTypeWrapper<UserMaxAggregate>;
  UserMaxOrderByAggregateInput: UserMaxOrderByAggregateInput;
  UserMinAggregate: ResolverTypeWrapper<UserMinAggregate>;
  UserMinOrderByAggregateInput: UserMinOrderByAggregateInput;
  UserOrderByWithAggregationInput: UserOrderByWithAggregationInput;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserRelationFilter: UserRelationFilter;
  UserResponse: ResolverTypeWrapper<UserResponse>;
  UserScalarFieldEnum: UserScalarFieldEnum;
  UserScalarWhereWithAggregatesInput: UserScalarWhereWithAggregatesInput;
  UserSumAggregate: ResolverTypeWrapper<UserSumAggregate>;
  UserSumOrderByAggregateInput: UserSumOrderByAggregateInput;
  UserUpdateInput: UserUpdateInput;
  UserUpdateManyMutationInput: UserUpdateManyMutationInput;
  UserUpdateOneRequiredWithoutContactUserNestedInput: UserUpdateOneRequiredWithoutContactUserNestedInput;
  UserUpdateOneRequiredWithoutConversationNestedInput: UserUpdateOneRequiredWithoutConversationNestedInput;
  UserUpdateOneRequiredWithoutMessageNestedInput: UserUpdateOneRequiredWithoutMessageNestedInput;
  UserUpdateOneRequiredWithoutOwnerContactNestedInput: UserUpdateOneRequiredWithoutOwnerContactNestedInput;
  UserUpdateOneRequiredWithoutPaticipantsNestedInput: UserUpdateOneRequiredWithoutPaticipantsNestedInput;
  UserUpdateWithoutContactUserInput: UserUpdateWithoutContactUserInput;
  UserUpdateWithoutConversationInput: UserUpdateWithoutConversationInput;
  UserUpdateWithoutMessageInput: UserUpdateWithoutMessageInput;
  UserUpdateWithoutOwnerContactInput: UserUpdateWithoutOwnerContactInput;
  UserUpdateWithoutPaticipantsInput: UserUpdateWithoutPaticipantsInput;
  UserUpsertWithoutContactUserInput: UserUpsertWithoutContactUserInput;
  UserUpsertWithoutConversationInput: UserUpsertWithoutConversationInput;
  UserUpsertWithoutMessageInput: UserUpsertWithoutMessageInput;
  UserUpsertWithoutOwnerContactInput: UserUpsertWithoutOwnerContactInput;
  UserUpsertWithoutPaticipantsInput: UserUpsertWithoutPaticipantsInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AffectedRowsOutput: AffectedRowsOutput;
  AggregateConversation: AggregateConversation;
  AggregateMessage: AggregateMessage;
  AggregatePaticipants: AggregatePaticipants;
  AggregateUser: AggregateUser;
  BoolFieldUpdateOperationsInput: BoolFieldUpdateOperationsInput;
  BoolFilter: BoolFilter;
  BoolWithAggregatesFilter: BoolWithAggregatesFilter;
  Boolean: Scalars['Boolean'];
  Conversation: Conversation;
  ConversationCount: ConversationCount;
  ConversationCountAggregate: ConversationCountAggregate;
  ConversationCountOrderByAggregateInput: ConversationCountOrderByAggregateInput;
  ConversationCreateInput: ConversationCreateInput;
  ConversationCreateManyCreatorInput: ConversationCreateManyCreatorInput;
  ConversationCreateManyCreatorInputEnvelope: ConversationCreateManyCreatorInputEnvelope;
  ConversationCreateManyInput: ConversationCreateManyInput;
  ConversationCreateNestedManyWithoutCreatorInput: ConversationCreateNestedManyWithoutCreatorInput;
  ConversationCreateNestedOneWithoutMessageInput: ConversationCreateNestedOneWithoutMessageInput;
  ConversationCreateNestedOneWithoutPaticipantsInput: ConversationCreateNestedOneWithoutPaticipantsInput;
  ConversationCreateOrConnectWithoutCreatorInput: ConversationCreateOrConnectWithoutCreatorInput;
  ConversationCreateOrConnectWithoutMessageInput: ConversationCreateOrConnectWithoutMessageInput;
  ConversationCreateOrConnectWithoutPaticipantsInput: ConversationCreateOrConnectWithoutPaticipantsInput;
  ConversationCreateWithoutCreatorInput: ConversationCreateWithoutCreatorInput;
  ConversationCreateWithoutMessageInput: ConversationCreateWithoutMessageInput;
  ConversationCreateWithoutPaticipantsInput: ConversationCreateWithoutPaticipantsInput;
  ConversationGroupBy: ConversationGroupBy;
  ConversationListRelationFilter: ConversationListRelationFilter;
  ConversationMaxAggregate: ConversationMaxAggregate;
  ConversationMaxOrderByAggregateInput: ConversationMaxOrderByAggregateInput;
  ConversationMinAggregate: ConversationMinAggregate;
  ConversationMinOrderByAggregateInput: ConversationMinOrderByAggregateInput;
  ConversationOrderByRelationAggregateInput: ConversationOrderByRelationAggregateInput;
  ConversationOrderByWithAggregationInput: ConversationOrderByWithAggregationInput;
  ConversationOrderByWithRelationInput: ConversationOrderByWithRelationInput;
  ConversationRelationFilter: ConversationRelationFilter;
  ConversationScalarWhereInput: ConversationScalarWhereInput;
  ConversationScalarWhereWithAggregatesInput: ConversationScalarWhereWithAggregatesInput;
  ConversationUpdateInput: ConversationUpdateInput;
  ConversationUpdateManyMutationInput: ConversationUpdateManyMutationInput;
  ConversationUpdateManyWithWhereWithoutCreatorInput: ConversationUpdateManyWithWhereWithoutCreatorInput;
  ConversationUpdateManyWithoutCreatorNestedInput: ConversationUpdateManyWithoutCreatorNestedInput;
  ConversationUpdateOneRequiredWithoutMessageNestedInput: ConversationUpdateOneRequiredWithoutMessageNestedInput;
  ConversationUpdateOneRequiredWithoutPaticipantsNestedInput: ConversationUpdateOneRequiredWithoutPaticipantsNestedInput;
  ConversationUpdateWithWhereUniqueWithoutCreatorInput: ConversationUpdateWithWhereUniqueWithoutCreatorInput;
  ConversationUpdateWithoutCreatorInput: ConversationUpdateWithoutCreatorInput;
  ConversationUpdateWithoutMessageInput: ConversationUpdateWithoutMessageInput;
  ConversationUpdateWithoutPaticipantsInput: ConversationUpdateWithoutPaticipantsInput;
  ConversationUpsertWithWhereUniqueWithoutCreatorInput: ConversationUpsertWithWhereUniqueWithoutCreatorInput;
  ConversationUpsertWithoutMessageInput: ConversationUpsertWithoutMessageInput;
  ConversationUpsertWithoutPaticipantsInput: ConversationUpsertWithoutPaticipantsInput;
  ConversationWhereInput: ConversationWhereInput;
  ConversationWhereUniqueInput: ConversationWhereUniqueInput;
  DateTime: Scalars['DateTime'];
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  DateTimeWithAggregatesFilter: DateTimeWithAggregatesFilter;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  IntFilter: IntFilter;
  IntWithAggregatesFilter: IntWithAggregatesFilter;
  LoginInput: LoginInput;
  LoginResponse: LoginResponse;
  Message: Message;
  MessageCountAggregate: MessageCountAggregate;
  MessageCountOrderByAggregateInput: MessageCountOrderByAggregateInput;
  MessageCreateInput: MessageCreateInput;
  MessageCreateManyConversationInput: MessageCreateManyConversationInput;
  MessageCreateManyConversationInputEnvelope: MessageCreateManyConversationInputEnvelope;
  MessageCreateManyFromUserInput: MessageCreateManyFromUserInput;
  MessageCreateManyFromUserInputEnvelope: MessageCreateManyFromUserInputEnvelope;
  MessageCreateManyInput: MessageCreateManyInput;
  MessageCreateNestedManyWithoutConversationInput: MessageCreateNestedManyWithoutConversationInput;
  MessageCreateNestedManyWithoutFromUserInput: MessageCreateNestedManyWithoutFromUserInput;
  MessageCreateOrConnectWithoutConversationInput: MessageCreateOrConnectWithoutConversationInput;
  MessageCreateOrConnectWithoutFromUserInput: MessageCreateOrConnectWithoutFromUserInput;
  MessageCreateWithoutConversationInput: MessageCreateWithoutConversationInput;
  MessageCreateWithoutFromUserInput: MessageCreateWithoutFromUserInput;
  MessageGroupBy: MessageGroupBy;
  MessageListRelationFilter: MessageListRelationFilter;
  MessageMaxAggregate: MessageMaxAggregate;
  MessageMaxOrderByAggregateInput: MessageMaxOrderByAggregateInput;
  MessageMinAggregate: MessageMinAggregate;
  MessageMinOrderByAggregateInput: MessageMinOrderByAggregateInput;
  MessageOrderByRelationAggregateInput: MessageOrderByRelationAggregateInput;
  MessageOrderByWithAggregationInput: MessageOrderByWithAggregationInput;
  MessageOrderByWithRelationInput: MessageOrderByWithRelationInput;
  MessageScalarWhereInput: MessageScalarWhereInput;
  MessageScalarWhereWithAggregatesInput: MessageScalarWhereWithAggregatesInput;
  MessageUpdateInput: MessageUpdateInput;
  MessageUpdateManyMutationInput: MessageUpdateManyMutationInput;
  MessageUpdateManyWithWhereWithoutConversationInput: MessageUpdateManyWithWhereWithoutConversationInput;
  MessageUpdateManyWithWhereWithoutFromUserInput: MessageUpdateManyWithWhereWithoutFromUserInput;
  MessageUpdateManyWithoutConversationNestedInput: MessageUpdateManyWithoutConversationNestedInput;
  MessageUpdateManyWithoutFromUserNestedInput: MessageUpdateManyWithoutFromUserNestedInput;
  MessageUpdateWithWhereUniqueWithoutConversationInput: MessageUpdateWithWhereUniqueWithoutConversationInput;
  MessageUpdateWithWhereUniqueWithoutFromUserInput: MessageUpdateWithWhereUniqueWithoutFromUserInput;
  MessageUpdateWithoutConversationInput: MessageUpdateWithoutConversationInput;
  MessageUpdateWithoutFromUserInput: MessageUpdateWithoutFromUserInput;
  MessageUpsertWithWhereUniqueWithoutConversationInput: MessageUpsertWithWhereUniqueWithoutConversationInput;
  MessageUpsertWithWhereUniqueWithoutFromUserInput: MessageUpsertWithWhereUniqueWithoutFromUserInput;
  MessageWhereInput: MessageWhereInput;
  MessageWhereUniqueInput: MessageWhereUniqueInput;
  Mutation: {};
  NestedBoolFilter: NestedBoolFilter;
  NestedBoolWithAggregatesFilter: NestedBoolWithAggregatesFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeWithAggregatesFilter: NestedDateTimeWithAggregatesFilter;
  NestedFloatFilter: NestedFloatFilter;
  NestedIntFilter: NestedIntFilter;
  NestedIntNullableFilter: NestedIntNullableFilter;
  NestedIntWithAggregatesFilter: NestedIntWithAggregatesFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  NestedStringNullableWithAggregatesFilter: NestedStringNullableWithAggregatesFilter;
  NestedStringWithAggregatesFilter: NestedStringWithAggregatesFilter;
  NullableStringFieldUpdateOperationsInput: NullableStringFieldUpdateOperationsInput;
  Paticipants: Paticipants;
  PaticipantsCountAggregate: PaticipantsCountAggregate;
  PaticipantsCountOrderByAggregateInput: PaticipantsCountOrderByAggregateInput;
  PaticipantsCreateInput: PaticipantsCreateInput;
  PaticipantsCreateManyConversationInput: PaticipantsCreateManyConversationInput;
  PaticipantsCreateManyConversationInputEnvelope: PaticipantsCreateManyConversationInputEnvelope;
  PaticipantsCreateManyInput: PaticipantsCreateManyInput;
  PaticipantsCreateManyUserInput: PaticipantsCreateManyUserInput;
  PaticipantsCreateManyUserInputEnvelope: PaticipantsCreateManyUserInputEnvelope;
  PaticipantsCreateNestedManyWithoutConversationInput: PaticipantsCreateNestedManyWithoutConversationInput;
  PaticipantsCreateNestedManyWithoutUserInput: PaticipantsCreateNestedManyWithoutUserInput;
  PaticipantsCreateOrConnectWithoutConversationInput: PaticipantsCreateOrConnectWithoutConversationInput;
  PaticipantsCreateOrConnectWithoutUserInput: PaticipantsCreateOrConnectWithoutUserInput;
  PaticipantsCreateWithoutConversationInput: PaticipantsCreateWithoutConversationInput;
  PaticipantsCreateWithoutUserInput: PaticipantsCreateWithoutUserInput;
  PaticipantsGroupBy: PaticipantsGroupBy;
  PaticipantsListRelationFilter: PaticipantsListRelationFilter;
  PaticipantsMaxAggregate: PaticipantsMaxAggregate;
  PaticipantsMaxOrderByAggregateInput: PaticipantsMaxOrderByAggregateInput;
  PaticipantsMinAggregate: PaticipantsMinAggregate;
  PaticipantsMinOrderByAggregateInput: PaticipantsMinOrderByAggregateInput;
  PaticipantsOrderByRelationAggregateInput: PaticipantsOrderByRelationAggregateInput;
  PaticipantsOrderByWithAggregationInput: PaticipantsOrderByWithAggregationInput;
  PaticipantsOrderByWithRelationInput: PaticipantsOrderByWithRelationInput;
  PaticipantsScalarWhereInput: PaticipantsScalarWhereInput;
  PaticipantsScalarWhereWithAggregatesInput: PaticipantsScalarWhereWithAggregatesInput;
  PaticipantsUpdateInput: PaticipantsUpdateInput;
  PaticipantsUpdateManyMutationInput: PaticipantsUpdateManyMutationInput;
  PaticipantsUpdateManyWithWhereWithoutConversationInput: PaticipantsUpdateManyWithWhereWithoutConversationInput;
  PaticipantsUpdateManyWithWhereWithoutUserInput: PaticipantsUpdateManyWithWhereWithoutUserInput;
  PaticipantsUpdateManyWithoutConversationNestedInput: PaticipantsUpdateManyWithoutConversationNestedInput;
  PaticipantsUpdateManyWithoutUserNestedInput: PaticipantsUpdateManyWithoutUserNestedInput;
  PaticipantsUpdateWithWhereUniqueWithoutConversationInput: PaticipantsUpdateWithWhereUniqueWithoutConversationInput;
  PaticipantsUpdateWithWhereUniqueWithoutUserInput: PaticipantsUpdateWithWhereUniqueWithoutUserInput;
  PaticipantsUpdateWithoutConversationInput: PaticipantsUpdateWithoutConversationInput;
  PaticipantsUpdateWithoutUserInput: PaticipantsUpdateWithoutUserInput;
  PaticipantsUpsertWithWhereUniqueWithoutConversationInput: PaticipantsUpsertWithWhereUniqueWithoutConversationInput;
  PaticipantsUpsertWithWhereUniqueWithoutUserInput: PaticipantsUpsertWithWhereUniqueWithoutUserInput;
  PaticipantsWhereInput: PaticipantsWhereInput;
  PaticipantsWhereUniqueInput: PaticipantsWhereUniqueInput;
  Query: {};
  SignUpInput: SignUpInput;
  String: Scalars['String'];
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  StringNullableWithAggregatesFilter: StringNullableWithAggregatesFilter;
  StringWithAggregatesFilter: StringWithAggregatesFilter;
  User: User;
  UserAvgAggregate: UserAvgAggregate;
  UserAvgOrderByAggregateInput: UserAvgOrderByAggregateInput;
  UserContactCreateManyContactUserInput: UserContactCreateManyContactUserInput;
  UserContactCreateManyContactUserInputEnvelope: UserContactCreateManyContactUserInputEnvelope;
  UserContactCreateManyOwnerContactInput: UserContactCreateManyOwnerContactInput;
  UserContactCreateManyOwnerContactInputEnvelope: UserContactCreateManyOwnerContactInputEnvelope;
  UserContactCreateNestedManyWithoutContactUserInput: UserContactCreateNestedManyWithoutContactUserInput;
  UserContactCreateNestedManyWithoutOwnerContactInput: UserContactCreateNestedManyWithoutOwnerContactInput;
  UserContactCreateOrConnectWithoutContactUserInput: UserContactCreateOrConnectWithoutContactUserInput;
  UserContactCreateOrConnectWithoutOwnerContactInput: UserContactCreateOrConnectWithoutOwnerContactInput;
  UserContactCreateWithoutContactUserInput: UserContactCreateWithoutContactUserInput;
  UserContactCreateWithoutOwnerContactInput: UserContactCreateWithoutOwnerContactInput;
  UserContactListRelationFilter: UserContactListRelationFilter;
  UserContactOrderByRelationAggregateInput: UserContactOrderByRelationAggregateInput;
  UserContactOwnerContactIdContactIdCompoundUniqueInput: UserContactOwnerContactIdContactIdCompoundUniqueInput;
  UserContactScalarWhereInput: UserContactScalarWhereInput;
  UserContactUpdateManyMutationInput: UserContactUpdateManyMutationInput;
  UserContactUpdateManyWithWhereWithoutContactUserInput: UserContactUpdateManyWithWhereWithoutContactUserInput;
  UserContactUpdateManyWithWhereWithoutOwnerContactInput: UserContactUpdateManyWithWhereWithoutOwnerContactInput;
  UserContactUpdateManyWithoutContactUserNestedInput: UserContactUpdateManyWithoutContactUserNestedInput;
  UserContactUpdateManyWithoutOwnerContactNestedInput: UserContactUpdateManyWithoutOwnerContactNestedInput;
  UserContactUpdateWithWhereUniqueWithoutContactUserInput: UserContactUpdateWithWhereUniqueWithoutContactUserInput;
  UserContactUpdateWithWhereUniqueWithoutOwnerContactInput: UserContactUpdateWithWhereUniqueWithoutOwnerContactInput;
  UserContactUpdateWithoutContactUserInput: UserContactUpdateWithoutContactUserInput;
  UserContactUpdateWithoutOwnerContactInput: UserContactUpdateWithoutOwnerContactInput;
  UserContactUpsertWithWhereUniqueWithoutContactUserInput: UserContactUpsertWithWhereUniqueWithoutContactUserInput;
  UserContactUpsertWithWhereUniqueWithoutOwnerContactInput: UserContactUpsertWithWhereUniqueWithoutOwnerContactInput;
  UserContactWhereInput: UserContactWhereInput;
  UserContactWhereUniqueInput: UserContactWhereUniqueInput;
  UserCount: UserCount;
  UserCountAggregate: UserCountAggregate;
  UserCountOrderByAggregateInput: UserCountOrderByAggregateInput;
  UserCreateInput: UserCreateInput;
  UserCreateManyInput: UserCreateManyInput;
  UserCreateNestedOneWithoutContactUserInput: UserCreateNestedOneWithoutContactUserInput;
  UserCreateNestedOneWithoutConversationInput: UserCreateNestedOneWithoutConversationInput;
  UserCreateNestedOneWithoutMessageInput: UserCreateNestedOneWithoutMessageInput;
  UserCreateNestedOneWithoutOwnerContactInput: UserCreateNestedOneWithoutOwnerContactInput;
  UserCreateNestedOneWithoutPaticipantsInput: UserCreateNestedOneWithoutPaticipantsInput;
  UserCreateOrConnectWithoutContactUserInput: UserCreateOrConnectWithoutContactUserInput;
  UserCreateOrConnectWithoutConversationInput: UserCreateOrConnectWithoutConversationInput;
  UserCreateOrConnectWithoutMessageInput: UserCreateOrConnectWithoutMessageInput;
  UserCreateOrConnectWithoutOwnerContactInput: UserCreateOrConnectWithoutOwnerContactInput;
  UserCreateOrConnectWithoutPaticipantsInput: UserCreateOrConnectWithoutPaticipantsInput;
  UserCreateWithoutContactUserInput: UserCreateWithoutContactUserInput;
  UserCreateWithoutConversationInput: UserCreateWithoutConversationInput;
  UserCreateWithoutMessageInput: UserCreateWithoutMessageInput;
  UserCreateWithoutOwnerContactInput: UserCreateWithoutOwnerContactInput;
  UserCreateWithoutPaticipantsInput: UserCreateWithoutPaticipantsInput;
  UserData: UserData;
  UserGroupBy: UserGroupBy;
  UserMaxAggregate: UserMaxAggregate;
  UserMaxOrderByAggregateInput: UserMaxOrderByAggregateInput;
  UserMinAggregate: UserMinAggregate;
  UserMinOrderByAggregateInput: UserMinOrderByAggregateInput;
  UserOrderByWithAggregationInput: UserOrderByWithAggregationInput;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserRelationFilter: UserRelationFilter;
  UserResponse: UserResponse;
  UserScalarWhereWithAggregatesInput: UserScalarWhereWithAggregatesInput;
  UserSumAggregate: UserSumAggregate;
  UserSumOrderByAggregateInput: UserSumOrderByAggregateInput;
  UserUpdateInput: UserUpdateInput;
  UserUpdateManyMutationInput: UserUpdateManyMutationInput;
  UserUpdateOneRequiredWithoutContactUserNestedInput: UserUpdateOneRequiredWithoutContactUserNestedInput;
  UserUpdateOneRequiredWithoutConversationNestedInput: UserUpdateOneRequiredWithoutConversationNestedInput;
  UserUpdateOneRequiredWithoutMessageNestedInput: UserUpdateOneRequiredWithoutMessageNestedInput;
  UserUpdateOneRequiredWithoutOwnerContactNestedInput: UserUpdateOneRequiredWithoutOwnerContactNestedInput;
  UserUpdateOneRequiredWithoutPaticipantsNestedInput: UserUpdateOneRequiredWithoutPaticipantsNestedInput;
  UserUpdateWithoutContactUserInput: UserUpdateWithoutContactUserInput;
  UserUpdateWithoutConversationInput: UserUpdateWithoutConversationInput;
  UserUpdateWithoutMessageInput: UserUpdateWithoutMessageInput;
  UserUpdateWithoutOwnerContactInput: UserUpdateWithoutOwnerContactInput;
  UserUpdateWithoutPaticipantsInput: UserUpdateWithoutPaticipantsInput;
  UserUpsertWithoutContactUserInput: UserUpsertWithoutContactUserInput;
  UserUpsertWithoutConversationInput: UserUpsertWithoutConversationInput;
  UserUpsertWithoutMessageInput: UserUpsertWithoutMessageInput;
  UserUpsertWithoutOwnerContactInput: UserUpsertWithoutOwnerContactInput;
  UserUpsertWithoutPaticipantsInput: UserUpsertWithoutPaticipantsInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
};

export type AffectedRowsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['AffectedRowsOutput'] = ResolversParentTypes['AffectedRowsOutput']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregateConversationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateConversation'] = ResolversParentTypes['AggregateConversation']> = {
  _count?: Resolver<Maybe<ResolversTypes['ConversationCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['ConversationMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['ConversationMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregateMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMessage'] = ResolversParentTypes['AggregateMessage']> = {
  _count?: Resolver<Maybe<ResolversTypes['MessageCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MessageMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MessageMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregatePaticipantsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregatePaticipants'] = ResolversParentTypes['AggregatePaticipants']> = {
  _count?: Resolver<Maybe<ResolversTypes['PaticipantsCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['PaticipantsMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['PaticipantsMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AggregateUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateUser'] = ResolversParentTypes['AggregateUser']> = {
  _avg?: Resolver<Maybe<ResolversTypes['UserAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['UserCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['UserMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['UserMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['UserSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConversationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Conversation'] = ResolversParentTypes['Conversation']> = {
  Message?: Resolver<Array<ResolversTypes['Message']>, ParentType, ContextType, Partial<ConversationMessageArgs>>;
  Paticipants?: Resolver<Array<ResolversTypes['Paticipants']>, ParentType, ContextType, Partial<ConversationPaticipantsArgs>>;
  _count?: Resolver<Maybe<ResolversTypes['ConversationCount']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  creatorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isDeleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secondaryName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConversationCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConversationCount'] = ResolversParentTypes['ConversationCount']> = {
  Message?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Paticipants?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConversationCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConversationCountAggregate'] = ResolversParentTypes['ConversationCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  creatorId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  secondaryName?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConversationGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConversationGroupBy'] = ResolversParentTypes['ConversationGroupBy']> = {
  _count?: Resolver<Maybe<ResolversTypes['ConversationCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['ConversationMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['ConversationMinAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  creatorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isDeleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secondaryName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConversationMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConversationMaxAggregate'] = ResolversParentTypes['ConversationMaxAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secondaryName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConversationMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConversationMinAggregate'] = ResolversParentTypes['ConversationMinAggregate']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secondaryName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type LoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  conversation?: Resolver<ResolversTypes['Conversation'], ParentType, ContextType>;
  conversationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fromUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isDeleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageCountAggregate'] = ResolversParentTypes['MessageCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  conversationId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageGroupBy'] = ResolversParentTypes['MessageGroupBy']> = {
  _count?: Resolver<Maybe<ResolversTypes['MessageCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MessageMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MessageMinAggregate']>, ParentType, ContextType>;
  conversationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isDeleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageMaxAggregate'] = ResolversParentTypes['MessageMaxAggregate']> = {
  conversationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessageMinAggregate'] = ResolversParentTypes['MessageMinAggregate']> = {
  conversationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createManyConversation?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyConversationArgs, 'data'>>;
  createManyMessage?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyMessageArgs, 'data'>>;
  createManyPaticipants?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyPaticipantsArgs, 'data'>>;
  createManyUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyUserArgs, 'data'>>;
  createOneConversation?: Resolver<ResolversTypes['Conversation'], ParentType, ContextType, RequireFields<MutationCreateOneConversationArgs, 'data'>>;
  createOneMessage?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationCreateOneMessageArgs, 'data'>>;
  createOnePaticipants?: Resolver<ResolversTypes['Paticipants'], ParentType, ContextType, RequireFields<MutationCreateOnePaticipantsArgs, 'data'>>;
  createOneUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateOneUserArgs, 'data'>>;
  deleteManyConversation?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyConversationArgs>>;
  deleteManyMessage?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyMessageArgs>>;
  deleteManyPaticipants?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyPaticipantsArgs>>;
  deleteManyUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyUserArgs>>;
  deleteOneConversation?: Resolver<Maybe<ResolversTypes['Conversation']>, ParentType, ContextType, RequireFields<MutationDeleteOneConversationArgs, 'where'>>;
  deleteOneMessage?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationDeleteOneMessageArgs, 'where'>>;
  deleteOnePaticipants?: Resolver<Maybe<ResolversTypes['Paticipants']>, ParentType, ContextType, RequireFields<MutationDeleteOnePaticipantsArgs, 'where'>>;
  deleteOneUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteOneUserArgs, 'where'>>;
  loginUser?: Resolver<ResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'input'>>;
  signupUser?: Resolver<ResolversTypes['UserResponse'], ParentType, ContextType, RequireFields<MutationSignupUserArgs, 'input'>>;
  updateManyConversation?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyConversationArgs, 'data'>>;
  updateManyMessage?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyMessageArgs, 'data'>>;
  updateManyPaticipants?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyPaticipantsArgs, 'data'>>;
  updateManyUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyUserArgs, 'data'>>;
  updateOneConversation?: Resolver<Maybe<ResolversTypes['Conversation']>, ParentType, ContextType, RequireFields<MutationUpdateOneConversationArgs, 'data' | 'where'>>;
  updateOneMessage?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<MutationUpdateOneMessageArgs, 'data' | 'where'>>;
  updateOnePaticipants?: Resolver<Maybe<ResolversTypes['Paticipants']>, ParentType, ContextType, RequireFields<MutationUpdateOnePaticipantsArgs, 'data' | 'where'>>;
  updateOneUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateOneUserArgs, 'data' | 'where'>>;
  upsertOneConversation?: Resolver<ResolversTypes['Conversation'], ParentType, ContextType, RequireFields<MutationUpsertOneConversationArgs, 'create' | 'update' | 'where'>>;
  upsertOneMessage?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationUpsertOneMessageArgs, 'create' | 'update' | 'where'>>;
  upsertOnePaticipants?: Resolver<ResolversTypes['Paticipants'], ParentType, ContextType, RequireFields<MutationUpsertOnePaticipantsArgs, 'create' | 'update' | 'where'>>;
  upsertOneUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpsertOneUserArgs, 'create' | 'update' | 'where'>>;
};

export type PaticipantsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Paticipants'] = ResolversParentTypes['Paticipants']> = {
  conversation?: Resolver<ResolversTypes['Conversation'], ParentType, ContextType>;
  conversationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  joinedDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  leftDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaticipantsCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaticipantsCountAggregate'] = ResolversParentTypes['PaticipantsCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  conversationId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  joinedDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  leftDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaticipantsGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaticipantsGroupBy'] = ResolversParentTypes['PaticipantsGroupBy']> = {
  _count?: Resolver<Maybe<ResolversTypes['PaticipantsCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['PaticipantsMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['PaticipantsMinAggregate']>, ParentType, ContextType>;
  conversationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  joinedDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  leftDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaticipantsMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaticipantsMaxAggregate'] = ResolversParentTypes['PaticipantsMaxAggregate']> = {
  conversationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  joinedDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  leftDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaticipantsMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaticipantsMinAggregate'] = ResolversParentTypes['PaticipantsMinAggregate']> = {
  conversationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  joinedDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  leftDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  aggregateConversation?: Resolver<ResolversTypes['AggregateConversation'], ParentType, ContextType, Partial<QueryAggregateConversationArgs>>;
  aggregateMessage?: Resolver<ResolversTypes['AggregateMessage'], ParentType, ContextType, Partial<QueryAggregateMessageArgs>>;
  aggregatePaticipants?: Resolver<ResolversTypes['AggregatePaticipants'], ParentType, ContextType, Partial<QueryAggregatePaticipantsArgs>>;
  aggregateUser?: Resolver<ResolversTypes['AggregateUser'], ParentType, ContextType, Partial<QueryAggregateUserArgs>>;
  conversation?: Resolver<Maybe<ResolversTypes['Conversation']>, ParentType, ContextType, RequireFields<QueryConversationArgs, 'where'>>;
  conversations?: Resolver<Array<ResolversTypes['Conversation']>, ParentType, ContextType, Partial<QueryConversationsArgs>>;
  findFirstConversation?: Resolver<Maybe<ResolversTypes['Conversation']>, ParentType, ContextType, Partial<QueryFindFirstConversationArgs>>;
  findFirstMessage?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, Partial<QueryFindFirstMessageArgs>>;
  findFirstPaticipants?: Resolver<Maybe<ResolversTypes['Paticipants']>, ParentType, ContextType, Partial<QueryFindFirstPaticipantsArgs>>;
  findFirstUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryFindFirstUserArgs>>;
  findManyPaticipants?: Resolver<Array<ResolversTypes['Paticipants']>, ParentType, ContextType, Partial<QueryFindManyPaticipantsArgs>>;
  findUniquePaticipants?: Resolver<Maybe<ResolversTypes['Paticipants']>, ParentType, ContextType, RequireFields<QueryFindUniquePaticipantsArgs, 'where'>>;
  getMe?: Resolver<ResolversTypes['UserResponse'], ParentType, ContextType>;
  groupByConversation?: Resolver<Array<ResolversTypes['ConversationGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByConversationArgs, 'by'>>;
  groupByMessage?: Resolver<Array<ResolversTypes['MessageGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByMessageArgs, 'by'>>;
  groupByPaticipants?: Resolver<Array<ResolversTypes['PaticipantsGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByPaticipantsArgs, 'by'>>;
  groupByUser?: Resolver<Array<ResolversTypes['UserGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByUserArgs, 'by'>>;
  logoutUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<QueryMessageArgs, 'where'>>;
  messages?: Resolver<Array<ResolversTypes['Message']>, ParentType, ContextType, Partial<QueryMessagesArgs>>;
  refreshAccessToken?: Resolver<ResolversTypes['LoginResponse'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'where'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUsersArgs>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _count?: Resolver<Maybe<ResolversTypes['UserCount']>, ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAvgAggregate'] = ResolversParentTypes['UserAvgAggregate']> = {
  count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCount'] = ResolversParentTypes['UserCount']> = {
  Conversation?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Message?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Paticipants?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  contactUser?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ownerContact?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCountAggregate'] = ResolversParentTypes['UserCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isAdmin?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  photo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserData'] = ResolversParentTypes['UserData']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGroupBy'] = ResolversParentTypes['UserGroupBy']> = {
  _avg?: Resolver<Maybe<ResolversTypes['UserAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['UserCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['UserMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['UserMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['UserSumAggregate']>, ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMaxAggregate'] = ResolversParentTypes['UserMaxAggregate']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isAdmin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMinAggregate'] = ResolversParentTypes['UserMinAggregate']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isAdmin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserResponse'] = ResolversParentTypes['UserResponse']> = {
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserSumAggregate'] = ResolversParentTypes['UserSumAggregate']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AffectedRowsOutput?: AffectedRowsOutputResolvers<ContextType>;
  AggregateConversation?: AggregateConversationResolvers<ContextType>;
  AggregateMessage?: AggregateMessageResolvers<ContextType>;
  AggregatePaticipants?: AggregatePaticipantsResolvers<ContextType>;
  AggregateUser?: AggregateUserResolvers<ContextType>;
  Conversation?: ConversationResolvers<ContextType>;
  ConversationCount?: ConversationCountResolvers<ContextType>;
  ConversationCountAggregate?: ConversationCountAggregateResolvers<ContextType>;
  ConversationGroupBy?: ConversationGroupByResolvers<ContextType>;
  ConversationMaxAggregate?: ConversationMaxAggregateResolvers<ContextType>;
  ConversationMinAggregate?: ConversationMinAggregateResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  MessageCountAggregate?: MessageCountAggregateResolvers<ContextType>;
  MessageGroupBy?: MessageGroupByResolvers<ContextType>;
  MessageMaxAggregate?: MessageMaxAggregateResolvers<ContextType>;
  MessageMinAggregate?: MessageMinAggregateResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Paticipants?: PaticipantsResolvers<ContextType>;
  PaticipantsCountAggregate?: PaticipantsCountAggregateResolvers<ContextType>;
  PaticipantsGroupBy?: PaticipantsGroupByResolvers<ContextType>;
  PaticipantsMaxAggregate?: PaticipantsMaxAggregateResolvers<ContextType>;
  PaticipantsMinAggregate?: PaticipantsMinAggregateResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAvgAggregate?: UserAvgAggregateResolvers<ContextType>;
  UserCount?: UserCountResolvers<ContextType>;
  UserCountAggregate?: UserCountAggregateResolvers<ContextType>;
  UserData?: UserDataResolvers<ContextType>;
  UserGroupBy?: UserGroupByResolvers<ContextType>;
  UserMaxAggregate?: UserMaxAggregateResolvers<ContextType>;
  UserMinAggregate?: UserMinAggregateResolvers<ContextType>;
  UserResponse?: UserResponseResolvers<ContextType>;
  UserSumAggregate?: UserSumAggregateResolvers<ContextType>;
};

