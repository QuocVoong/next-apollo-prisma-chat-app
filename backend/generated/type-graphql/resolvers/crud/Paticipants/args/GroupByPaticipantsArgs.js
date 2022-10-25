"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPaticipantsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsOrderByWithAggregationInput_1 = require("../../../inputs/PaticipantsOrderByWithAggregationInput");
const PaticipantsScalarWhereWithAggregatesInput_1 = require("../../../inputs/PaticipantsScalarWhereWithAggregatesInput");
const PaticipantsWhereInput_1 = require("../../../inputs/PaticipantsWhereInput");
const PaticipantsScalarFieldEnum_1 = require("../../../../enums/PaticipantsScalarFieldEnum");
let GroupByPaticipantsArgs = class GroupByPaticipantsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereInput_1.PaticipantsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereInput_1.PaticipantsWhereInput)
], GroupByPaticipantsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsOrderByWithAggregationInput_1.PaticipantsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPaticipantsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsScalarFieldEnum_1.PaticipantsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPaticipantsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsScalarWhereWithAggregatesInput_1.PaticipantsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsScalarWhereWithAggregatesInput_1.PaticipantsScalarWhereWithAggregatesInput)
], GroupByPaticipantsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPaticipantsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPaticipantsArgs.prototype, "skip", void 0);
GroupByPaticipantsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByPaticipantsArgs);
exports.GroupByPaticipantsArgs = GroupByPaticipantsArgs;
