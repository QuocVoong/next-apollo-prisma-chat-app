"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutMessageInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutMessageInput_1 = require("../inputs/UserCreateWithoutMessageInput");
const UserUpdateWithoutMessageInput_1 = require("../inputs/UserUpdateWithoutMessageInput");
let UserUpsertWithoutMessageInput = class UserUpsertWithoutMessageInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutMessageInput_1.UserUpdateWithoutMessageInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutMessageInput_1.UserUpdateWithoutMessageInput)
], UserUpsertWithoutMessageInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutMessageInput_1.UserCreateWithoutMessageInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutMessageInput_1.UserCreateWithoutMessageInput)
], UserUpsertWithoutMessageInput.prototype, "create", void 0);
UserUpsertWithoutMessageInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutMessageInput", {
        isAbstract: true
    })
], UserUpsertWithoutMessageInput);
exports.UserUpsertWithoutMessageInput = UserUpsertWithoutMessageInput;
