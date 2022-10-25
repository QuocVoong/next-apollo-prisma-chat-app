"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutMessageInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const ConversationUpdateManyWithoutCreatorNestedInput_1 = require("../inputs/ConversationUpdateManyWithoutCreatorNestedInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PaticipantsUpdateManyWithoutUserNestedInput_1 = require("../inputs/PaticipantsUpdateManyWithoutUserNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserContactUpdateManyWithoutContactUserNestedInput_1 = require("../inputs/UserContactUpdateManyWithoutContactUserNestedInput");
const UserContactUpdateManyWithoutOwnerContactNestedInput_1 = require("../inputs/UserContactUpdateManyWithoutOwnerContactNestedInput");
let UserUpdateWithoutMessageInput = class UserUpdateWithoutMessageInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutMessageInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutMessageInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutMessageInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutMessageInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutMessageInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutMessageInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutMessageInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutMessageInput.prototype, "isAdmin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutMessageInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], UserUpdateWithoutMessageInput.prototype, "count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsUpdateManyWithoutUserNestedInput_1.PaticipantsUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsUpdateManyWithoutUserNestedInput_1.PaticipantsUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutMessageInput.prototype, "Paticipants", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactUpdateManyWithoutOwnerContactNestedInput_1.UserContactUpdateManyWithoutOwnerContactNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactUpdateManyWithoutOwnerContactNestedInput_1.UserContactUpdateManyWithoutOwnerContactNestedInput)
], UserUpdateWithoutMessageInput.prototype, "ownerContact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactUpdateManyWithoutContactUserNestedInput_1.UserContactUpdateManyWithoutContactUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactUpdateManyWithoutContactUserNestedInput_1.UserContactUpdateManyWithoutContactUserNestedInput)
], UserUpdateWithoutMessageInput.prototype, "contactUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationUpdateManyWithoutCreatorNestedInput_1.ConversationUpdateManyWithoutCreatorNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationUpdateManyWithoutCreatorNestedInput_1.ConversationUpdateManyWithoutCreatorNestedInput)
], UserUpdateWithoutMessageInput.prototype, "Conversation", void 0);
UserUpdateWithoutMessageInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutMessageInput", {
        isAbstract: true
    })
], UserUpdateWithoutMessageInput);
exports.UserUpdateWithoutMessageInput = UserUpdateWithoutMessageInput;
