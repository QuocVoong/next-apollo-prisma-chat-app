"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageOrderByRelationAggregateInput_1 = require("../inputs/MessageOrderByRelationAggregateInput");
const PaticipantsOrderByRelationAggregateInput_1 = require("../inputs/PaticipantsOrderByRelationAggregateInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ConversationOrderByWithRelationInput = class ConversationOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationOrderByWithRelationInput.prototype, "secondaryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], ConversationOrderByWithRelationInput.prototype, "creator", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationOrderByWithRelationInput.prototype, "creatorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationOrderByWithRelationInput.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageOrderByRelationAggregateInput_1.MessageOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageOrderByRelationAggregateInput_1.MessageOrderByRelationAggregateInput)
], ConversationOrderByWithRelationInput.prototype, "Message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsOrderByRelationAggregateInput_1.PaticipantsOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsOrderByRelationAggregateInput_1.PaticipantsOrderByRelationAggregateInput)
], ConversationOrderByWithRelationInput.prototype, "Paticipants", void 0);
ConversationOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationOrderByWithRelationInput", {
        isAbstract: true
    })
], ConversationOrderByWithRelationInput);
exports.ConversationOrderByWithRelationInput = ConversationOrderByWithRelationInput;
