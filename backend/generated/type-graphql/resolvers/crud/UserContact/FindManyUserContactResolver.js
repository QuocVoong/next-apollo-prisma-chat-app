"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyUserContactResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyUserContactArgs_1 = require("./args/FindManyUserContactArgs");
const UserContact_1 = require("../../../models/UserContact");
const helpers_1 = require("../../../helpers");
let FindManyUserContactResolver = class FindManyUserContactResolver {
    async userContacts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindManyUserContactResolver.prototype, "userContacts", null);
FindManyUserContactResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserContact_1.UserContact)
], FindManyUserContactResolver);
exports.FindManyUserContactResolver = FindManyUserContactResolver;
