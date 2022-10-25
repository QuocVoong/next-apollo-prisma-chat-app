"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutPaticipantsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateNestedManyWithoutCreatorInput_1 = require("../inputs/ConversationCreateNestedManyWithoutCreatorInput");
const MessageCreateNestedManyWithoutFromUserInput_1 = require("../inputs/MessageCreateNestedManyWithoutFromUserInput");
const UserContactCreateNestedManyWithoutContactUserInput_1 = require("../inputs/UserContactCreateNestedManyWithoutContactUserInput");
const UserContactCreateNestedManyWithoutOwnerContactInput_1 = require("../inputs/UserContactCreateNestedManyWithoutOwnerContactInput");
let UserCreateWithoutPaticipantsInput = class UserCreateWithoutPaticipantsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutPaticipantsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutPaticipantsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutPaticipantsInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutPaticipantsInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutPaticipantsInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutPaticipantsInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutPaticipantsInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutPaticipantsInput.prototype, "isAdmin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutPaticipantsInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutPaticipantsInput.prototype, "count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutFromUserInput_1.MessageCreateNestedManyWithoutFromUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageCreateNestedManyWithoutFromUserInput_1.MessageCreateNestedManyWithoutFromUserInput)
], UserCreateWithoutPaticipantsInput.prototype, "Message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactCreateNestedManyWithoutOwnerContactInput_1.UserContactCreateNestedManyWithoutOwnerContactInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactCreateNestedManyWithoutOwnerContactInput_1.UserContactCreateNestedManyWithoutOwnerContactInput)
], UserCreateWithoutPaticipantsInput.prototype, "ownerContact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactCreateNestedManyWithoutContactUserInput_1.UserContactCreateNestedManyWithoutContactUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactCreateNestedManyWithoutContactUserInput_1.UserContactCreateNestedManyWithoutContactUserInput)
], UserCreateWithoutPaticipantsInput.prototype, "contactUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateNestedManyWithoutCreatorInput_1.ConversationCreateNestedManyWithoutCreatorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationCreateNestedManyWithoutCreatorInput_1.ConversationCreateNestedManyWithoutCreatorInput)
], UserCreateWithoutPaticipantsInput.prototype, "Conversation", void 0);
UserCreateWithoutPaticipantsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutPaticipantsInput", {
        isAbstract: true
    })
], UserCreateWithoutPaticipantsInput);
exports.UserCreateWithoutPaticipantsInput = UserCreateWithoutPaticipantsInput;
