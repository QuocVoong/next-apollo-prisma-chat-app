"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageCreateNestedManyWithoutConversationInput_1 = require("../inputs/MessageCreateNestedManyWithoutConversationInput");
const PaticipantsCreateNestedManyWithoutConversationInput_1 = require("../inputs/PaticipantsCreateNestedManyWithoutConversationInput");
const UserCreateNestedOneWithoutConversationInput_1 = require("../inputs/UserCreateNestedOneWithoutConversationInput");
let ConversationCreateInput = class ConversationCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationCreateInput.prototype, "secondaryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutConversationInput_1.UserCreateNestedOneWithoutConversationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutConversationInput_1.UserCreateNestedOneWithoutConversationInput)
], ConversationCreateInput.prototype, "creator", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ConversationCreateInput.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ConversationCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ConversationCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutConversationInput_1.MessageCreateNestedManyWithoutConversationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageCreateNestedManyWithoutConversationInput_1.MessageCreateNestedManyWithoutConversationInput)
], ConversationCreateInput.prototype, "Message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsCreateNestedManyWithoutConversationInput_1.PaticipantsCreateNestedManyWithoutConversationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsCreateNestedManyWithoutConversationInput_1.PaticipantsCreateNestedManyWithoutConversationInput)
], ConversationCreateInput.prototype, "Paticipants", void 0);
ConversationCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationCreateInput", {
        isAbstract: true
    })
], ConversationCreateInput);
exports.ConversationCreateInput = ConversationCreateInput;
