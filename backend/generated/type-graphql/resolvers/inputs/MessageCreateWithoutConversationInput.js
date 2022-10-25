"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCreateWithoutConversationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutMessageInput_1 = require("../inputs/UserCreateNestedOneWithoutMessageInput");
let MessageCreateWithoutConversationInput = class MessageCreateWithoutConversationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageCreateWithoutConversationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMessageInput_1.UserCreateNestedOneWithoutMessageInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutMessageInput_1.UserCreateNestedOneWithoutMessageInput)
], MessageCreateWithoutConversationInput.prototype, "fromUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MessageCreateWithoutConversationInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MessageCreateWithoutConversationInput.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MessageCreateWithoutConversationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MessageCreateWithoutConversationInput.prototype, "updatedAt", void 0);
MessageCreateWithoutConversationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageCreateWithoutConversationInput", {
        isAbstract: true
    })
], MessageCreateWithoutConversationInput);
exports.MessageCreateWithoutConversationInput = MessageCreateWithoutConversationInput;
