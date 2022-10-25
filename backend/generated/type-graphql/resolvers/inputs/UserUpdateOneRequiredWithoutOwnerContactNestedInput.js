"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutOwnerContactNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutOwnerContactInput_1 = require("../inputs/UserCreateOrConnectWithoutOwnerContactInput");
const UserCreateWithoutOwnerContactInput_1 = require("../inputs/UserCreateWithoutOwnerContactInput");
const UserUpdateWithoutOwnerContactInput_1 = require("../inputs/UserUpdateWithoutOwnerContactInput");
const UserUpsertWithoutOwnerContactInput_1 = require("../inputs/UserUpsertWithoutOwnerContactInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutOwnerContactNestedInput = class UserUpdateOneRequiredWithoutOwnerContactNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutOwnerContactInput_1.UserCreateWithoutOwnerContactInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutOwnerContactInput_1.UserCreateWithoutOwnerContactInput)
], UserUpdateOneRequiredWithoutOwnerContactNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutOwnerContactInput_1.UserCreateOrConnectWithoutOwnerContactInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutOwnerContactInput_1.UserCreateOrConnectWithoutOwnerContactInput)
], UserUpdateOneRequiredWithoutOwnerContactNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutOwnerContactInput_1.UserUpsertWithoutOwnerContactInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutOwnerContactInput_1.UserUpsertWithoutOwnerContactInput)
], UserUpdateOneRequiredWithoutOwnerContactNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutOwnerContactNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutOwnerContactInput_1.UserUpdateWithoutOwnerContactInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutOwnerContactInput_1.UserUpdateWithoutOwnerContactInput)
], UserUpdateOneRequiredWithoutOwnerContactNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutOwnerContactNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutOwnerContactNestedInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutOwnerContactNestedInput);
exports.UserUpdateOneRequiredWithoutOwnerContactNestedInput = UserUpdateOneRequiredWithoutOwnerContactNestedInput;
