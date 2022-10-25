"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutConversationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutConversationInput_1 = require("../inputs/UserCreateWithoutConversationInput");
const UserUpdateWithoutConversationInput_1 = require("../inputs/UserUpdateWithoutConversationInput");
let UserUpsertWithoutConversationInput = class UserUpsertWithoutConversationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutConversationInput_1.UserUpdateWithoutConversationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutConversationInput_1.UserUpdateWithoutConversationInput)
], UserUpsertWithoutConversationInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutConversationInput_1.UserCreateWithoutConversationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutConversationInput_1.UserCreateWithoutConversationInput)
], UserUpsertWithoutConversationInput.prototype, "create", void 0);
UserUpsertWithoutConversationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutConversationInput", {
        isAbstract: true
    })
], UserUpsertWithoutConversationInput);
exports.UserUpsertWithoutConversationInput = UserUpsertWithoutConversationInput;
