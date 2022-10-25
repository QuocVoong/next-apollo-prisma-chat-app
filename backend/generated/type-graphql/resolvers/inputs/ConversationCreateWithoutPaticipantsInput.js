"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationCreateWithoutPaticipantsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageCreateNestedManyWithoutConversationInput_1 = require("../inputs/MessageCreateNestedManyWithoutConversationInput");
const UserCreateNestedOneWithoutConversationInput_1 = require("../inputs/UserCreateNestedOneWithoutConversationInput");
let ConversationCreateWithoutPaticipantsInput = class ConversationCreateWithoutPaticipantsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationCreateWithoutPaticipantsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationCreateWithoutPaticipantsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationCreateWithoutPaticipantsInput.prototype, "secondaryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutConversationInput_1.UserCreateNestedOneWithoutConversationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutConversationInput_1.UserCreateNestedOneWithoutConversationInput)
], ConversationCreateWithoutPaticipantsInput.prototype, "creator", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ConversationCreateWithoutPaticipantsInput.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ConversationCreateWithoutPaticipantsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ConversationCreateWithoutPaticipantsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutConversationInput_1.MessageCreateNestedManyWithoutConversationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageCreateNestedManyWithoutConversationInput_1.MessageCreateNestedManyWithoutConversationInput)
], ConversationCreateWithoutPaticipantsInput.prototype, "Message", void 0);
ConversationCreateWithoutPaticipantsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationCreateWithoutPaticipantsInput", {
        isAbstract: true
    })
], ConversationCreateWithoutPaticipantsInput);
exports.ConversationCreateWithoutPaticipantsInput = ConversationCreateWithoutPaticipantsInput;
