"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutContactUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutContactUserInput_1 = require("../inputs/UserCreateWithoutContactUserInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutContactUserInput = class UserCreateOrConnectWithoutContactUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutContactUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutContactUserInput_1.UserCreateWithoutContactUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutContactUserInput_1.UserCreateWithoutContactUserInput)
], UserCreateOrConnectWithoutContactUserInput.prototype, "create", void 0);
UserCreateOrConnectWithoutContactUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutContactUserInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutContactUserInput);
exports.UserCreateOrConnectWithoutContactUserInput = UserCreateOrConnectWithoutContactUserInput;
