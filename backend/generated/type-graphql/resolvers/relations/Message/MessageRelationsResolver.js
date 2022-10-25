"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Conversation_1 = require("../../../models/Conversation");
const Message_1 = require("../../../models/Message");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let MessageRelationsResolver = class MessageRelationsResolver {
    async fromUser(message, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).message.findUnique({
            where: {
                id: message.id,
            },
        }).fromUser({});
    }
    async conversation(message, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).message.findUnique({
            where: {
                id: message.id,
            },
        }).conversation({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Message_1.Message, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MessageRelationsResolver.prototype, "fromUser", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Conversation_1.Conversation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Message_1.Message, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MessageRelationsResolver.prototype, "conversation", null);
MessageRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Message_1.Message)
], MessageRelationsResolver);
exports.MessageRelationsResolver = MessageRelationsResolver;
