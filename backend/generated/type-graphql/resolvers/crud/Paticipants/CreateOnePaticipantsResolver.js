"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnePaticipantsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOnePaticipantsArgs_1 = require("./args/CreateOnePaticipantsArgs");
const Paticipants_1 = require("../../../models/Paticipants");
const helpers_1 = require("../../../helpers");
let CreateOnePaticipantsResolver = class CreateOnePaticipantsResolver {
    async createOnePaticipants(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOnePaticipantsArgs_1.CreateOnePaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOnePaticipantsResolver.prototype, "createOnePaticipants", null);
CreateOnePaticipantsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Paticipants_1.Paticipants)
], CreateOnePaticipantsResolver);
exports.CreateOnePaticipantsResolver = CreateOnePaticipantsResolver;
