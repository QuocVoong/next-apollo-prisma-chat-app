"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOnePaticipantsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOnePaticipantsArgs_1 = require("./args/UpsertOnePaticipantsArgs");
const Paticipants_1 = require("../../../models/Paticipants");
const helpers_1 = require("../../../helpers");
let UpsertOnePaticipantsResolver = class UpsertOnePaticipantsResolver {
    async upsertOnePaticipants(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Paticipants_1.Paticipants, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOnePaticipantsArgs_1.UpsertOnePaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOnePaticipantsResolver.prototype, "upsertOnePaticipants", null);
UpsertOnePaticipantsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Paticipants_1.Paticipants)
], UpsertOnePaticipantsResolver);
exports.UpsertOnePaticipantsResolver = UpsertOnePaticipantsResolver;
