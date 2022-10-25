"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutPaticipantsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutPaticipantsInput_1 = require("../inputs/UserCreateOrConnectWithoutPaticipantsInput");
const UserCreateWithoutPaticipantsInput_1 = require("../inputs/UserCreateWithoutPaticipantsInput");
const UserUpdateWithoutPaticipantsInput_1 = require("../inputs/UserUpdateWithoutPaticipantsInput");
const UserUpsertWithoutPaticipantsInput_1 = require("../inputs/UserUpsertWithoutPaticipantsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutPaticipantsNestedInput = class UserUpdateOneRequiredWithoutPaticipantsNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPaticipantsInput_1.UserCreateWithoutPaticipantsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPaticipantsInput_1.UserCreateWithoutPaticipantsInput)
], UserUpdateOneRequiredWithoutPaticipantsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPaticipantsInput_1.UserCreateOrConnectWithoutPaticipantsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutPaticipantsInput_1.UserCreateOrConnectWithoutPaticipantsInput)
], UserUpdateOneRequiredWithoutPaticipantsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutPaticipantsInput_1.UserUpsertWithoutPaticipantsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutPaticipantsInput_1.UserUpsertWithoutPaticipantsInput)
], UserUpdateOneRequiredWithoutPaticipantsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutPaticipantsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutPaticipantsInput_1.UserUpdateWithoutPaticipantsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutPaticipantsInput_1.UserUpdateWithoutPaticipantsInput)
], UserUpdateOneRequiredWithoutPaticipantsNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutPaticipantsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutPaticipantsNestedInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutPaticipantsNestedInput);
exports.UserUpdateOneRequiredWithoutPaticipantsNestedInput = UserUpdateOneRequiredWithoutPaticipantsNestedInput;
