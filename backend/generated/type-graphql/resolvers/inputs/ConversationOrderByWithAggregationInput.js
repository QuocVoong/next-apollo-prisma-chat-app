"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCountOrderByAggregateInput_1 = require("../inputs/ConversationCountOrderByAggregateInput");
const ConversationMaxOrderByAggregateInput_1 = require("../inputs/ConversationMaxOrderByAggregateInput");
const ConversationMinOrderByAggregateInput_1 = require("../inputs/ConversationMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ConversationOrderByWithAggregationInput = class ConversationOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationOrderByWithAggregationInput.prototype, "secondaryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationOrderByWithAggregationInput.prototype, "creatorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationOrderByWithAggregationInput.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCountOrderByAggregateInput_1.ConversationCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationCountOrderByAggregateInput_1.ConversationCountOrderByAggregateInput)
], ConversationOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationMaxOrderByAggregateInput_1.ConversationMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationMaxOrderByAggregateInput_1.ConversationMaxOrderByAggregateInput)
], ConversationOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationMinOrderByAggregateInput_1.ConversationMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationMinOrderByAggregateInput_1.ConversationMinOrderByAggregateInput)
], ConversationOrderByWithAggregationInput.prototype, "_min", void 0);
ConversationOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationOrderByWithAggregationInput", {
        isAbstract: true
    })
], ConversationOrderByWithAggregationInput);
exports.ConversationOrderByWithAggregationInput = ConversationOrderByWithAggregationInput;
