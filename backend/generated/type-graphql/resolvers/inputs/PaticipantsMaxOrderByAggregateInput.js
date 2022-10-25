"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PaticipantsMaxOrderByAggregateInput = class PaticipantsMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsMaxOrderByAggregateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsMaxOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsMaxOrderByAggregateInput.prototype, "conversationId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsMaxOrderByAggregateInput.prototype, "joinedDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsMaxOrderByAggregateInput.prototype, "leftDate", void 0);
PaticipantsMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsMaxOrderByAggregateInput", {
        isAbstract: true
    })
], PaticipantsMaxOrderByAggregateInput);
exports.PaticipantsMaxOrderByAggregateInput = PaticipantsMaxOrderByAggregateInput;
