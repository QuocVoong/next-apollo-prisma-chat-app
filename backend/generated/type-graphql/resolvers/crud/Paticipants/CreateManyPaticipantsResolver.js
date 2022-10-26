"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPaticipantsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyPaticipantsArgs_1 = require("./args/CreateManyPaticipantsArgs");
const Paticipants_1 = require("../../../models/Paticipants");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyPaticipantsResolver = class CreateManyPaticipantsResolver {
    async createManyPaticipants(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).paticipants.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyPaticipantsArgs_1.CreateManyPaticipantsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyPaticipantsResolver.prototype, "createManyPaticipants", null);
CreateManyPaticipantsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Paticipants_1.Paticipants)
], CreateManyPaticipantsResolver);
exports.CreateManyPaticipantsResolver = CreateManyPaticipantsResolver;
