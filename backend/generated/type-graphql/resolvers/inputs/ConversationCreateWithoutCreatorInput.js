"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationCreateWithoutCreatorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageCreateNestedManyWithoutConversationInput_1 = require("../inputs/MessageCreateNestedManyWithoutConversationInput");
const PaticipantsCreateNestedManyWithoutConversationInput_1 = require("../inputs/PaticipantsCreateNestedManyWithoutConversationInput");
let ConversationCreateWithoutCreatorInput = class ConversationCreateWithoutCreatorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationCreateWithoutCreatorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationCreateWithoutCreatorInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationCreateWithoutCreatorInput.prototype, "secondaryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ConversationCreateWithoutCreatorInput.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ConversationCreateWithoutCreatorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ConversationCreateWithoutCreatorInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutConversationInput_1.MessageCreateNestedManyWithoutConversationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageCreateNestedManyWithoutConversationInput_1.MessageCreateNestedManyWithoutConversationInput)
], ConversationCreateWithoutCreatorInput.prototype, "Message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsCreateNestedManyWithoutConversationInput_1.PaticipantsCreateNestedManyWithoutConversationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsCreateNestedManyWithoutConversationInput_1.PaticipantsCreateNestedManyWithoutConversationInput)
], ConversationCreateWithoutCreatorInput.prototype, "Paticipants", void 0);
ConversationCreateWithoutCreatorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationCreateWithoutCreatorInput", {
        isAbstract: true
    })
], ConversationCreateWithoutCreatorInput);
exports.ConversationCreateWithoutCreatorInput = ConversationCreateWithoutCreatorInput;
