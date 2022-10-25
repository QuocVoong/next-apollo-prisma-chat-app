"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyUserContactResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyUserContactArgs_1 = require("./args/DeleteManyUserContactArgs");
const UserContact_1 = require("../../../models/UserContact");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyUserContactResolver = class DeleteManyUserContactResolver {
    async deleteManyUserContact(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], DeleteManyUserContactResolver.prototype, "deleteManyUserContact", null);
DeleteManyUserContactResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserContact_1.UserContact)
], DeleteManyUserContactResolver);
exports.DeleteManyUserContactResolver = DeleteManyUserContactResolver;
