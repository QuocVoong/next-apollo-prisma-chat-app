"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsUpdateWithoutConversationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutPaticipantsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutPaticipantsNestedInput");
let PaticipantsUpdateWithoutConversationInput = class PaticipantsUpdateWithoutConversationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PaticipantsUpdateWithoutConversationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PaticipantsUpdateWithoutConversationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPaticipantsNestedInput_1.UserUpdateOneRequiredWithoutPaticipantsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutPaticipantsNestedInput_1.UserUpdateOneRequiredWithoutPaticipantsNestedInput)
], PaticipantsUpdateWithoutConversationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PaticipantsUpdateWithoutConversationInput.prototype, "joinedDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PaticipantsUpdateWithoutConversationInput.prototype, "leftDate", void 0);
PaticipantsUpdateWithoutConversationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsUpdateWithoutConversationInput", {
        isAbstract: true
    })
], PaticipantsUpdateWithoutConversationInput);
exports.PaticipantsUpdateWithoutConversationInput = PaticipantsUpdateWithoutConversationInput;
