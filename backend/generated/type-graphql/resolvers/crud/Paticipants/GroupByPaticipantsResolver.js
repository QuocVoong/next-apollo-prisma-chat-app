"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPaticipantsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByPaticipantsArgs_1 = require("./args/GroupByPaticipantsArgs");
const Paticipants_1 = require("../../../models/Paticipants");
const PaticipantsGroupBy_1 = require("../../outputs/PaticipantsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByPaticipantsResolver = class GroupByPaticipantsResolver {
    async groupByPaticipants(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PaticipantsGroupBy_1.PaticipantsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPaticipantsArgs_1.GroupByPaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByPaticipantsResolver.prototype, "groupByPaticipants", null);
GroupByPaticipantsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Paticipants_1.Paticipants)
], GroupByPaticipantsResolver);
exports.GroupByPaticipantsResolver = GroupByPaticipantsResolver;
