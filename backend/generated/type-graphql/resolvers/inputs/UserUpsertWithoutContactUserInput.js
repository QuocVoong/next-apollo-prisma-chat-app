"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutContactUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutContactUserInput_1 = require("../inputs/UserCreateWithoutContactUserInput");
const UserUpdateWithoutContactUserInput_1 = require("../inputs/UserUpdateWithoutContactUserInput");
let UserUpsertWithoutContactUserInput = class UserUpsertWithoutContactUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutContactUserInput_1.UserUpdateWithoutContactUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutContactUserInput_1.UserUpdateWithoutContactUserInput)
], UserUpsertWithoutContactUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutContactUserInput_1.UserCreateWithoutContactUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutContactUserInput_1.UserCreateWithoutContactUserInput)
], UserUpsertWithoutContactUserInput.prototype, "create", void 0);
UserUpsertWithoutContactUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutContactUserInput", {
        isAbstract: true
    })
], UserUpsertWithoutContactUserInput);
exports.UserUpsertWithoutContactUserInput = UserUpsertWithoutContactUserInput;
