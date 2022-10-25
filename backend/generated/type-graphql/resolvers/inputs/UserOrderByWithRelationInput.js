"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationOrderByRelationAggregateInput_1 = require("../inputs/ConversationOrderByRelationAggregateInput");
const MessageOrderByRelationAggregateInput_1 = require("../inputs/MessageOrderByRelationAggregateInput");
const PaticipantsOrderByRelationAggregateInput_1 = require("../inputs/PaticipantsOrderByRelationAggregateInput");
const UserContactOrderByRelationAggregateInput_1 = require("../inputs/UserContactOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "isAdmin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageOrderByRelationAggregateInput_1.MessageOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageOrderByRelationAggregateInput_1.MessageOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "Message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsOrderByRelationAggregateInput_1.PaticipantsOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsOrderByRelationAggregateInput_1.PaticipantsOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "Paticipants", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactOrderByRelationAggregateInput_1.UserContactOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactOrderByRelationAggregateInput_1.UserContactOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "ownerContact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactOrderByRelationAggregateInput_1.UserContactOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactOrderByRelationAggregateInput_1.UserContactOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "contactUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationOrderByRelationAggregateInput_1.ConversationOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationOrderByRelationAggregateInput_1.ConversationOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "Conversation", void 0);
UserOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserOrderByWithRelationInput", {
        isAbstract: true
    })
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
