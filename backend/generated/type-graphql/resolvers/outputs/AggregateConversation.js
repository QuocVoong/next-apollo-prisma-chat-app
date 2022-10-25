"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateConversation = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCountAggregate_1 = require("../outputs/ConversationCountAggregate");
const ConversationMaxAggregate_1 = require("../outputs/ConversationMaxAggregate");
const ConversationMinAggregate_1 = require("../outputs/ConversationMinAggregate");
let AggregateConversation = class AggregateConversation {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCountAggregate_1.ConversationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationCountAggregate_1.ConversationCountAggregate)
], AggregateConversation.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationMinAggregate_1.ConversationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationMinAggregate_1.ConversationMinAggregate)
], AggregateConversation.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationMaxAggregate_1.ConversationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationMaxAggregate_1.ConversationMaxAggregate)
], AggregateConversation.prototype, "_max", void 0);
AggregateConversation = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateConversation", {
        isAbstract: true
    })
], AggregateConversation);
exports.AggregateConversation = AggregateConversation;
