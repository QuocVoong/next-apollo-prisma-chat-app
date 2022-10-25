"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueConversationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueConversationArgs_1 = require("./args/FindUniqueConversationArgs");
const Conversation_1 = require("../../../models/Conversation");
const helpers_1 = require("../../../helpers");
let FindUniqueConversationResolver = class FindUniqueConversationResolver {
    async conversation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).conversation.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Conversation_1.Conversation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueConversationArgs_1.FindUniqueConversationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueConversationResolver.prototype, "conversation", null);
FindUniqueConversationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Conversation_1.Conversation)
], FindUniqueConversationResolver);
exports.FindUniqueConversationResolver = FindUniqueConversationResolver;
