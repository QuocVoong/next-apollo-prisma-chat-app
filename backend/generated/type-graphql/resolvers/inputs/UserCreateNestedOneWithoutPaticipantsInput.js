"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutPaticipantsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutPaticipantsInput_1 = require("../inputs/UserCreateOrConnectWithoutPaticipantsInput");
const UserCreateWithoutPaticipantsInput_1 = require("../inputs/UserCreateWithoutPaticipantsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutPaticipantsInput = class UserCreateNestedOneWithoutPaticipantsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPaticipantsInput_1.UserCreateWithoutPaticipantsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPaticipantsInput_1.UserCreateWithoutPaticipantsInput)
], UserCreateNestedOneWithoutPaticipantsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPaticipantsInput_1.UserCreateOrConnectWithoutPaticipantsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutPaticipantsInput_1.UserCreateOrConnectWithoutPaticipantsInput)
], UserCreateNestedOneWithoutPaticipantsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutPaticipantsInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutPaticipantsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutPaticipantsInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutPaticipantsInput);
exports.UserCreateNestedOneWithoutPaticipantsInput = UserCreateNestedOneWithoutPaticipantsInput;
