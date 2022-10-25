"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutMessageNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutMessageInput_1 = require("../inputs/UserCreateOrConnectWithoutMessageInput");
const UserCreateWithoutMessageInput_1 = require("../inputs/UserCreateWithoutMessageInput");
const UserUpdateWithoutMessageInput_1 = require("../inputs/UserUpdateWithoutMessageInput");
const UserUpsertWithoutMessageInput_1 = require("../inputs/UserUpsertWithoutMessageInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutMessageNestedInput = class UserUpdateOneRequiredWithoutMessageNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutMessageInput_1.UserCreateWithoutMessageInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutMessageInput_1.UserCreateWithoutMessageInput)
], UserUpdateOneRequiredWithoutMessageNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMessageInput_1.UserCreateOrConnectWithoutMessageInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutMessageInput_1.UserCreateOrConnectWithoutMessageInput)
], UserUpdateOneRequiredWithoutMessageNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutMessageInput_1.UserUpsertWithoutMessageInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutMessageInput_1.UserUpsertWithoutMessageInput)
], UserUpdateOneRequiredWithoutMessageNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutMessageNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutMessageInput_1.UserUpdateWithoutMessageInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutMessageInput_1.UserUpdateWithoutMessageInput)
], UserUpdateOneRequiredWithoutMessageNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutMessageNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutMessageNestedInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutMessageNestedInput);
exports.UserUpdateOneRequiredWithoutMessageNestedInput = UserUpdateOneRequiredWithoutMessageNestedInput;
