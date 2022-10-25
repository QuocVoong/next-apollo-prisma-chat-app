"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutConversationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageCreateNestedManyWithoutFromUserInput_1 = require("../inputs/MessageCreateNestedManyWithoutFromUserInput");
const PaticipantsCreateNestedManyWithoutUserInput_1 = require("../inputs/PaticipantsCreateNestedManyWithoutUserInput");
const UserContactCreateNestedManyWithoutContactUserInput_1 = require("../inputs/UserContactCreateNestedManyWithoutContactUserInput");
const UserContactCreateNestedManyWithoutOwnerContactInput_1 = require("../inputs/UserContactCreateNestedManyWithoutOwnerContactInput");
let UserCreateWithoutConversationInput = class UserCreateWithoutConversationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutConversationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutConversationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutConversationInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutConversationInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutConversationInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutConversationInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutConversationInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutConversationInput.prototype, "isAdmin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutConversationInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserCreateWithoutConversationInput.prototype, "count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutFromUserInput_1.MessageCreateNestedManyWithoutFromUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageCreateNestedManyWithoutFromUserInput_1.MessageCreateNestedManyWithoutFromUserInput)
], UserCreateWithoutConversationInput.prototype, "Message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsCreateNestedManyWithoutUserInput_1.PaticipantsCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsCreateNestedManyWithoutUserInput_1.PaticipantsCreateNestedManyWithoutUserInput)
], UserCreateWithoutConversationInput.prototype, "Paticipants", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactCreateNestedManyWithoutOwnerContactInput_1.UserContactCreateNestedManyWithoutOwnerContactInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactCreateNestedManyWithoutOwnerContactInput_1.UserContactCreateNestedManyWithoutOwnerContactInput)
], UserCreateWithoutConversationInput.prototype, "ownerContact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactCreateNestedManyWithoutContactUserInput_1.UserContactCreateNestedManyWithoutContactUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactCreateNestedManyWithoutContactUserInput_1.UserContactCreateNestedManyWithoutContactUserInput)
], UserCreateWithoutConversationInput.prototype, "contactUser", void 0);
UserCreateWithoutConversationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutConversationInput", {
        isAbstract: true
    })
], UserCreateWithoutConversationInput);
exports.UserCreateWithoutConversationInput = UserCreateWithoutConversationInput;
