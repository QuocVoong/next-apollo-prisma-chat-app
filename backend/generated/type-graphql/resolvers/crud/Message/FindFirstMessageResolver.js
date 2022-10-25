"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstMessageResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstMessageArgs_1 = require("./args/FindFirstMessageArgs");
const Message_1 = require("../../../models/Message");
const helpers_1 = require("../../../helpers");
let FindFirstMessageResolver = class FindFirstMessageResolver {
    async findFirstMessage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).message.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Message_1.Message, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstMessageArgs_1.FindFirstMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstMessageResolver.prototype, "findFirstMessage", null);
FindFirstMessageResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Message_1.Message)
], FindFirstMessageResolver);
exports.FindFirstMessageResolver = FindFirstMessageResolver;
