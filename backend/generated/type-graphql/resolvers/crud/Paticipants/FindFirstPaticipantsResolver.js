"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPaticipantsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstPaticipantsArgs_1 = require("./args/FindFirstPaticipantsArgs");
const Paticipants_1 = require("../../../models/Paticipants");
const helpers_1 = require("../../../helpers");
let FindFirstPaticipantsResolver = class FindFirstPaticipantsResolver {
    async findFirstPaticipants(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPaticipantsArgs_1.FindFirstPaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstPaticipantsResolver.prototype, "findFirstPaticipants", null);
FindFirstPaticipantsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Paticipants_1.Paticipants)
], FindFirstPaticipantsResolver);
exports.FindFirstPaticipantsResolver = FindFirstPaticipantsResolver;
