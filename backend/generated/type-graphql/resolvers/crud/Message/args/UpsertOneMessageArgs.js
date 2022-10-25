"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneMessageArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageCreateInput_1 = require("../../../inputs/MessageCreateInput");
const MessageUpdateInput_1 = require("../../../inputs/MessageUpdateInput");
const MessageWhereUniqueInput_1 = require("../../../inputs/MessageWhereUniqueInput");
let UpsertOneMessageArgs = class UpsertOneMessageArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageWhereUniqueInput_1.MessageWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageWhereUniqueInput_1.MessageWhereUniqueInput)
], UpsertOneMessageArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageCreateInput_1.MessageCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageCreateInput_1.MessageCreateInput)
], UpsertOneMessageArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageUpdateInput_1.MessageUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageUpdateInput_1.MessageUpdateInput)
], UpsertOneMessageArgs.prototype, "update", void 0);
UpsertOneMessageArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneMessageArgs);
exports.UpsertOneMessageArgs = UpsertOneMessageArgs;
