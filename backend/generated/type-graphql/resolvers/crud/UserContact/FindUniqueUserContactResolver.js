"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUserContactResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueUserContactArgs_1 = require("./args/FindUniqueUserContactArgs");
const UserContact_1 = require("../../../models/UserContact");
const helpers_1 = require("../../../helpers");
let FindUniqueUserContactResolver = class FindUniqueUserContactResolver {
    async userContact(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindUniqueUserContactResolver.prototype, "userContact", null);
FindUniqueUserContactResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserContact_1.UserContact)
], FindUniqueUserContactResolver);
exports.FindUniqueUserContactResolver = FindUniqueUserContactResolver;
