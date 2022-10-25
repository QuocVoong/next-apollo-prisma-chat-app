"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOnePaticipantsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOnePaticipantsArgs_1 = require("./args/DeleteOnePaticipantsArgs");
const Paticipants_1 = require("../../../models/Paticipants");
const helpers_1 = require("../../../helpers");
let DeleteOnePaticipantsResolver = class DeleteOnePaticipantsResolver {
    async deleteOnePaticipants(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOnePaticipantsArgs_1.DeleteOnePaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOnePaticipantsResolver.prototype, "deleteOnePaticipants", null);
DeleteOnePaticipantsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Paticipants_1.Paticipants)
], DeleteOnePaticipantsResolver);
exports.DeleteOnePaticipantsResolver = DeleteOnePaticipantsResolver;
