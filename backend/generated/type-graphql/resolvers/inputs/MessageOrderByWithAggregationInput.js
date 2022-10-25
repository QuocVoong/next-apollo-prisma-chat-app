"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageCountOrderByAggregateInput_1 = require("../inputs/MessageCountOrderByAggregateInput");
const MessageMaxOrderByAggregateInput_1 = require("../inputs/MessageMaxOrderByAggregateInput");
const MessageMinOrderByAggregateInput_1 = require("../inputs/MessageMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MessageOrderByWithAggregationInput = class MessageOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageOrderByWithAggregationInput.prototype, "from", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageOrderByWithAggregationInput.prototype, "conversationId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageOrderByWithAggregationInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageOrderByWithAggregationInput.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageCountOrderByAggregateInput_1.MessageCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageCountOrderByAggregateInput_1.MessageCountOrderByAggregateInput)
], MessageOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageMaxOrderByAggregateInput_1.MessageMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageMaxOrderByAggregateInput_1.MessageMaxOrderByAggregateInput)
], MessageOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageMinOrderByAggregateInput_1.MessageMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageMinOrderByAggregateInput_1.MessageMinOrderByAggregateInput)
], MessageOrderByWithAggregationInput.prototype, "_min", void 0);
MessageOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageOrderByWithAggregationInput", {
        isAbstract: true
    })
], MessageOrderByWithAggregationInput);
exports.MessageOrderByWithAggregationInput = MessageOrderByWithAggregationInput;
