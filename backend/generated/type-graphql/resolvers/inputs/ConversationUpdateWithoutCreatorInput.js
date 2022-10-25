"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationUpdateWithoutCreatorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const MessageUpdateManyWithoutConversationNestedInput_1 = require("../inputs/MessageUpdateManyWithoutConversationNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PaticipantsUpdateManyWithoutConversationNestedInput_1 = require("../inputs/PaticipantsUpdateManyWithoutConversationNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ConversationUpdateWithoutCreatorInput = class ConversationUpdateWithoutCreatorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ConversationUpdateWithoutCreatorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ConversationUpdateWithoutCreatorInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ConversationUpdateWithoutCreatorInput.prototype, "secondaryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], ConversationUpdateWithoutCreatorInput.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ConversationUpdateWithoutCreatorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ConversationUpdateWithoutCreatorInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageUpdateManyWithoutConversationNestedInput_1.MessageUpdateManyWithoutConversationNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageUpdateManyWithoutConversationNestedInput_1.MessageUpdateManyWithoutConversationNestedInput)
], ConversationUpdateWithoutCreatorInput.prototype, "Message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsUpdateManyWithoutConversationNestedInput_1.PaticipantsUpdateManyWithoutConversationNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsUpdateManyWithoutConversationNestedInput_1.PaticipantsUpdateManyWithoutConversationNestedInput)
], ConversationUpdateWithoutCreatorInput.prototype, "Paticipants", void 0);
ConversationUpdateWithoutCreatorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationUpdateWithoutCreatorInput", {
        isAbstract: true
    })
], ConversationUpdateWithoutCreatorInput);
exports.ConversationUpdateWithoutCreatorInput = ConversationUpdateWithoutCreatorInput;
