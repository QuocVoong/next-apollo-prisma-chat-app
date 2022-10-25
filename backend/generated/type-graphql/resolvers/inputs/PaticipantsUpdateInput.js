"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationUpdateOneRequiredWithoutPaticipantsNestedInput_1 = require("../inputs/ConversationUpdateOneRequiredWithoutPaticipantsNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutPaticipantsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutPaticipantsNestedInput");
let PaticipantsUpdateInput = class PaticipantsUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PaticipantsUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PaticipantsUpdateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPaticipantsNestedInput_1.UserUpdateOneRequiredWithoutPaticipantsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutPaticipantsNestedInput_1.UserUpdateOneRequiredWithoutPaticipantsNestedInput)
], PaticipantsUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationUpdateOneRequiredWithoutPaticipantsNestedInput_1.ConversationUpdateOneRequiredWithoutPaticipantsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationUpdateOneRequiredWithoutPaticipantsNestedInput_1.ConversationUpdateOneRequiredWithoutPaticipantsNestedInput)
], PaticipantsUpdateInput.prototype, "conversation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PaticipantsUpdateInput.prototype, "joinedDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PaticipantsUpdateInput.prototype, "leftDate", void 0);
PaticipantsUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsUpdateInput", {
        isAbstract: true
    })
], PaticipantsUpdateInput);
exports.PaticipantsUpdateInput = PaticipantsUpdateInput;
