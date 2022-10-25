"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUserContactResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateUserContactArgs_1 = require("./args/AggregateUserContactArgs");
const UserContact_1 = require("../../../models/UserContact");
const AggregateUserContact_1 = require("../../outputs/AggregateUserContact");
const helpers_1 = require("../../../helpers");
let AggregateUserContactResolver = class AggregateUserContactResolver {
    async aggregateUserContact(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
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
], AggregateUserContactResolver.prototype, "aggregateUserContact", null);
AggregateUserContactResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserContact_1.UserContact)
], AggregateUserContactResolver);
exports.AggregateUserContactResolver = AggregateUserContactResolver;
