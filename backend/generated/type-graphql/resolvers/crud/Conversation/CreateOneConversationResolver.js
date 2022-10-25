"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneConversationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneConversationArgs_1 = require("./args/CreateOneConversationArgs");
const Conversation_1 = require("../../../models/Conversation");
const helpers_1 = require("../../../helpers");
let CreateOneConversationResolver = class CreateOneConversationResolver {
    async createOneConversation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).conversation.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Conversation_1.Conversation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneConversationArgs_1.CreateOneConversationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneConversationResolver.prototype, "createOneConversation", null);
CreateOneConversationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Conversation_1.Conversation)
], CreateOneConversationResolver);
exports.CreateOneConversationResolver = CreateOneConversationResolver;
