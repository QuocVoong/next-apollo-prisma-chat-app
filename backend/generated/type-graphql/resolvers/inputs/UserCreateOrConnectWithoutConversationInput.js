"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutConversationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutConversationInput_1 = require("../inputs/UserCreateWithoutConversationInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutConversationInput = class UserCreateOrConnectWithoutConversationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutConversationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutConversationInput_1.UserCreateWithoutConversationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutConversationInput_1.UserCreateWithoutConversationInput)
], UserCreateOrConnectWithoutConversationInput.prototype, "create", void 0);
UserCreateOrConnectWithoutConversationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutConversationInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutConversationInput);
exports.UserCreateOrConnectWithoutConversationInput = UserCreateOrConnectWithoutConversationInput;
