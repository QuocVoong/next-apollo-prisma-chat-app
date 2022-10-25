"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutMessageInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutMessageInput_1 = require("../inputs/UserCreateWithoutMessageInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutMessageInput = class UserCreateOrConnectWithoutMessageInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutMessageInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutMessageInput_1.UserCreateWithoutMessageInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutMessageInput_1.UserCreateWithoutMessageInput)
], UserCreateOrConnectWithoutMessageInput.prototype, "create", void 0);
UserCreateOrConnectWithoutMessageInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutMessageInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutMessageInput);
exports.UserCreateOrConnectWithoutMessageInput = UserCreateOrConnectWithoutMessageInput;
