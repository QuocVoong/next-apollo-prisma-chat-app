"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMessage = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageCountAggregate_1 = require("../outputs/MessageCountAggregate");
const MessageMaxAggregate_1 = require("../outputs/MessageMaxAggregate");
const MessageMinAggregate_1 = require("../outputs/MessageMinAggregate");
let AggregateMessage = class AggregateMessage {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageCountAggregate_1.MessageCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageCountAggregate_1.MessageCountAggregate)
], AggregateMessage.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageMinAggregate_1.MessageMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageMinAggregate_1.MessageMinAggregate)
], AggregateMessage.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageMaxAggregate_1.MessageMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageMaxAggregate_1.MessageMaxAggregate)
], AggregateMessage.prototype, "_max", void 0);
AggregateMessage = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateMessage", {
        isAbstract: true
    })
], AggregateMessage);
exports.AggregateMessage = AggregateMessage;
