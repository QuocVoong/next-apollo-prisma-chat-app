"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutPaticipantsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const ConversationUpdateManyWithoutCreatorNestedInput_1 = require("../inputs/ConversationUpdateManyWithoutCreatorNestedInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const MessageUpdateManyWithoutFromUserNestedInput_1 = require("../inputs/MessageUpdateManyWithoutFromUserNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserContactUpdateManyWithoutContactUserNestedInput_1 = require("../inputs/UserContactUpdateManyWithoutContactUserNestedInput");
const UserContactUpdateManyWithoutOwnerContactNestedInput_1 = require("../inputs/UserContactUpdateManyWithoutOwnerContactNestedInput");
let UserUpdateWithoutPaticipantsInput = class UserUpdateWithoutPaticipantsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutPaticipantsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutPaticipantsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutPaticipantsInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutPaticipantsInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutPaticipantsInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutPaticipantsInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutPaticipantsInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutPaticipantsInput.prototype, "isAdmin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutPaticipantsInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], UserUpdateWithoutPaticipantsInput.prototype, "count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageUpdateManyWithoutFromUserNestedInput_1.MessageUpdateManyWithoutFromUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageUpdateManyWithoutFromUserNestedInput_1.MessageUpdateManyWithoutFromUserNestedInput)
], UserUpdateWithoutPaticipantsInput.prototype, "Message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactUpdateManyWithoutOwnerContactNestedInput_1.UserContactUpdateManyWithoutOwnerContactNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactUpdateManyWithoutOwnerContactNestedInput_1.UserContactUpdateManyWithoutOwnerContactNestedInput)
], UserUpdateWithoutPaticipantsInput.prototype, "ownerContact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactUpdateManyWithoutContactUserNestedInput_1.UserContactUpdateManyWithoutContactUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactUpdateManyWithoutContactUserNestedInput_1.UserContactUpdateManyWithoutContactUserNestedInput)
], UserUpdateWithoutPaticipantsInput.prototype, "contactUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationUpdateManyWithoutCreatorNestedInput_1.ConversationUpdateManyWithoutCreatorNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationUpdateManyWithoutCreatorNestedInput_1.ConversationUpdateManyWithoutCreatorNestedInput)
], UserUpdateWithoutPaticipantsInput.prototype, "Conversation", void 0);
UserUpdateWithoutPaticipantsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutPaticipantsInput", {
        isAbstract: true
    })
], UserUpdateWithoutPaticipantsInput);
exports.UserUpdateWithoutPaticipantsInput = UserUpdateWithoutPaticipantsInput;
