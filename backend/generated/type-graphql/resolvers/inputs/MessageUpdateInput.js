"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const ConversationUpdateOneRequiredWithoutMessageNestedInput_1 = require("../inputs/ConversationUpdateOneRequiredWithoutMessageNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutMessageNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutMessageNestedInput");
let MessageUpdateInput = class MessageUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MessageUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutMessageNestedInput_1.UserUpdateOneRequiredWithoutMessageNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutMessageNestedInput_1.UserUpdateOneRequiredWithoutMessageNestedInput)
], MessageUpdateInput.prototype, "fromUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationUpdateOneRequiredWithoutMessageNestedInput_1.ConversationUpdateOneRequiredWithoutMessageNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationUpdateOneRequiredWithoutMessageNestedInput_1.ConversationUpdateOneRequiredWithoutMessageNestedInput)
], MessageUpdateInput.prototype, "conversation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MessageUpdateInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], MessageUpdateInput.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MessageUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MessageUpdateInput.prototype, "updatedAt", void 0);
MessageUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageUpdateInput", {
        isAbstract: true
    })
], MessageUpdateInput);
exports.MessageUpdateInput = MessageUpdateInput;
