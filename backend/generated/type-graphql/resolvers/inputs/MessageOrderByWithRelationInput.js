"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationOrderByWithRelationInput_1 = require("../inputs/ConversationOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MessageOrderByWithRelationInput = class MessageOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], MessageOrderByWithRelationInput.prototype, "fromUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageOrderByWithRelationInput.prototype, "from", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationOrderByWithRelationInput_1.ConversationOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationOrderByWithRelationInput_1.ConversationOrderByWithRelationInput)
], MessageOrderByWithRelationInput.prototype, "conversation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageOrderByWithRelationInput.prototype, "conversationId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageOrderByWithRelationInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageOrderByWithRelationInput.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageOrderByWithRelationInput.prototype, "updatedAt", void 0);
MessageOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageOrderByWithRelationInput", {
        isAbstract: true
    })
], MessageOrderByWithRelationInput);
exports.MessageOrderByWithRelationInput = MessageOrderByWithRelationInput;
