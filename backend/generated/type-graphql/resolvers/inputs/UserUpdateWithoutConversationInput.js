"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutConversationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const MessageUpdateManyWithoutFromUserNestedInput_1 = require("../inputs/MessageUpdateManyWithoutFromUserNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PaticipantsUpdateManyWithoutUserNestedInput_1 = require("../inputs/PaticipantsUpdateManyWithoutUserNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserContactUpdateManyWithoutContactUserNestedInput_1 = require("../inputs/UserContactUpdateManyWithoutContactUserNestedInput");
const UserContactUpdateManyWithoutOwnerContactNestedInput_1 = require("../inputs/UserContactUpdateManyWithoutOwnerContactNestedInput");
let UserUpdateWithoutConversationInput = class UserUpdateWithoutConversationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutConversationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutConversationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutConversationInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutConversationInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutConversationInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutConversationInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutConversationInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutConversationInput.prototype, "isAdmin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutConversationInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], UserUpdateWithoutConversationInput.prototype, "count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageUpdateManyWithoutFromUserNestedInput_1.MessageUpdateManyWithoutFromUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageUpdateManyWithoutFromUserNestedInput_1.MessageUpdateManyWithoutFromUserNestedInput)
], UserUpdateWithoutConversationInput.prototype, "Message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsUpdateManyWithoutUserNestedInput_1.PaticipantsUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsUpdateManyWithoutUserNestedInput_1.PaticipantsUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutConversationInput.prototype, "Paticipants", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactUpdateManyWithoutOwnerContactNestedInput_1.UserContactUpdateManyWithoutOwnerContactNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactUpdateManyWithoutOwnerContactNestedInput_1.UserContactUpdateManyWithoutOwnerContactNestedInput)
], UserUpdateWithoutConversationInput.prototype, "ownerContact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactUpdateManyWithoutContactUserNestedInput_1.UserContactUpdateManyWithoutContactUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactUpdateManyWithoutContactUserNestedInput_1.UserContactUpdateManyWithoutContactUserNestedInput)
], UserUpdateWithoutConversationInput.prototype, "contactUser", void 0);
UserUpdateWithoutConversationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutConversationInput", {
        isAbstract: true
    })
], UserUpdateWithoutConversationInput);
exports.UserUpdateWithoutConversationInput = UserUpdateWithoutConversationInput;
