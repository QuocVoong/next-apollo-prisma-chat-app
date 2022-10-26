"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateUserContactArgs_1 = require("./args/AggregateUserContactArgs");
const CreateManyUserContactArgs_1 = require("./args/CreateManyUserContactArgs");
const CreateOneUserContactArgs_1 = require("./args/CreateOneUserContactArgs");
const DeleteManyUserContactArgs_1 = require("./args/DeleteManyUserContactArgs");
const DeleteOneUserContactArgs_1 = require("./args/DeleteOneUserContactArgs");
const FindFirstUserContactArgs_1 = require("./args/FindFirstUserContactArgs");
const FindManyUserContactArgs_1 = require("./args/FindManyUserContactArgs");
const FindUniqueUserContactArgs_1 = require("./args/FindUniqueUserContactArgs");
const GroupByUserContactArgs_1 = require("./args/GroupByUserContactArgs");
const UpdateManyUserContactArgs_1 = require("./args/UpdateManyUserContactArgs");
const UpdateOneUserContactArgs_1 = require("./args/UpdateOneUserContactArgs");
const UpsertOneUserContactArgs_1 = require("./args/UpsertOneUserContactArgs");
const helpers_1 = require("../../../helpers");
const UserContact_1 = require("../../../models/UserContact");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUserContact_1 = require("../../outputs/AggregateUserContact");
const UserContactGroupBy_1 = require("../../outputs/UserContactGroupBy");
let UserContactCrudResolver = class UserContactCrudResolver {
    async aggregateUserContact(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyUserContact(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneUserContact(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyUserContact(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneUserContact(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstUserContact(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async userContacts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async userContact(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByUserContact(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyUserContact(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneUserContact(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneUserContact(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateUserContact_1.AggregateUserContact, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateUserContactArgs_1.AggregateUserContactArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserContactCrudResolver.prototype, "aggregateUserContact", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyUserContactArgs_1.CreateManyUserContactArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserContactCrudResolver.prototype, "createManyUserContact", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => UserContact_1.UserContact, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneUserContactArgs_1.CreateOneUserContactArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserContactCrudResolver.prototype, "createOneUserContact", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyUserContactArgs_1.DeleteManyUserContactArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserContactCrudResolver.prototype, "deleteManyUserContact", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => UserContact_1.UserContact, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneUserContactArgs_1.DeleteOneUserContactArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserContactCrudResolver.prototype, "deleteOneUserContact", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => UserContact_1.UserContact, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUserContactArgs_1.FindFirstUserContactArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserContactCrudResolver.prototype, "findFirstUserContact", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [UserContact_1.UserContact], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyUserContactArgs_1.FindManyUserContactArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserContactCrudResolver.prototype, "userContacts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => UserContact_1.UserContact, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUserContactArgs_1.FindUniqueUserContactArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserContactCrudResolver.prototype, "userContact", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [UserContactGroupBy_1.UserContactGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByUserContactArgs_1.GroupByUserContactArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserContactCrudResolver.prototype, "groupByUserContact", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyUserContactArgs_1.UpdateManyUserContactArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserContactCrudResolver.prototype, "updateManyUserContact", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => UserContact_1.UserContact, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneUserContactArgs_1.UpdateOneUserContactArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserContactCrudResolver.prototype, "updateOneUserContact", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => UserContact_1.UserContact, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneUserContactArgs_1.UpsertOneUserContactArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserContactCrudResolver.prototype, "upsertOneUserContact", null);
UserContactCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserContact_1.UserContact)
], UserContactCrudResolver);
exports.UserContactCrudResolver = UserContactCrudResolver;
