"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMessageResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateMessageArgs_1 = require("./args/AggregateMessageArgs");
const Message_1 = require("../../../models/Message");
const AggregateMessage_1 = require("../../outputs/AggregateMessage");
const helpers_1 = require("../../../helpers");
let AggregateMessageResolver = class AggregateMessageResolver {
    async aggregateMessage(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).message.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMessage_1.AggregateMessage, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMessageArgs_1.AggregateMessageArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateMessageResolver.prototype, "aggregateMessage", null);
AggregateMessageResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Message_1.Message)
], AggregateMessageResolver);
exports.AggregateMessageResolver = AggregateMessageResolver;
