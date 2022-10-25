"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationUpdateOneRequiredWithoutPaticipantsNestedInput_1 = require("../inputs/ConversationUpdateOneRequiredWithoutPaticipantsNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let PaticipantsUpdateWithoutUserInput = class PaticipantsUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PaticipantsUpdateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PaticipantsUpdateWithoutUserInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationUpdateOneRequiredWithoutPaticipantsNestedInput_1.ConversationUpdateOneRequiredWithoutPaticipantsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationUpdateOneRequiredWithoutPaticipantsNestedInput_1.ConversationUpdateOneRequiredWithoutPaticipantsNestedInput)
], PaticipantsUpdateWithoutUserInput.prototype, "conversation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PaticipantsUpdateWithoutUserInput.prototype, "joinedDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PaticipantsUpdateWithoutUserInput.prototype, "leftDate", void 0);
PaticipantsUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsUpdateWithoutUserInput", {
        isAbstract: true
    })
], PaticipantsUpdateWithoutUserInput);
exports.PaticipantsUpdateWithoutUserInput = PaticipantsUpdateWithoutUserInput;
