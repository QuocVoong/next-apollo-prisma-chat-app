"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMessageResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByMessageArgs_1 = require("./args/GroupByMessageArgs");
const Message_1 = require("../../../models/Message");
const MessageGroupBy_1 = require("../../outputs/MessageGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByMessageResolver = class GroupByMessageResolver {
    async groupByMessage(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).message.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MessageGroupBy_1.MessageGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByMessageArgs_1.GroupByMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByMessageResolver.prototype, "groupByMessage", null);
GroupByMessageResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Message_1.Message)
], GroupByMessageResolver);
exports.GroupByMessageResolver = GroupByMessageResolver;
