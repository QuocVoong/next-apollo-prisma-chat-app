"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationOrderByWithRelationInput_1 = require("../inputs/ConversationOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PaticipantsOrderByWithRelationInput = class PaticipantsOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsOrderByWithRelationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], PaticipantsOrderByWithRelationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsOrderByWithRelationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationOrderByWithRelationInput_1.ConversationOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationOrderByWithRelationInput_1.ConversationOrderByWithRelationInput)
], PaticipantsOrderByWithRelationInput.prototype, "conversation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsOrderByWithRelationInput.prototype, "conversationId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsOrderByWithRelationInput.prototype, "joinedDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsOrderByWithRelationInput.prototype, "leftDate", void 0);
PaticipantsOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsOrderByWithRelationInput", {
        isAbstract: true
    })
], PaticipantsOrderByWithRelationInput);
exports.PaticipantsOrderByWithRelationInput = PaticipantsOrderByWithRelationInput;
