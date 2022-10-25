"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpdateWithoutFromUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const ConversationUpdateOneRequiredWithoutMessageNestedInput_1 = require("../inputs/ConversationUpdateOneRequiredWithoutMessageNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let MessageUpdateWithoutFromUserInput = class MessageUpdateWithoutFromUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MessageUpdateWithoutFromUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationUpdateOneRequiredWithoutMessageNestedInput_1.ConversationUpdateOneRequiredWithoutMessageNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationUpdateOneRequiredWithoutMessageNestedInput_1.ConversationUpdateOneRequiredWithoutMessageNestedInput)
], MessageUpdateWithoutFromUserInput.prototype, "conversation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MessageUpdateWithoutFromUserInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], MessageUpdateWithoutFromUserInput.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MessageUpdateWithoutFromUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MessageUpdateWithoutFromUserInput.prototype, "updatedAt", void 0);
MessageUpdateWithoutFromUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageUpdateWithoutFromUserInput", {
        isAbstract: true
    })
], MessageUpdateWithoutFromUserInput);
exports.MessageUpdateWithoutFromUserInput = MessageUpdateWithoutFromUserInput;
