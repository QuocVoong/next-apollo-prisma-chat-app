"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePaticipantsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePaticipantsArgs_1 = require("./args/AggregatePaticipantsArgs");
const Paticipants_1 = require("../../../models/Paticipants");
const AggregatePaticipants_1 = require("../../outputs/AggregatePaticipants");
const helpers_1 = require("../../../helpers");
let AggregatePaticipantsResolver = class AggregatePaticipantsResolver {
    async aggregatePaticipants(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePaticipants_1.AggregatePaticipants, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePaticipantsArgs_1.AggregatePaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregatePaticipantsResolver.prototype, "aggregatePaticipants", null);
AggregatePaticipantsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Paticipants_1.Paticipants)
], AggregatePaticipantsResolver);
exports.AggregatePaticipantsResolver = AggregatePaticipantsResolver;
