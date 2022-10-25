"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsCountOrderByAggregateInput_1 = require("../inputs/PaticipantsCountOrderByAggregateInput");
const PaticipantsMaxOrderByAggregateInput_1 = require("../inputs/PaticipantsMaxOrderByAggregateInput");
const PaticipantsMinOrderByAggregateInput_1 = require("../inputs/PaticipantsMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PaticipantsOrderByWithAggregationInput = class PaticipantsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsOrderByWithAggregationInput.prototype, "conversationId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsOrderByWithAggregationInput.prototype, "joinedDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsOrderByWithAggregationInput.prototype, "leftDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsCountOrderByAggregateInput_1.PaticipantsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsCountOrderByAggregateInput_1.PaticipantsCountOrderByAggregateInput)
], PaticipantsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsMaxOrderByAggregateInput_1.PaticipantsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsMaxOrderByAggregateInput_1.PaticipantsMaxOrderByAggregateInput)
], PaticipantsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsMinOrderByAggregateInput_1.PaticipantsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsMinOrderByAggregateInput_1.PaticipantsMinOrderByAggregateInput)
], PaticipantsOrderByWithAggregationInput.prototype, "_min", void 0);
PaticipantsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsOrderByWithAggregationInput", {
        isAbstract: true
    })
], PaticipantsOrderByWithAggregationInput);
exports.PaticipantsOrderByWithAggregationInput = PaticipantsOrderByWithAggregationInput;
