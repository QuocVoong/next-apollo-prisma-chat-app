"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutContactUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutContactUserInput_1 = require("../inputs/UserCreateOrConnectWithoutContactUserInput");
const UserCreateWithoutContactUserInput_1 = require("../inputs/UserCreateWithoutContactUserInput");
const UserUpdateWithoutContactUserInput_1 = require("../inputs/UserUpdateWithoutContactUserInput");
const UserUpsertWithoutContactUserInput_1 = require("../inputs/UserUpsertWithoutContactUserInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutContactUserNestedInput = class UserUpdateOneRequiredWithoutContactUserNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutContactUserInput_1.UserCreateWithoutContactUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutContactUserInput_1.UserCreateWithoutContactUserInput)
], UserUpdateOneRequiredWithoutContactUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutContactUserInput_1.UserCreateOrConnectWithoutContactUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutContactUserInput_1.UserCreateOrConnectWithoutContactUserInput)
], UserUpdateOneRequiredWithoutContactUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutContactUserInput_1.UserUpsertWithoutContactUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutContactUserInput_1.UserUpsertWithoutContactUserInput)
], UserUpdateOneRequiredWithoutContactUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutContactUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutContactUserInput_1.UserUpdateWithoutContactUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutContactUserInput_1.UserUpdateWithoutContactUserInput)
], UserUpdateOneRequiredWithoutContactUserNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutContactUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutContactUserNestedInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutContactUserNestedInput);
exports.UserUpdateOneRequiredWithoutContactUserNestedInput = UserUpdateOneRequiredWithoutContactUserNestedInput;
