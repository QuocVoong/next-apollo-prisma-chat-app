"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutConversationNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutConversationInput_1 = require("../inputs/UserCreateOrConnectWithoutConversationInput");
const UserCreateWithoutConversationInput_1 = require("../inputs/UserCreateWithoutConversationInput");
const UserUpdateWithoutConversationInput_1 = require("../inputs/UserUpdateWithoutConversationInput");
const UserUpsertWithoutConversationInput_1 = require("../inputs/UserUpsertWithoutConversationInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutConversationNestedInput = class UserUpdateOneRequiredWithoutConversationNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutConversationInput_1.UserCreateWithoutConversationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutConversationInput_1.UserCreateWithoutConversationInput)
], UserUpdateOneRequiredWithoutConversationNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutConversationInput_1.UserCreateOrConnectWithoutConversationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutConversationInput_1.UserCreateOrConnectWithoutConversationInput)
], UserUpdateOneRequiredWithoutConversationNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutConversationInput_1.UserUpsertWithoutConversationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutConversationInput_1.UserUpsertWithoutConversationInput)
], UserUpdateOneRequiredWithoutConversationNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutConversationNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutConversationInput_1.UserUpdateWithoutConversationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutConversationInput_1.UserUpdateWithoutConversationInput)
], UserUpdateOneRequiredWithoutConversationNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutConversationNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutConversationNestedInput", {
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutConversationNestedInput);
exports.UserUpdateOneRequiredWithoutConversationNestedInput = UserUpdateOneRequiredWithoutConversationNestedInput;
