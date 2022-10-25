"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutOwnerContactInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutOwnerContactInput_1 = require("../inputs/UserCreateWithoutOwnerContactInput");
const UserUpdateWithoutOwnerContactInput_1 = require("../inputs/UserUpdateWithoutOwnerContactInput");
let UserUpsertWithoutOwnerContactInput = class UserUpsertWithoutOwnerContactInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutOwnerContactInput_1.UserUpdateWithoutOwnerContactInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutOwnerContactInput_1.UserUpdateWithoutOwnerContactInput)
], UserUpsertWithoutOwnerContactInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutOwnerContactInput_1.UserCreateWithoutOwnerContactInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutOwnerContactInput_1.UserCreateWithoutOwnerContactInput)
], UserUpsertWithoutOwnerContactInput.prototype, "create", void 0);
UserUpsertWithoutOwnerContactInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutOwnerContactInput", {
        isAbstract: true
    })
], UserUpsertWithoutOwnerContactInput);
exports.UserUpsertWithoutOwnerContactInput = UserUpsertWithoutOwnerContactInput;
