"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Conversation_1 = require("../../../models/Conversation");
const Paticipants_1 = require("../../../models/Paticipants");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let PaticipantsRelationsResolver = class PaticipantsRelationsResolver {
    async user(paticipants, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.findUnique({
            where: {
                id: paticipants.id,
            },
        }).user({});
    }
    async conversation(paticipants, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.findUnique({
            where: {
                id: paticipants.id,
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
    tslib_1.__metadata("design:paramtypes", [Paticipants_1.Paticipants, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PaticipantsRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Conversation_1.Conversation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Paticipants_1.Paticipants, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PaticipantsRelationsResolver.prototype, "conversation", null);
PaticipantsRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Paticipants_1.Paticipants)
], PaticipantsRelationsResolver);
exports.PaticipantsRelationsResolver = PaticipantsRelationsResolver;
