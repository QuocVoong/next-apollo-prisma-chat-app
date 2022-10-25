"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutOwnerContactInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutOwnerContactInput_1 = require("../inputs/UserCreateWithoutOwnerContactInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutOwnerContactInput = class UserCreateOrConnectWithoutOwnerContactInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutOwnerContactInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutOwnerContactInput_1.UserCreateWithoutOwnerContactInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutOwnerContactInput_1.UserCreateWithoutOwnerContactInput)
], UserCreateOrConnectWithoutOwnerContactInput.prototype, "create", void 0);
UserCreateOrConnectWithoutOwnerContactInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutOwnerContactInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutOwnerContactInput);
exports.UserCreateOrConnectWithoutOwnerContactInput = UserCreateOrConnectWithoutOwnerContactInput;
