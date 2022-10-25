"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyConversationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyConversationArgs_1 = require("./args/FindManyConversationArgs");
const Conversation_1 = require("../../../models/Conversation");
const helpers_1 = require("../../../helpers");
let FindManyConversationResolver = class FindManyConversationResolver {
    async conversations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).conversation.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Conversation_1.Conversation], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyConversationArgs_1.FindManyConversationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyConversationResolver.prototype, "conversations", null);
FindManyConversationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Conversation_1.Conversation)
], FindManyConversationResolver);
exports.FindManyConversationResolver = FindManyConversationResolver;
