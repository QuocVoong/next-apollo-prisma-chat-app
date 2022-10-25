"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUserContactResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByUserContactArgs_1 = require("./args/GroupByUserContactArgs");
const UserContact_1 = require("../../../models/UserContact");
const UserContactGroupBy_1 = require("../../outputs/UserContactGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByUserContactResolver = class GroupByUserContactResolver {
    async groupByUserContact(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
], GroupByUserContactResolver.prototype, "groupByUserContact", null);
GroupByUserContactResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserContact_1.UserContact)
], GroupByUserContactResolver);
exports.GroupByUserContactResolver = GroupByUserContactResolver;
