"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutPaticipantsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutPaticipantsInput_1 = require("../inputs/UserCreateWithoutPaticipantsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutPaticipantsInput = class UserCreateOrConnectWithoutPaticipantsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutPaticipantsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutPaticipantsInput_1.UserCreateWithoutPaticipantsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutPaticipantsInput_1.UserCreateWithoutPaticipantsInput)
], UserCreateOrConnectWithoutPaticipantsInput.prototype, "create", void 0);
UserCreateOrConnectWithoutPaticipantsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutPaticipantsInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutPaticipantsInput);
exports.UserCreateOrConnectWithoutPaticipantsInput = UserCreateOrConnectWithoutPaticipantsInput;
