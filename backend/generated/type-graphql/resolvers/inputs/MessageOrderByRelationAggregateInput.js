"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MessageOrderByRelationAggregateInput = class MessageOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageOrderByRelationAggregateInput.prototype, "_count", void 0);
MessageOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageOrderByRelationAggregateInput", {
        isAbstract: true
    })
], MessageOrderByRelationAggregateInput);
exports.MessageOrderByRelationAggregateInput = MessageOrderByRelationAggregateInput;
