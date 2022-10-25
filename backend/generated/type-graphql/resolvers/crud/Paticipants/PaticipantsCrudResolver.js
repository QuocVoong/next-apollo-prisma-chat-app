"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePaticipantsArgs_1 = require("./args/AggregatePaticipantsArgs");
const CreateOnePaticipantsArgs_1 = require("./args/CreateOnePaticipantsArgs");
const DeleteManyPaticipantsArgs_1 = require("./args/DeleteManyPaticipantsArgs");
const DeleteOnePaticipantsArgs_1 = require("./args/DeleteOnePaticipantsArgs");
const FindFirstPaticipantsArgs_1 = require("./args/FindFirstPaticipantsArgs");
const FindManyPaticipantsArgs_1 = require("./args/FindManyPaticipantsArgs");
const FindUniquePaticipantsArgs_1 = require("./args/FindUniquePaticipantsArgs");
const GroupByPaticipantsArgs_1 = require("./args/GroupByPaticipantsArgs");
const UpdateManyPaticipantsArgs_1 = require("./args/UpdateManyPaticipantsArgs");
const UpdateOnePaticipantsArgs_1 = require("./args/UpdateOnePaticipantsArgs");
const UpsertOnePaticipantsArgs_1 = require("./args/UpsertOnePaticipantsArgs");
const helpers_1 = require("../../../helpers");
const Paticipants_1 = require("../../../models/Paticipants");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePaticipants_1 = require("../../outputs/AggregatePaticipants");
const PaticipantsGroupBy_1 = require("../../outputs/PaticipantsGroupBy");
let PaticipantsCrudResolver = class PaticipantsCrudResolver {
    async aggregatePaticipants(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createOnePaticipants(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPaticipants(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOnePaticipants(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPaticipants(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyPaticipants(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniquePaticipants(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByPaticipants(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyPaticipants(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOnePaticipants(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOnePaticipants(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePaticipants_1.AggregatePaticipants, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePaticipantsArgs_1.AggregatePaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaticipantsCrudResolver.prototype, "aggregatePaticipants", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Paticipants_1.Paticipants, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOnePaticipantsArgs_1.CreateOnePaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaticipantsCrudResolver.prototype, "createOnePaticipants", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPaticipantsArgs_1.DeleteManyPaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaticipantsCrudResolver.prototype, "deleteManyPaticipants", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Paticipants_1.Paticipants, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOnePaticipantsArgs_1.DeleteOnePaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaticipantsCrudResolver.prototype, "deleteOnePaticipants", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Paticipants_1.Paticipants, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPaticipantsArgs_1.FindFirstPaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaticipantsCrudResolver.prototype, "findFirstPaticipants", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Paticipants_1.Paticipants], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPaticipantsArgs_1.FindManyPaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaticipantsCrudResolver.prototype, "findManyPaticipants", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Paticipants_1.Paticipants, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePaticipantsArgs_1.FindUniquePaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaticipantsCrudResolver.prototype, "findUniquePaticipants", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PaticipantsGroupBy_1.PaticipantsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPaticipantsArgs_1.GroupByPaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaticipantsCrudResolver.prototype, "groupByPaticipants", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPaticipantsArgs_1.UpdateManyPaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaticipantsCrudResolver.prototype, "updateManyPaticipants", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Paticipants_1.Paticipants, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOnePaticipantsArgs_1.UpdateOnePaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaticipantsCrudResolver.prototype, "updateOnePaticipants", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Paticipants_1.Paticipants, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOnePaticipantsArgs_1.UpsertOnePaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PaticipantsCrudResolver.prototype, "upsertOnePaticipants", null);
PaticipantsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Paticipants_1.Paticipants)
], PaticipantsCrudResolver);
exports.PaticipantsCrudResolver = PaticipantsCrudResolver;
