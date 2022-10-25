"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneUserContactResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneUserContactArgs_1 = require("./args/CreateOneUserContactArgs");
const UserContact_1 = require("../../../models/UserContact");
const helpers_1 = require("../../../helpers");
let CreateOneUserContactResolver = class CreateOneUserContactResolver {
    async createOneUserContact(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneUserContactArgs_1.CreateOneUserContactArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneUserContactResolver.prototype, "createOneUserContact", null);
CreateOneUserContactResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserContact_1.UserContact)
], CreateOneUserContactResolver);
exports.CreateOneUserContactResolver = CreateOneUserContactResolver;
