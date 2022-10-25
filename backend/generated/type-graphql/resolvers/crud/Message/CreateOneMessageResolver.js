"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneMessageResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneMessageArgs_1 = require("./args/CreateOneMessageArgs");
const Message_1 = require("../../../models/Message");
const helpers_1 = require("../../../helpers");
let CreateOneMessageResolver = class CreateOneMessageResolver {
    async createOneMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).message.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Message_1.Message, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneMessageArgs_1.CreateOneMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneMessageResolver.prototype, "createOneMessage", null);
CreateOneMessageResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Message_1.Message)
], CreateOneMessageResolver);
exports.CreateOneMessageResolver = CreateOneMessageResolver;
