"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutMessageInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutMessageInput_1 = require("../inputs/UserCreateOrConnectWithoutMessageInput");
const UserCreateWithoutMessageInput_1 = require("../inputs/UserCreateWithoutMessageInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutMessageInput = class UserCreateNestedOneWithoutMessageInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutMessageInput_1.UserCreateWithoutMessageInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutMessageInput_1.UserCreateWithoutMessageInput)
], UserCreateNestedOneWithoutMessageInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMessageInput_1.UserCreateOrConnectWithoutMessageInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutMessageInput_1.UserCreateOrConnectWithoutMessageInput)
], UserCreateNestedOneWithoutMessageInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutMessageInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutMessageInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutMessageInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutMessageInput);
exports.UserCreateNestedOneWithoutMessageInput = UserCreateNestedOneWithoutMessageInput;
