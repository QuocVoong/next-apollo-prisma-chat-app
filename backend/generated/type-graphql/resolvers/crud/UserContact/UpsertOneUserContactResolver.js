"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneUserContactResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneUserContactArgs_1 = require("./args/UpsertOneUserContactArgs");
const UserContact_1 = require("../../../models/UserContact");
const helpers_1 = require("../../../helpers");
let UpsertOneUserContactResolver = class UpsertOneUserContactResolver {
    async upsertOneUserContact(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpsertOneUserContactResolver.prototype, "upsertOneUserContact", null);
UpsertOneUserContactResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserContact_1.UserContact)
], UpsertOneUserContactResolver);
exports.UpsertOneUserContactResolver = UpsertOneUserContactResolver;
