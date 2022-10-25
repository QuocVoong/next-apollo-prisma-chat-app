"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationCreateWithoutMessageInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsCreateNestedManyWithoutConversationInput_1 = require("../inputs/PaticipantsCreateNestedManyWithoutConversationInput");
const UserCreateNestedOneWithoutConversationInput_1 = require("../inputs/UserCreateNestedOneWithoutConversationInput");
let ConversationCreateWithoutMessageInput = class ConversationCreateWithoutMessageInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationCreateWithoutMessageInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationCreateWithoutMessageInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationCreateWithoutMessageInput.prototype, "secondaryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutConversationInput_1.UserCreateNestedOneWithoutConversationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutConversationInput_1.UserCreateNestedOneWithoutConversationInput)
], ConversationCreateWithoutMessageInput.prototype, "creator", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ConversationCreateWithoutMessageInput.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ConversationCreateWithoutMessageInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ConversationCreateWithoutMessageInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsCreateNestedManyWithoutConversationInput_1.PaticipantsCreateNestedManyWithoutConversationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsCreateNestedManyWithoutConversationInput_1.PaticipantsCreateNestedManyWithoutConversationInput)
], ConversationCreateWithoutMessageInput.prototype, "Paticipants", void 0);
ConversationCreateWithoutMessageInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationCreateWithoutMessageInput", {
        isAbstract: true
    })
], ConversationCreateWithoutMessageInput);
exports.ConversationCreateWithoutMessageInput = ConversationCreateWithoutMessageInput;
