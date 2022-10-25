"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutPaticipantsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutPaticipantsInput_1 = require("../inputs/UserCreateWithoutPaticipantsInput");
const UserUpdateWithoutPaticipantsInput_1 = require("../inputs/UserUpdateWithoutPaticipantsInput");
let UserUpsertWithoutPaticipantsInput = class UserUpsertWithoutPaticipantsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutPaticipantsInput_1.UserUpdateWithoutPaticipantsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutPaticipantsInput_1.UserUpdateWithoutPaticipantsInput)
], UserUpsertWithoutPaticipantsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPaticipantsInput_1.UserCreateWithoutPaticipantsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPaticipantsInput_1.UserCreateWithoutPaticipantsInput)
], UserUpsertWithoutPaticipantsInput.prototype, "create", void 0);
UserUpsertWithoutPaticipantsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutPaticipantsInput", {
        isAbstract: true
    })
], UserUpsertWithoutPaticipantsInput);
exports.UserUpsertWithoutPaticipantsInput = UserUpsertWithoutPaticipantsInput;
