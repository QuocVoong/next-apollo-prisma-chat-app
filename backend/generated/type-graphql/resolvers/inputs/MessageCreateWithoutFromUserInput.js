"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCreateWithoutFromUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateNestedOneWithoutMessageInput_1 = require("../inputs/ConversationCreateNestedOneWithoutMessageInput");
let MessageCreateWithoutFromUserInput = class MessageCreateWithoutFromUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageCreateWithoutFromUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateNestedOneWithoutMessageInput_1.ConversationCreateNestedOneWithoutMessageInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationCreateNestedOneWithoutMessageInput_1.ConversationCreateNestedOneWithoutMessageInput)
], MessageCreateWithoutFromUserInput.prototype, "conversation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MessageCreateWithoutFromUserInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MessageCreateWithoutFromUserInput.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MessageCreateWithoutFromUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MessageCreateWithoutFromUserInput.prototype, "updatedAt", void 0);
MessageCreateWithoutFromUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageCreateWithoutFromUserInput", {
        isAbstract: true
    })
], MessageCreateWithoutFromUserInput);
exports.MessageCreateWithoutFromUserInput = MessageCreateWithoutFromUserInput;
