"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateConversationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateConversationArgs_1 = require("./args/AggregateConversationArgs");
const Conversation_1 = require("../../../models/Conversation");
const AggregateConversation_1 = require("../../outputs/AggregateConversation");
const helpers_1 = require("../../../helpers");
let AggregateConversationResolver = class AggregateConversationResolver {
    async aggregateConversation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).conversation.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateConversation_1.AggregateConversation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateConversationArgs_1.AggregateConversationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateConversationResolver.prototype, "aggregateConversation", null);
AggregateConversationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Conversation_1.Conversation)
], AggregateConversationResolver);
exports.AggregateConversationResolver = AggregateConversationResolver;
