"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateMessageArgs_1 = require("./args/AggregateMessageArgs");
const CreateManyMessageArgs_1 = require("./args/CreateManyMessageArgs");
const CreateOneMessageArgs_1 = require("./args/CreateOneMessageArgs");
const DeleteManyMessageArgs_1 = require("./args/DeleteManyMessageArgs");
const DeleteOneMessageArgs_1 = require("./args/DeleteOneMessageArgs");
const FindFirstMessageArgs_1 = require("./args/FindFirstMessageArgs");
const FindManyMessageArgs_1 = require("./args/FindManyMessageArgs");
const FindUniqueMessageArgs_1 = require("./args/FindUniqueMessageArgs");
const GroupByMessageArgs_1 = require("./args/GroupByMessageArgs");
const UpdateManyMessageArgs_1 = require("./args/UpdateManyMessageArgs");
const UpdateOneMessageArgs_1 = require("./args/UpdateOneMessageArgs");
const UpsertOneMessageArgs_1 = require("./args/UpsertOneMessageArgs");
const helpers_1 = require("../../../helpers");
const Message_1 = require("../../../models/Message");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateMessage_1 = require("../../outputs/AggregateMessage");
const MessageGroupBy_1 = require("../../outputs/MessageGroupBy");
let MessageCrudResolver = class MessageCrudResolver {
    async aggregateMessage(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).message.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).message.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).message.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).message.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).message.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).message.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async messages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).message.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async message(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).message.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByMessage(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).message.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).message.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).message.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).message.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMessage_1.AggregateMessage, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMessageArgs_1.AggregateMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessageCrudResolver.prototype, "aggregateMessage", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyMessageArgs_1.CreateManyMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessageCrudResolver.prototype, "createManyMessage", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Message_1.Message, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneMessageArgs_1.CreateOneMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessageCrudResolver.prototype, "createOneMessage", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyMessageArgs_1.DeleteManyMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessageCrudResolver.prototype, "deleteManyMessage", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Message_1.Message, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneMessageArgs_1.DeleteOneMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessageCrudResolver.prototype, "deleteOneMessage", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Message_1.Message, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstMessageArgs_1.FindFirstMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessageCrudResolver.prototype, "findFirstMessage", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Message_1.Message], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyMessageArgs_1.FindManyMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessageCrudResolver.prototype, "messages", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Message_1.Message, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMessageArgs_1.FindUniqueMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessageCrudResolver.prototype, "message", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MessageGroupBy_1.MessageGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByMessageArgs_1.GroupByMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessageCrudResolver.prototype, "groupByMessage", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyMessageArgs_1.UpdateManyMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessageCrudResolver.prototype, "updateManyMessage", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Message_1.Message, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneMessageArgs_1.UpdateOneMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessageCrudResolver.prototype, "updateOneMessage", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Message_1.Message, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneMessageArgs_1.UpsertOneMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MessageCrudResolver.prototype, "upsertOneMessage", null);
MessageCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Message_1.Message)
], MessageCrudResolver);
exports.MessageCrudResolver = MessageCrudResolver;
