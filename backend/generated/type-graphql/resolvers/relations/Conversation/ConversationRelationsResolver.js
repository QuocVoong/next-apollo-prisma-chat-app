"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Conversation_1 = require("../../../models/Conversation");
const Message_1 = require("../../../models/Message");
const Paticipants_1 = require("../../../models/Paticipants");
const User_1 = require("../../../models/User");
const ConversationMessageArgs_1 = require("./args/ConversationMessageArgs");
const ConversationPaticipantsArgs_1 = require("./args/ConversationPaticipantsArgs");
const helpers_1 = require("../../../helpers");
let ConversationRelationsResolver = class ConversationRelationsResolver {
    async creator(conversation, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).conversation.findUnique({
            where: {
                id: conversation.id,
            },
        }).creator({});
    }
    async Message(conversation, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).conversation.findUnique({
            where: {
                id: conversation.id,
            },
        }).Message(args);
    }
    async Paticipants(conversation, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).conversation.findUnique({
            where: {
                id: conversation.id,
            },
        }).Paticipants(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Conversation_1.Conversation, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ConversationRelationsResolver.prototype, "creator", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Message_1.Message], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Conversation_1.Conversation, Object, ConversationMessageArgs_1.ConversationMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ConversationRelationsResolver.prototype, "Message", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Paticipants_1.Paticipants], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Conversation_1.Conversation, Object, ConversationPaticipantsArgs_1.ConversationPaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ConversationRelationsResolver.prototype, "Paticipants", null);
ConversationRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Conversation_1.Conversation)
], ConversationRelationsResolver);
exports.ConversationRelationsResolver = ConversationRelationsResolver;
