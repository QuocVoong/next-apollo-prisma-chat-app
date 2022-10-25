"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutContactUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateNestedManyWithoutCreatorInput_1 = require("../inputs/ConversationCreateNestedManyWithoutCreatorInput");
const MessageCreateNestedManyWithoutFromUserInput_1 = require("../inputs/MessageCreateNestedManyWithoutFromUserInput");
const PaticipantsCreateNestedManyWithoutUserInput_1 = require("../inputs/PaticipantsCreateNestedManyWithoutUserInput");
const UserContactCreateNestedManyWithoutOwnerContactInput_1 = require("../inputs/UserContactCreateNestedManyWithoutOwnerContactInput");
let UserCreateWithoutContactUserInput = class UserCreateWithoutContactUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutContactUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutContactUserInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutContactUserInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutContactUserInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutContactUserInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutContactUserInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutContactUserInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutContactUserInput.prototype, "isAdmin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutContactUserInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutContactUserInput.prototype, "count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutFromUserInput_1.MessageCreateNestedManyWithoutFromUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageCreateNestedManyWithoutFromUserInput_1.MessageCreateNestedManyWithoutFromUserInput)
], UserCreateWithoutContactUserInput.prototype, "Message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsCreateNestedManyWithoutUserInput_1.PaticipantsCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsCreateNestedManyWithoutUserInput_1.PaticipantsCreateNestedManyWithoutUserInput)
], UserCreateWithoutContactUserInput.prototype, "Paticipants", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactCreateNestedManyWithoutOwnerContactInput_1.UserContactCreateNestedManyWithoutOwnerContactInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactCreateNestedManyWithoutOwnerContactInput_1.UserContactCreateNestedManyWithoutOwnerContactInput)
], UserCreateWithoutContactUserInput.prototype, "ownerContact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateNestedManyWithoutCreatorInput_1.ConversationCreateNestedManyWithoutCreatorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationCreateNestedManyWithoutCreatorInput_1.ConversationCreateNestedManyWithoutCreatorInput)
], UserCreateWithoutContactUserInput.prototype, "Conversation", void 0);
UserCreateWithoutContactUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutContactUserInput", {
        isAbstract: true
    })
], UserCreateWithoutContactUserInput);
exports.UserCreateWithoutContactUserInput = UserCreateWithoutContactUserInput;
