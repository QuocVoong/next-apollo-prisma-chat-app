"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMessageArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageOrderByWithAggregationInput_1 = require("../../../inputs/MessageOrderByWithAggregationInput");
const MessageScalarWhereWithAggregatesInput_1 = require("../../../inputs/MessageScalarWhereWithAggregatesInput");
const MessageWhereInput_1 = require("../../../inputs/MessageWhereInput");
const MessageScalarFieldEnum_1 = require("../../../../enums/MessageScalarFieldEnum");
let GroupByMessageArgs = class GroupByMessageArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageWhereInput_1.MessageWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageWhereInput_1.MessageWhereInput)
], GroupByMessageArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageOrderByWithAggregationInput_1.MessageOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMessageArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageScalarFieldEnum_1.MessageScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMessageArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageScalarWhereWithAggregatesInput_1.MessageScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageScalarWhereWithAggregatesInput_1.MessageScalarWhereWithAggregatesInput)
], GroupByMessageArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMessageArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMessageArgs.prototype, "skip", void 0);
GroupByMessageArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByMessageArgs);
exports.GroupByMessageArgs = GroupByMessageArgs;
