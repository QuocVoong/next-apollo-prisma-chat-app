"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutMessageInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateNestedManyWithoutCreatorInput_1 = require("../inputs/ConversationCreateNestedManyWithoutCreatorInput");
const PaticipantsCreateNestedManyWithoutUserInput_1 = require("../inputs/PaticipantsCreateNestedManyWithoutUserInput");
const UserContactCreateNestedManyWithoutContactUserInput_1 = require("../inputs/UserContactCreateNestedManyWithoutContactUserInput");
const UserContactCreateNestedManyWithoutOwnerContactInput_1 = require("../inputs/UserContactCreateNestedManyWithoutOwnerContactInput");
let UserCreateWithoutMessageInput = class UserCreateWithoutMessageInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutMessageInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutMessageInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutMessageInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutMessageInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutMessageInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutMessageInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutMessageInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutMessageInput.prototype, "isAdmin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutMessageInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutMessageInput.prototype, "count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsCreateNestedManyWithoutUserInput_1.PaticipantsCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsCreateNestedManyWithoutUserInput_1.PaticipantsCreateNestedManyWithoutUserInput)
], UserCreateWithoutMessageInput.prototype, "Paticipants", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactCreateNestedManyWithoutOwnerContactInput_1.UserContactCreateNestedManyWithoutOwnerContactInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactCreateNestedManyWithoutOwnerContactInput_1.UserContactCreateNestedManyWithoutOwnerContactInput)
], UserCreateWithoutMessageInput.prototype, "ownerContact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactCreateNestedManyWithoutContactUserInput_1.UserContactCreateNestedManyWithoutContactUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactCreateNestedManyWithoutContactUserInput_1.UserContactCreateNestedManyWithoutContactUserInput)
], UserCreateWithoutMessageInput.prototype, "contactUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateNestedManyWithoutCreatorInput_1.ConversationCreateNestedManyWithoutCreatorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationCreateNestedManyWithoutCreatorInput_1.ConversationCreateNestedManyWithoutCreatorInput)
], UserCreateWithoutMessageInput.prototype, "Conversation", void 0);
UserCreateWithoutMessageInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutMessageInput", {
        isAbstract: true
    })
], UserCreateWithoutMessageInput);
exports.UserCreateWithoutMessageInput = UserCreateWithoutMessageInput;
