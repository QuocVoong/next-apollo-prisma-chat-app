"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePaticipantsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniquePaticipantsArgs_1 = require("./args/FindUniquePaticipantsArgs");
const Paticipants_1 = require("../../../models/Paticipants");
const helpers_1 = require("../../../helpers");
let FindUniquePaticipantsResolver = class FindUniquePaticipantsResolver {
    async findUniquePaticipants(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Paticipants_1.Paticipants, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePaticipantsArgs_1.FindUniquePaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniquePaticipantsResolver.prototype, "findUniquePaticipants", null);
FindUniquePaticipantsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Paticipants_1.Paticipants)
], FindUniquePaticipantsResolver);
exports.FindUniquePaticipantsResolver = FindUniquePaticipantsResolver;
