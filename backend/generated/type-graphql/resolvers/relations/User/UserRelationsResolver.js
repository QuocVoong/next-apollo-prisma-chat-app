"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Conversation_1 = require("../../../models/Conversation");
const Message_1 = require("../../../models/Message");
const Paticipants_1 = require("../../../models/Paticipants");
const User_1 = require("../../../models/User");
const UserContact_1 = require("../../../models/UserContact");
const UserContactUserArgs_1 = require("./args/UserContactUserArgs");
const UserConversationArgs_1 = require("./args/UserConversationArgs");
const UserMessageArgs_1 = require("./args/UserMessageArgs");
const UserOwnerContactArgs_1 = require("./args/UserOwnerContactArgs");
const UserPaticipantsArgs_1 = require("./args/UserPaticipantsArgs");
const helpers_1 = require("../../../helpers");
let UserRelationsResolver = class UserRelationsResolver {
    async Message(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).Message(args);
    }
    async Paticipants(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).Paticipants(args);
    }
    async ownerContact(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).ownerContact(args);
    }
    async contactUser(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).contactUser(args);
    }
    async Conversation(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).Conversation(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Message_1.Message], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserMessageArgs_1.UserMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "Message", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Paticipants_1.Paticipants], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserPaticipantsArgs_1.UserPaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "Paticipants", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [UserContact_1.UserContact], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserOwnerContactArgs_1.UserOwnerContactArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "ownerContact", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [UserContact_1.UserContact], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserContactUserArgs_1.UserContactUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "contactUser", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Conversation_1.Conversation], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserConversationArgs_1.UserConversationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "Conversation", null);
UserRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], UserRelationsResolver);
exports.UserRelationsResolver = UserRelationsResolver;
