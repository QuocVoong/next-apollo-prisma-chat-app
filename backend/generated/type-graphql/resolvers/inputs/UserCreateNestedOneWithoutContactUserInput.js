"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutContactUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutContactUserInput_1 = require("../inputs/UserCreateOrConnectWithoutContactUserInput");
const UserCreateWithoutContactUserInput_1 = require("../inputs/UserCreateWithoutContactUserInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutContactUserInput = class UserCreateNestedOneWithoutContactUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutContactUserInput_1.UserCreateWithoutContactUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutContactUserInput_1.UserCreateWithoutContactUserInput)
], UserCreateNestedOneWithoutContactUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutContactUserInput_1.UserCreateOrConnectWithoutContactUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutContactUserInput_1.UserCreateOrConnectWithoutContactUserInput)
], UserCreateNestedOneWithoutContactUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutContactUserInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutContactUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutContactUserInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutContactUserInput);
exports.UserCreateNestedOneWithoutContactUserInput = UserCreateNestedOneWithoutContactUserInput;
