"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByConversationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationOrderByWithAggregationInput_1 = require("../../../inputs/ConversationOrderByWithAggregationInput");
const ConversationScalarWhereWithAggregatesInput_1 = require("../../../inputs/ConversationScalarWhereWithAggregatesInput");
const ConversationWhereInput_1 = require("../../../inputs/ConversationWhereInput");
const ConversationScalarFieldEnum_1 = require("../../../../enums/ConversationScalarFieldEnum");
let GroupByConversationArgs = class GroupByConversationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereInput_1.ConversationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationWhereInput_1.ConversationWhereInput)
], GroupByConversationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationOrderByWithAggregationInput_1.ConversationOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByConversationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationScalarFieldEnum_1.ConversationScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByConversationArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationScalarWhereWithAggregatesInput_1.ConversationScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationScalarWhereWithAggregatesInput_1.ConversationScalarWhereWithAggregatesInput)
], GroupByConversationArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByConversationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByConversationArgs.prototype, "skip", void 0);
GroupByConversationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByConversationArgs);
exports.GroupByConversationArgs = GroupByConversationArgs;
