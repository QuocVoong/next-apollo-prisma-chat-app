"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactCreateOrConnectWithoutContactUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactCreateWithoutContactUserInput_1 = require("../inputs/UserContactCreateWithoutContactUserInput");
const UserContactWhereUniqueInput_1 = require("../inputs/UserContactWhereUniqueInput");
let UserContactCreateOrConnectWithoutContactUserInput = class UserContactCreateOrConnectWithoutContactUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereUniqueInput_1.UserContactWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactWhereUniqueInput_1.UserContactWhereUniqueInput)
], UserContactCreateOrConnectWithoutContactUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactCreateWithoutContactUserInput_1.UserContactCreateWithoutContactUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactCreateWithoutContactUserInput_1.UserContactCreateWithoutContactUserInput)
], UserContactCreateOrConnectWithoutContactUserInput.prototype, "create", void 0);
UserContactCreateOrConnectWithoutContactUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactCreateOrConnectWithoutContactUserInput", {
        isAbstract: true
    })
], UserContactCreateOrConnectWithoutContactUserInput);
exports.UserContactCreateOrConnectWithoutContactUserInput = UserContactCreateOrConnectWithoutContactUserInput;
