"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    UserContact: crudResolvers.UserContactCrudResolver,
    Message: crudResolvers.MessageCrudResolver,
    Conversation: crudResolvers.ConversationCrudResolver,
    Paticipants: crudResolvers.PaticipantsCrudResolver
};
const actionResolversMap = {
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    },
    UserContact: {
        aggregateUserContact: actionResolvers.AggregateUserContactResolver,
        createManyUserContact: actionResolvers.CreateManyUserContactResolver,
        createOneUserContact: actionResolvers.CreateOneUserContactResolver,
        deleteManyUserContact: actionResolvers.DeleteManyUserContactResolver,
        deleteOneUserContact: actionResolvers.DeleteOneUserContactResolver,
        findFirstUserContact: actionResolvers.FindFirstUserContactResolver,
        userContacts: actionResolvers.FindManyUserContactResolver,
        userContact: actionResolvers.FindUniqueUserContactResolver,
        groupByUserContact: actionResolvers.GroupByUserContactResolver,
        updateManyUserContact: actionResolvers.UpdateManyUserContactResolver,
        updateOneUserContact: actionResolvers.UpdateOneUserContactResolver,
        upsertOneUserContact: actionResolvers.UpsertOneUserContactResolver
    },
    Message: {
        aggregateMessage: actionResolvers.AggregateMessageResolver,
        createManyMessage: actionResolvers.CreateManyMessageResolver,
        createOneMessage: actionResolvers.CreateOneMessageResolver,
        deleteManyMessage: actionResolvers.DeleteManyMessageResolver,
        deleteOneMessage: actionResolvers.DeleteOneMessageResolver,
        findFirstMessage: actionResolvers.FindFirstMessageResolver,
        messages: actionResolvers.FindManyMessageResolver,
        message: actionResolvers.FindUniqueMessageResolver,
        groupByMessage: actionResolvers.GroupByMessageResolver,
        updateManyMessage: actionResolvers.UpdateManyMessageResolver,
        updateOneMessage: actionResolvers.UpdateOneMessageResolver,
        upsertOneMessage: actionResolvers.UpsertOneMessageResolver
    },
    Conversation: {
        aggregateConversation: actionResolvers.AggregateConversationResolver,
        createManyConversation: actionResolvers.CreateManyConversationResolver,
        createOneConversation: actionResolvers.CreateOneConversationResolver,
        deleteManyConversation: actionResolvers.DeleteManyConversationResolver,
        deleteOneConversation: actionResolvers.DeleteOneConversationResolver,
        findFirstConversation: actionResolvers.FindFirstConversationResolver,
        conversations: actionResolvers.FindManyConversationResolver,
        conversation: actionResolvers.FindUniqueConversationResolver,
        groupByConversation: actionResolvers.GroupByConversationResolver,
        updateManyConversation: actionResolvers.UpdateManyConversationResolver,
        updateOneConversation: actionResolvers.UpdateOneConversationResolver,
        upsertOneConversation: actionResolvers.UpsertOneConversationResolver
    },
    Paticipants: {
        aggregatePaticipants: actionResolvers.AggregatePaticipantsResolver,
        createManyPaticipants: actionResolvers.CreateManyPaticipantsResolver,
        createOnePaticipants: actionResolvers.CreateOnePaticipantsResolver,
        deleteManyPaticipants: actionResolvers.DeleteManyPaticipantsResolver,
        deleteOnePaticipants: actionResolvers.DeleteOnePaticipantsResolver,
        findFirstPaticipants: actionResolvers.FindFirstPaticipantsResolver,
        findManyPaticipants: actionResolvers.FindManyPaticipantsResolver,
        findUniquePaticipants: actionResolvers.FindUniquePaticipantsResolver,
        groupByPaticipants: actionResolvers.GroupByPaticipantsResolver,
        updateManyPaticipants: actionResolvers.UpdateManyPaticipantsResolver,
        updateOnePaticipants: actionResolvers.UpdateOnePaticipantsResolver,
        upsertOnePaticipants: actionResolvers.UpsertOnePaticipantsResolver
    }
};
const crudResolversInfo = {
    User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "users", "user", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    UserContact: ["aggregateUserContact", "createManyUserContact", "createOneUserContact", "deleteManyUserContact", "deleteOneUserContact", "findFirstUserContact", "userContacts", "userContact", "groupByUserContact", "updateManyUserContact", "updateOneUserContact", "upsertOneUserContact"],
    Message: ["aggregateMessage", "createManyMessage", "createOneMessage", "deleteManyMessage", "deleteOneMessage", "findFirstMessage", "messages", "message", "groupByMessage", "updateManyMessage", "updateOneMessage", "upsertOneMessage"],
    Conversation: ["aggregateConversation", "createManyConversation", "createOneConversation", "deleteManyConversation", "deleteOneConversation", "findFirstConversation", "conversations", "conversation", "groupByConversation", "updateManyConversation", "updateOneConversation", "upsertOneConversation"],
    Paticipants: ["aggregatePaticipants", "createManyPaticipants", "createOnePaticipants", "deleteManyPaticipants", "deleteOnePaticipants", "findFirstPaticipants", "findManyPaticipants", "findUniquePaticipants", "groupByPaticipants", "updateManyPaticipants", "updateOnePaticipants", "upsertOnePaticipants"]
};
const argsInfo = {
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"],
    AggregateUserContactArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserContactArgs: ["data", "skipDuplicates"],
    CreateOneUserContactArgs: ["data"],
    DeleteManyUserContactArgs: ["where"],
    DeleteOneUserContactArgs: ["where"],
    FindFirstUserContactArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserContactArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserContactArgs: ["where"],
    GroupByUserContactArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserContactArgs: ["data", "where"],
    UpdateOneUserContactArgs: ["data", "where"],
    UpsertOneUserContactArgs: ["where", "create", "update"],
    AggregateMessageArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyMessageArgs: ["data", "skipDuplicates"],
    CreateOneMessageArgs: ["data"],
    DeleteManyMessageArgs: ["where"],
    DeleteOneMessageArgs: ["where"],
    FindFirstMessageArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyMessageArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueMessageArgs: ["where"],
    GroupByMessageArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyMessageArgs: ["data", "where"],
    UpdateOneMessageArgs: ["data", "where"],
    UpsertOneMessageArgs: ["where", "create", "update"],
    AggregateConversationArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyConversationArgs: ["data", "skipDuplicates"],
    CreateOneConversationArgs: ["data"],
    DeleteManyConversationArgs: ["where"],
    DeleteOneConversationArgs: ["where"],
    FindFirstConversationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyConversationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueConversationArgs: ["where"],
    GroupByConversationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyConversationArgs: ["data", "where"],
    UpdateOneConversationArgs: ["data", "where"],
    UpsertOneConversationArgs: ["where", "create", "update"],
    AggregatePaticipantsArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyPaticipantsArgs: ["data", "skipDuplicates"],
    CreateOnePaticipantsArgs: ["data"],
    DeleteManyPaticipantsArgs: ["where"],
    DeleteOnePaticipantsArgs: ["where"],
    FindFirstPaticipantsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyPaticipantsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniquePaticipantsArgs: ["where"],
    GroupByPaticipantsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyPaticipantsArgs: ["data", "where"],
    UpdateOnePaticipantsArgs: ["data", "where"],
    UpsertOnePaticipantsArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    UserContact: relationResolvers.UserContactRelationsResolver,
    Message: relationResolvers.MessageRelationsResolver,
    Conversation: relationResolvers.ConversationRelationsResolver,
    Paticipants: relationResolvers.PaticipantsRelationsResolver
};
const relationResolversInfo = {
    User: ["Message", "Paticipants", "ownerContact", "contactUser", "Conversation"],
    UserContact: ["ownerContact", "contactUser"],
    Message: ["fromUser", "conversation"],
    Conversation: ["creator", "Message", "Paticipants"],
    Paticipants: ["user", "conversation"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    User: ["id", "email", "username", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count"],
    UserContact: ["ownerContactId", "contactId", "email", "username", "firstName", "lastName", "phoneNumber", "photo"],
    Message: ["id", "from", "conversationId", "text", "isDeleted", "createdAt", "updatedAt"],
    Conversation: ["id", "name", "secondaryName", "creatorId", "isDeleted", "createdAt", "updatedAt"],
    Paticipants: ["id", "type", "userId", "conversationId", "joinedDate", "leftDate"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
    UserGroupBy: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateUserContact: ["_count", "_min", "_max"],
    UserContactGroupBy: ["ownerContactId", "contactId", "email", "username", "firstName", "lastName", "phoneNumber", "photo", "_count", "_min", "_max"],
    AggregateMessage: ["_count", "_min", "_max"],
    MessageGroupBy: ["id", "from", "conversationId", "text", "isDeleted", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateConversation: ["_count", "_min", "_max"],
    ConversationGroupBy: ["id", "name", "secondaryName", "creatorId", "isDeleted", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregatePaticipants: ["_count", "_min", "_max"],
    PaticipantsGroupBy: ["id", "type", "userId", "conversationId", "joinedDate", "leftDate", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCount: ["Message", "Paticipants", "ownerContact", "contactUser", "Conversation"],
    UserCountAggregate: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count", "_all"],
    UserAvgAggregate: ["count"],
    UserSumAggregate: ["count"],
    UserMinAggregate: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count"],
    UserMaxAggregate: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count"],
    UserContactCountAggregate: ["ownerContactId", "contactId", "email", "username", "firstName", "lastName", "phoneNumber", "photo", "_all"],
    UserContactMinAggregate: ["ownerContactId", "contactId", "email", "username", "firstName", "lastName", "phoneNumber", "photo"],
    UserContactMaxAggregate: ["ownerContactId", "contactId", "email", "username", "firstName", "lastName", "phoneNumber", "photo"],
    MessageCountAggregate: ["id", "from", "conversationId", "text", "isDeleted", "createdAt", "updatedAt", "_all"],
    MessageMinAggregate: ["id", "from", "conversationId", "text", "isDeleted", "createdAt", "updatedAt"],
    MessageMaxAggregate: ["id", "from", "conversationId", "text", "isDeleted", "createdAt", "updatedAt"],
    ConversationCount: ["Message", "Paticipants"],
    ConversationCountAggregate: ["id", "name", "secondaryName", "creatorId", "isDeleted", "createdAt", "updatedAt", "_all"],
    ConversationMinAggregate: ["id", "name", "secondaryName", "creatorId", "isDeleted", "createdAt", "updatedAt"],
    ConversationMaxAggregate: ["id", "name", "secondaryName", "creatorId", "isDeleted", "createdAt", "updatedAt"],
    PaticipantsCountAggregate: ["id", "type", "userId", "conversationId", "joinedDate", "leftDate", "_all"],
    PaticipantsMinAggregate: ["id", "type", "userId", "conversationId", "joinedDate", "leftDate"],
    PaticipantsMaxAggregate: ["id", "type", "userId", "conversationId", "joinedDate", "leftDate"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count", "Message", "Paticipants", "ownerContact", "contactUser", "Conversation"],
    UserOrderByWithRelationInput: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count", "Message", "Paticipants", "ownerContact", "contactUser", "Conversation"],
    UserWhereUniqueInput: ["id", "email"],
    UserOrderByWithAggregationInput: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count", "_count", "_avg", "_max", "_min", "_sum"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count"],
    UserContactWhereInput: ["AND", "OR", "NOT", "ownerContact", "ownerContactId", "contactUser", "contactId", "email", "username", "firstName", "lastName", "phoneNumber", "photo"],
    UserContactOrderByWithRelationInput: ["ownerContact", "ownerContactId", "contactUser", "contactId", "email", "username", "firstName", "lastName", "phoneNumber", "photo"],
    UserContactWhereUniqueInput: ["ownerContactId", "ownerContactId_contactId"],
    UserContactOrderByWithAggregationInput: ["ownerContactId", "contactId", "email", "username", "firstName", "lastName", "phoneNumber", "photo", "_count", "_max", "_min"],
    UserContactScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "ownerContactId", "contactId", "email", "username", "firstName", "lastName", "phoneNumber", "photo"],
    MessageWhereInput: ["AND", "OR", "NOT", "id", "fromUser", "from", "conversation", "conversationId", "text", "isDeleted", "createdAt", "updatedAt"],
    MessageOrderByWithRelationInput: ["id", "fromUser", "from", "conversation", "conversationId", "text", "isDeleted", "createdAt", "updatedAt"],
    MessageWhereUniqueInput: ["id"],
    MessageOrderByWithAggregationInput: ["id", "from", "conversationId", "text", "isDeleted", "createdAt", "updatedAt", "_count", "_max", "_min"],
    MessageScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "from", "conversationId", "text", "isDeleted", "createdAt", "updatedAt"],
    ConversationWhereInput: ["AND", "OR", "NOT", "id", "name", "secondaryName", "creator", "creatorId", "isDeleted", "createdAt", "updatedAt", "Message", "Paticipants"],
    ConversationOrderByWithRelationInput: ["id", "name", "secondaryName", "creator", "creatorId", "isDeleted", "createdAt", "updatedAt", "Message", "Paticipants"],
    ConversationWhereUniqueInput: ["id"],
    ConversationOrderByWithAggregationInput: ["id", "name", "secondaryName", "creatorId", "isDeleted", "createdAt", "updatedAt", "_count", "_max", "_min"],
    ConversationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "secondaryName", "creatorId", "isDeleted", "createdAt", "updatedAt"],
    PaticipantsWhereInput: ["AND", "OR", "NOT", "id", "type", "user", "userId", "conversation", "conversationId", "joinedDate", "leftDate"],
    PaticipantsOrderByWithRelationInput: ["id", "type", "user", "userId", "conversation", "conversationId", "joinedDate", "leftDate"],
    PaticipantsWhereUniqueInput: ["id"],
    PaticipantsOrderByWithAggregationInput: ["id", "type", "userId", "conversationId", "joinedDate", "leftDate", "_count", "_max", "_min"],
    PaticipantsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "type", "userId", "conversationId", "joinedDate", "leftDate"],
    UserCreateInput: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count", "Message", "Paticipants", "ownerContact", "contactUser", "Conversation"],
    UserUpdateInput: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count", "Message", "Paticipants", "ownerContact", "contactUser", "Conversation"],
    UserCreateManyInput: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count"],
    UserUpdateManyMutationInput: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count"],
    UserContactCreateInput: ["ownerContact", "contactUser", "email", "username", "firstName", "lastName", "phoneNumber", "photo"],
    UserContactUpdateInput: ["ownerContact", "contactUser", "email", "username", "firstName", "lastName", "phoneNumber", "photo"],
    UserContactCreateManyInput: ["ownerContactId", "contactId", "email", "username", "firstName", "lastName", "phoneNumber", "photo"],
    UserContactUpdateManyMutationInput: ["email", "username", "firstName", "lastName", "phoneNumber", "photo"],
    MessageCreateInput: ["id", "fromUser", "conversation", "text", "isDeleted", "createdAt", "updatedAt"],
    MessageUpdateInput: ["id", "fromUser", "conversation", "text", "isDeleted", "createdAt", "updatedAt"],
    MessageCreateManyInput: ["id", "from", "conversationId", "text", "isDeleted", "createdAt", "updatedAt"],
    MessageUpdateManyMutationInput: ["id", "text", "isDeleted", "createdAt", "updatedAt"],
    ConversationCreateInput: ["id", "name", "secondaryName", "creator", "isDeleted", "createdAt", "updatedAt", "Message", "Paticipants"],
    ConversationUpdateInput: ["id", "name", "secondaryName", "creator", "isDeleted", "createdAt", "updatedAt", "Message", "Paticipants"],
    ConversationCreateManyInput: ["id", "name", "secondaryName", "creatorId", "isDeleted", "createdAt", "updatedAt"],
    ConversationUpdateManyMutationInput: ["id", "name", "secondaryName", "isDeleted", "createdAt", "updatedAt"],
    PaticipantsCreateInput: ["id", "type", "user", "conversation", "joinedDate", "leftDate"],
    PaticipantsUpdateInput: ["id", "type", "user", "conversation", "joinedDate", "leftDate"],
    PaticipantsCreateManyInput: ["id", "type", "userId", "conversationId", "joinedDate", "leftDate"],
    PaticipantsUpdateManyMutationInput: ["id", "type", "joinedDate", "leftDate"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    BoolFilter: ["equals", "not"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    MessageListRelationFilter: ["every", "some", "none"],
    PaticipantsListRelationFilter: ["every", "some", "none"],
    UserContactListRelationFilter: ["every", "some", "none"],
    ConversationListRelationFilter: ["every", "some", "none"],
    MessageOrderByRelationAggregateInput: ["_count"],
    PaticipantsOrderByRelationAggregateInput: ["_count"],
    UserContactOrderByRelationAggregateInput: ["_count"],
    ConversationOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count"],
    UserAvgOrderByAggregateInput: ["count"],
    UserMaxOrderByAggregateInput: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count"],
    UserMinOrderByAggregateInput: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count"],
    UserSumOrderByAggregateInput: ["count"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    UserRelationFilter: ["is", "isNot"],
    UserContactOwnerContactIdContactIdCompoundUniqueInput: ["ownerContactId", "contactId"],
    UserContactCountOrderByAggregateInput: ["ownerContactId", "contactId", "email", "username", "firstName", "lastName", "phoneNumber", "photo"],
    UserContactMaxOrderByAggregateInput: ["ownerContactId", "contactId", "email", "username", "firstName", "lastName", "phoneNumber", "photo"],
    UserContactMinOrderByAggregateInput: ["ownerContactId", "contactId", "email", "username", "firstName", "lastName", "phoneNumber", "photo"],
    ConversationRelationFilter: ["is", "isNot"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    MessageCountOrderByAggregateInput: ["id", "from", "conversationId", "text", "isDeleted", "createdAt", "updatedAt"],
    MessageMaxOrderByAggregateInput: ["id", "from", "conversationId", "text", "isDeleted", "createdAt", "updatedAt"],
    MessageMinOrderByAggregateInput: ["id", "from", "conversationId", "text", "isDeleted", "createdAt", "updatedAt"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    ConversationCountOrderByAggregateInput: ["id", "name", "secondaryName", "creatorId", "isDeleted", "createdAt", "updatedAt"],
    ConversationMaxOrderByAggregateInput: ["id", "name", "secondaryName", "creatorId", "isDeleted", "createdAt", "updatedAt"],
    ConversationMinOrderByAggregateInput: ["id", "name", "secondaryName", "creatorId", "isDeleted", "createdAt", "updatedAt"],
    PaticipantsCountOrderByAggregateInput: ["id", "type", "userId", "conversationId", "joinedDate", "leftDate"],
    PaticipantsMaxOrderByAggregateInput: ["id", "type", "userId", "conversationId", "joinedDate", "leftDate"],
    PaticipantsMinOrderByAggregateInput: ["id", "type", "userId", "conversationId", "joinedDate", "leftDate"],
    MessageCreateNestedManyWithoutFromUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    PaticipantsCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    UserContactCreateNestedManyWithoutOwnerContactInput: ["create", "connectOrCreate", "createMany", "connect"],
    UserContactCreateNestedManyWithoutContactUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    ConversationCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    BoolFieldUpdateOperationsInput: ["set"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    MessageUpdateManyWithoutFromUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    PaticipantsUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserContactUpdateManyWithoutOwnerContactNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserContactUpdateManyWithoutContactUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ConversationUpdateManyWithoutCreatorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutOwnerContactInput: ["create", "connectOrCreate", "connect"],
    UserCreateNestedOneWithoutContactUserInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutOwnerContactNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserUpdateOneRequiredWithoutContactUserNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutMessageInput: ["create", "connectOrCreate", "connect"],
    ConversationCreateNestedOneWithoutMessageInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutMessageNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ConversationUpdateOneRequiredWithoutMessageNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    UserCreateNestedOneWithoutConversationInput: ["create", "connectOrCreate", "connect"],
    MessageCreateNestedManyWithoutConversationInput: ["create", "connectOrCreate", "createMany", "connect"],
    PaticipantsCreateNestedManyWithoutConversationInput: ["create", "connectOrCreate", "createMany", "connect"],
    UserUpdateOneRequiredWithoutConversationNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    MessageUpdateManyWithoutConversationNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    PaticipantsUpdateManyWithoutConversationNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutPaticipantsInput: ["create", "connectOrCreate", "connect"],
    ConversationCreateNestedOneWithoutPaticipantsInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutPaticipantsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ConversationUpdateOneRequiredWithoutPaticipantsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedBoolFilter: ["equals", "not"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    MessageCreateWithoutFromUserInput: ["id", "conversation", "text", "isDeleted", "createdAt", "updatedAt"],
    MessageCreateOrConnectWithoutFromUserInput: ["where", "create"],
    MessageCreateManyFromUserInputEnvelope: ["data", "skipDuplicates"],
    PaticipantsCreateWithoutUserInput: ["id", "type", "conversation", "joinedDate", "leftDate"],
    PaticipantsCreateOrConnectWithoutUserInput: ["where", "create"],
    PaticipantsCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    UserContactCreateWithoutOwnerContactInput: ["contactUser", "email", "username", "firstName", "lastName", "phoneNumber", "photo"],
    UserContactCreateOrConnectWithoutOwnerContactInput: ["where", "create"],
    UserContactCreateManyOwnerContactInputEnvelope: ["data", "skipDuplicates"],
    UserContactCreateWithoutContactUserInput: ["ownerContact", "email", "username", "firstName", "lastName", "phoneNumber", "photo"],
    UserContactCreateOrConnectWithoutContactUserInput: ["where", "create"],
    UserContactCreateManyContactUserInputEnvelope: ["data", "skipDuplicates"],
    ConversationCreateWithoutCreatorInput: ["id", "name", "secondaryName", "isDeleted", "createdAt", "updatedAt", "Message", "Paticipants"],
    ConversationCreateOrConnectWithoutCreatorInput: ["where", "create"],
    ConversationCreateManyCreatorInputEnvelope: ["data", "skipDuplicates"],
    MessageUpsertWithWhereUniqueWithoutFromUserInput: ["where", "update", "create"],
    MessageUpdateWithWhereUniqueWithoutFromUserInput: ["where", "data"],
    MessageUpdateManyWithWhereWithoutFromUserInput: ["where", "data"],
    MessageScalarWhereInput: ["AND", "OR", "NOT", "id", "from", "conversationId", "text", "isDeleted", "createdAt", "updatedAt"],
    PaticipantsUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    PaticipantsUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    PaticipantsUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    PaticipantsScalarWhereInput: ["AND", "OR", "NOT", "id", "type", "userId", "conversationId", "joinedDate", "leftDate"],
    UserContactUpsertWithWhereUniqueWithoutOwnerContactInput: ["where", "update", "create"],
    UserContactUpdateWithWhereUniqueWithoutOwnerContactInput: ["where", "data"],
    UserContactUpdateManyWithWhereWithoutOwnerContactInput: ["where", "data"],
    UserContactScalarWhereInput: ["AND", "OR", "NOT", "ownerContactId", "contactId", "email", "username", "firstName", "lastName", "phoneNumber", "photo"],
    UserContactUpsertWithWhereUniqueWithoutContactUserInput: ["where", "update", "create"],
    UserContactUpdateWithWhereUniqueWithoutContactUserInput: ["where", "data"],
    UserContactUpdateManyWithWhereWithoutContactUserInput: ["where", "data"],
    ConversationUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
    ConversationUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
    ConversationUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
    ConversationScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "secondaryName", "creatorId", "isDeleted", "createdAt", "updatedAt"],
    UserCreateWithoutOwnerContactInput: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count", "Message", "Paticipants", "contactUser", "Conversation"],
    UserCreateOrConnectWithoutOwnerContactInput: ["where", "create"],
    UserCreateWithoutContactUserInput: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count", "Message", "Paticipants", "ownerContact", "Conversation"],
    UserCreateOrConnectWithoutContactUserInput: ["where", "create"],
    UserUpsertWithoutOwnerContactInput: ["update", "create"],
    UserUpdateWithoutOwnerContactInput: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count", "Message", "Paticipants", "contactUser", "Conversation"],
    UserUpsertWithoutContactUserInput: ["update", "create"],
    UserUpdateWithoutContactUserInput: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count", "Message", "Paticipants", "ownerContact", "Conversation"],
    UserCreateWithoutMessageInput: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count", "Paticipants", "ownerContact", "contactUser", "Conversation"],
    UserCreateOrConnectWithoutMessageInput: ["where", "create"],
    ConversationCreateWithoutMessageInput: ["id", "name", "secondaryName", "creator", "isDeleted", "createdAt", "updatedAt", "Paticipants"],
    ConversationCreateOrConnectWithoutMessageInput: ["where", "create"],
    UserUpsertWithoutMessageInput: ["update", "create"],
    UserUpdateWithoutMessageInput: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count", "Paticipants", "ownerContact", "contactUser", "Conversation"],
    ConversationUpsertWithoutMessageInput: ["update", "create"],
    ConversationUpdateWithoutMessageInput: ["id", "name", "secondaryName", "creator", "isDeleted", "createdAt", "updatedAt", "Paticipants"],
    UserCreateWithoutConversationInput: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count", "Message", "Paticipants", "ownerContact", "contactUser"],
    UserCreateOrConnectWithoutConversationInput: ["where", "create"],
    MessageCreateWithoutConversationInput: ["id", "fromUser", "text", "isDeleted", "createdAt", "updatedAt"],
    MessageCreateOrConnectWithoutConversationInput: ["where", "create"],
    MessageCreateManyConversationInputEnvelope: ["data", "skipDuplicates"],
    PaticipantsCreateWithoutConversationInput: ["id", "type", "user", "joinedDate", "leftDate"],
    PaticipantsCreateOrConnectWithoutConversationInput: ["where", "create"],
    PaticipantsCreateManyConversationInputEnvelope: ["data", "skipDuplicates"],
    UserUpsertWithoutConversationInput: ["update", "create"],
    UserUpdateWithoutConversationInput: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count", "Message", "Paticipants", "ownerContact", "contactUser"],
    MessageUpsertWithWhereUniqueWithoutConversationInput: ["where", "update", "create"],
    MessageUpdateWithWhereUniqueWithoutConversationInput: ["where", "data"],
    MessageUpdateManyWithWhereWithoutConversationInput: ["where", "data"],
    PaticipantsUpsertWithWhereUniqueWithoutConversationInput: ["where", "update", "create"],
    PaticipantsUpdateWithWhereUniqueWithoutConversationInput: ["where", "data"],
    PaticipantsUpdateManyWithWhereWithoutConversationInput: ["where", "data"],
    UserCreateWithoutPaticipantsInput: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count", "Message", "ownerContact", "contactUser", "Conversation"],
    UserCreateOrConnectWithoutPaticipantsInput: ["where", "create"],
    ConversationCreateWithoutPaticipantsInput: ["id", "name", "secondaryName", "creator", "isDeleted", "createdAt", "updatedAt", "Message"],
    ConversationCreateOrConnectWithoutPaticipantsInput: ["where", "create"],
    UserUpsertWithoutPaticipantsInput: ["update", "create"],
    UserUpdateWithoutPaticipantsInput: ["id", "email", "username", "password", "firstName", "lastName", "phoneNumber", "photo", "isAdmin", "active", "count", "Message", "ownerContact", "contactUser", "Conversation"],
    ConversationUpsertWithoutPaticipantsInput: ["update", "create"],
    ConversationUpdateWithoutPaticipantsInput: ["id", "name", "secondaryName", "creator", "isDeleted", "createdAt", "updatedAt", "Message"],
    MessageCreateManyFromUserInput: ["id", "conversationId", "text", "isDeleted", "createdAt", "updatedAt"],
    PaticipantsCreateManyUserInput: ["id", "type", "conversationId", "joinedDate", "leftDate"],
    UserContactCreateManyOwnerContactInput: ["contactId", "email", "username", "firstName", "lastName", "phoneNumber", "photo"],
    UserContactCreateManyContactUserInput: ["ownerContactId", "email", "username", "firstName", "lastName", "phoneNumber", "photo"],
    ConversationCreateManyCreatorInput: ["id", "name", "secondaryName", "isDeleted", "createdAt", "updatedAt"],
    MessageUpdateWithoutFromUserInput: ["id", "conversation", "text", "isDeleted", "createdAt", "updatedAt"],
    PaticipantsUpdateWithoutUserInput: ["id", "type", "conversation", "joinedDate", "leftDate"],
    UserContactUpdateWithoutOwnerContactInput: ["contactUser", "email", "username", "firstName", "lastName", "phoneNumber", "photo"],
    UserContactUpdateWithoutContactUserInput: ["ownerContact", "email", "username", "firstName", "lastName", "phoneNumber", "photo"],
    ConversationUpdateWithoutCreatorInput: ["id", "name", "secondaryName", "isDeleted", "createdAt", "updatedAt", "Message", "Paticipants"],
    MessageCreateManyConversationInput: ["id", "from", "text", "isDeleted", "createdAt", "updatedAt"],
    PaticipantsCreateManyConversationInput: ["id", "type", "userId", "joinedDate", "leftDate"],
    MessageUpdateWithoutConversationInput: ["id", "fromUser", "text", "isDeleted", "createdAt", "updatedAt"],
    PaticipantsUpdateWithoutConversationInput: ["id", "type", "user", "joinedDate", "leftDate"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
