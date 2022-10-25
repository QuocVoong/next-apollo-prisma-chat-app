"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageCountAggregate_1 = require("../outputs/MessageCountAggregate");
const MessageMaxAggregate_1 = require("../outputs/MessageMaxAggregate");
const MessageMinAggregate_1 = require("../outputs/MessageMinAggregate");
let MessageGroupBy = class MessageGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MessageGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MessageGroupBy.prototype, "from", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MessageGroupBy.prototype, "conversationId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MessageGroupBy.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], MessageGroupBy.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MessageGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MessageGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageCountAggregate_1.MessageCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageCountAggregate_1.MessageCountAggregate)
], MessageGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageMinAggregate_1.MessageMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageMinAggregate_1.MessageMinAggregate)
], MessageGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageMaxAggregate_1.MessageMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageMaxAggregate_1.MessageMaxAggregate)
], MessageGroupBy.prototype, "_max", void 0);
MessageGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MessageGroupBy", {
        isAbstract: true
    })
], MessageGroupBy);
exports.MessageGroupBy = MessageGroupBy;
