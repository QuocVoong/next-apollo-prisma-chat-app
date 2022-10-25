"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutOwnerContactInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const ConversationUpdateManyWithoutCreatorNestedInput_1 = require("../inputs/ConversationUpdateManyWithoutCreatorNestedInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const MessageUpdateManyWithoutFromUserNestedInput_1 = require("../inputs/MessageUpdateManyWithoutFromUserNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PaticipantsUpdateManyWithoutUserNestedInput_1 = require("../inputs/PaticipantsUpdateManyWithoutUserNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserContactUpdateManyWithoutContactUserNestedInput_1 = require("../inputs/UserContactUpdateManyWithoutContactUserNestedInput");
let UserUpdateWithoutOwnerContactInput = class UserUpdateWithoutOwnerContactInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutOwnerContactInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutOwnerContactInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutOwnerContactInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutOwnerContactInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutOwnerContactInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutOwnerContactInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutOwnerContactInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutOwnerContactInput.prototype, "isAdmin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutOwnerContactInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], UserUpdateWithoutOwnerContactInput.prototype, "count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageUpdateManyWithoutFromUserNestedInput_1.MessageUpdateManyWithoutFromUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageUpdateManyWithoutFromUserNestedInput_1.MessageUpdateManyWithoutFromUserNestedInput)
], UserUpdateWithoutOwnerContactInput.prototype, "Message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsUpdateManyWithoutUserNestedInput_1.PaticipantsUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsUpdateManyWithoutUserNestedInput_1.PaticipantsUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutOwnerContactInput.prototype, "Paticipants", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactUpdateManyWithoutContactUserNestedInput_1.UserContactUpdateManyWithoutContactUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactUpdateManyWithoutContactUserNestedInput_1.UserContactUpdateManyWithoutContactUserNestedInput)
], UserUpdateWithoutOwnerContactInput.prototype, "contactUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationUpdateManyWithoutCreatorNestedInput_1.ConversationUpdateManyWithoutCreatorNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationUpdateManyWithoutCreatorNestedInput_1.ConversationUpdateManyWithoutCreatorNestedInput)
], UserUpdateWithoutOwnerContactInput.prototype, "Conversation", void 0);
UserUpdateWithoutOwnerContactInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutOwnerContactInput", {
        isAbstract: true
    })
], UserUpdateWithoutOwnerContactInput);
exports.UserUpdateWithoutOwnerContactInput = UserUpdateWithoutOwnerContactInput;
