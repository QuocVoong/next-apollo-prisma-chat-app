"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateConversationArgs_1 = require("./args/AggregateConversationArgs");
const CreateManyConversationArgs_1 = require("./args/CreateManyConversationArgs");
const CreateOneConversationArgs_1 = require("./args/CreateOneConversationArgs");
const DeleteManyConversationArgs_1 = require("./args/DeleteManyConversationArgs");
const DeleteOneConversationArgs_1 = require("./args/DeleteOneConversationArgs");
const FindFirstConversationArgs_1 = require("./args/FindFirstConversationArgs");
const FindManyConversationArgs_1 = require("./args/FindManyConversationArgs");
const FindUniqueConversationArgs_1 = require("./args/FindUniqueConversationArgs");
const GroupByConversationArgs_1 = require("./args/GroupByConversationArgs");
const UpdateManyConversationArgs_1 = require("./args/UpdateManyConversationArgs");
const UpdateOneConversationArgs_1 = require("./args/UpdateOneConversationArgs");
const UpsertOneConversationArgs_1 = require("./args/UpsertOneConversationArgs");
const helpers_1 = require("../../../helpers");
const Conversation_1 = require("../../../models/Conversation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateConversation_1 = require("../../outputs/AggregateConversation");
const ConversationGroupBy_1 = require("../../outputs/ConversationGroupBy");
let ConversationCrudResolver = class ConversationCrudResolver {
    async aggregateConversation(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).conversation.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyConversation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).conversation.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneConversation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).conversation.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyConversation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).conversation.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneConversation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).conversation.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstConversation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).conversation.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async conversations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).conversation.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async conversation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).conversation.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByConversation(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).conversation.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyConversation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).conversation.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneConversation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).conversation.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneConversation(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).conversation.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], ConversationCrudResolver.prototype, "aggregateConversation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyConversationArgs_1.CreateManyConversationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ConversationCrudResolver.prototype, "createManyConversation", null);
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
], ConversationCrudResolver.prototype, "createOneConversation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyConversationArgs_1.DeleteManyConversationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ConversationCrudResolver.prototype, "deleteManyConversation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Conversation_1.Conversation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneConversationArgs_1.DeleteOneConversationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ConversationCrudResolver.prototype, "deleteOneConversation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Conversation_1.Conversation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstConversationArgs_1.FindFirstConversationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ConversationCrudResolver.prototype, "findFirstConversation", null);
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
], ConversationCrudResolver.prototype, "conversations", null);
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
], ConversationCrudResolver.prototype, "conversation", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ConversationGroupBy_1.ConversationGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByConversationArgs_1.GroupByConversationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ConversationCrudResolver.prototype, "groupByConversation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyConversationArgs_1.UpdateManyConversationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ConversationCrudResolver.prototype, "updateManyConversation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Conversation_1.Conversation, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneConversationArgs_1.UpdateOneConversationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ConversationCrudResolver.prototype, "updateOneConversation", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Conversation_1.Conversation, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneConversationArgs_1.UpsertOneConversationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ConversationCrudResolver.prototype, "upsertOneConversation", null);
ConversationCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Conversation_1.Conversation)
], ConversationCrudResolver);
exports.ConversationCrudResolver = ConversationCrudResolver;
