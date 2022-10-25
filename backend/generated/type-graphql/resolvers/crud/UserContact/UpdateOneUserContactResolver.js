"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneUserContactResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneUserContactArgs_1 = require("./args/UpdateOneUserContactArgs");
const UserContact_1 = require("../../../models/UserContact");
const helpers_1 = require("../../../helpers");
let UpdateOneUserContactResolver = class UpdateOneUserContactResolver {
    async updateOneUserContact(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateOneUserContactResolver.prototype, "updateOneUserContact", null);
UpdateOneUserContactResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserContact_1.UserContact)
], UpdateOneUserContactResolver);
exports.UpdateOneUserContactResolver = UpdateOneUserContactResolver;
