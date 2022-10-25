"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutOwnerContactInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutOwnerContactInput_1 = require("../inputs/UserCreateOrConnectWithoutOwnerContactInput");
const UserCreateWithoutOwnerContactInput_1 = require("../inputs/UserCreateWithoutOwnerContactInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutOwnerContactInput = class UserCreateNestedOneWithoutOwnerContactInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutOwnerContactInput_1.UserCreateWithoutOwnerContactInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutOwnerContactInput_1.UserCreateWithoutOwnerContactInput)
], UserCreateNestedOneWithoutOwnerContactInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutOwnerContactInput_1.UserCreateOrConnectWithoutOwnerContactInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutOwnerContactInput_1.UserCreateOrConnectWithoutOwnerContactInput)
], UserCreateNestedOneWithoutOwnerContactInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutOwnerContactInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutOwnerContactInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutOwnerContactInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutOwnerContactInput);
exports.UserCreateNestedOneWithoutOwnerContactInput = UserCreateNestedOneWithoutOwnerContactInput;
