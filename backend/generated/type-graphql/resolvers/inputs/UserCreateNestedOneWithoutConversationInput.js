"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutConversationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutConversationInput_1 = require("../inputs/UserCreateOrConnectWithoutConversationInput");
const UserCreateWithoutConversationInput_1 = require("../inputs/UserCreateWithoutConversationInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutConversationInput = class UserCreateNestedOneWithoutConversationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutConversationInput_1.UserCreateWithoutConversationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutConversationInput_1.UserCreateWithoutConversationInput)
], UserCreateNestedOneWithoutConversationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutConversationInput_1.UserCreateOrConnectWithoutConversationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutConversationInput_1.UserCreateOrConnectWithoutConversationInput)
], UserCreateNestedOneWithoutConversationInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutConversationInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutConversationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutConversationInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutConversationInput);
exports.UserCreateNestedOneWithoutConversationInput = UserCreateNestedOneWithoutConversationInput;
