"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMessageResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueMessageArgs_1 = require("./args/FindUniqueMessageArgs");
const Message_1 = require("../../../models/Message");
const helpers_1 = require("../../../helpers");
let FindUniqueMessageResolver = class FindUniqueMessageResolver {
    async message(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).message.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMessageArgs_1.FindUniqueMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueMessageResolver.prototype, "message", null);
FindUniqueMessageResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Message_1.Message)
], FindUniqueMessageResolver);
exports.FindUniqueMessageResolver = FindUniqueMessageResolver;
