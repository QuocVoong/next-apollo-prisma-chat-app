"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnePaticipantsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOnePaticipantsArgs_1 = require("./args/UpdateOnePaticipantsArgs");
const Paticipants_1 = require("../../../models/Paticipants");
const helpers_1 = require("../../../helpers");
let UpdateOnePaticipantsResolver = class UpdateOnePaticipantsResolver {
    async updateOnePaticipants(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Paticipants_1.Paticipants, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOnePaticipantsArgs_1.UpdateOnePaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOnePaticipantsResolver.prototype, "updateOnePaticipants", null);
UpdateOnePaticipantsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Paticipants_1.Paticipants)
], UpdateOnePaticipantsResolver);
exports.UpdateOnePaticipantsResolver = UpdateOnePaticipantsResolver;
