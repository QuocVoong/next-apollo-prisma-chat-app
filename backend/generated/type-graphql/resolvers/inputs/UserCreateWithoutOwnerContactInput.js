"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutOwnerContactInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateNestedManyWithoutCreatorInput_1 = require("../inputs/ConversationCreateNestedManyWithoutCreatorInput");
const MessageCreateNestedManyWithoutFromUserInput_1 = require("../inputs/MessageCreateNestedManyWithoutFromUserInput");
const PaticipantsCreateNestedManyWithoutUserInput_1 = require("../inputs/PaticipantsCreateNestedManyWithoutUserInput");
const UserContactCreateNestedManyWithoutContactUserInput_1 = require("../inputs/UserContactCreateNestedManyWithoutContactUserInput");
let UserCreateWithoutOwnerContactInput = class UserCreateWithoutOwnerContactInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutOwnerContactInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutOwnerContactInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutOwnerContactInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutOwnerContactInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutOwnerContactInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutOwnerContactInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutOwnerContactInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutOwnerContactInput.prototype, "isAdmin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutOwnerContactInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutOwnerContactInput.prototype, "count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutFromUserInput_1.MessageCreateNestedManyWithoutFromUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageCreateNestedManyWithoutFromUserInput_1.MessageCreateNestedManyWithoutFromUserInput)
], UserCreateWithoutOwnerContactInput.prototype, "Message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsCreateNestedManyWithoutUserInput_1.PaticipantsCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsCreateNestedManyWithoutUserInput_1.PaticipantsCreateNestedManyWithoutUserInput)
], UserCreateWithoutOwnerContactInput.prototype, "Paticipants", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactCreateNestedManyWithoutContactUserInput_1.UserContactCreateNestedManyWithoutContactUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactCreateNestedManyWithoutContactUserInput_1.UserContactCreateNestedManyWithoutContactUserInput)
], UserCreateWithoutOwnerContactInput.prototype, "contactUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateNestedManyWithoutCreatorInput_1.ConversationCreateNestedManyWithoutCreatorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationCreateNestedManyWithoutCreatorInput_1.ConversationCreateNestedManyWithoutCreatorInput)
], UserCreateWithoutOwnerContactInput.prototype, "Conversation", void 0);
UserCreateWithoutOwnerContactInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutOwnerContactInput", {
        isAbstract: true
    })
], UserCreateWithoutOwnerContactInput);
exports.UserCreateWithoutOwnerContactInput = UserCreateWithoutOwnerContactInput;
