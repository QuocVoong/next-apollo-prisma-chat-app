"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactCreateOrConnectWithoutOwnerContactInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactCreateWithoutOwnerContactInput_1 = require("../inputs/UserContactCreateWithoutOwnerContactInput");
const UserContactWhereUniqueInput_1 = require("../inputs/UserContactWhereUniqueInput");
let UserContactCreateOrConnectWithoutOwnerContactInput = class UserContactCreateOrConnectWithoutOwnerContactInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereUniqueInput_1.UserContactWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactWhereUniqueInput_1.UserContactWhereUniqueInput)
], UserContactCreateOrConnectWithoutOwnerContactInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactCreateWithoutOwnerContactInput_1.UserContactCreateWithoutOwnerContactInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactCreateWithoutOwnerContactInput_1.UserContactCreateWithoutOwnerContactInput)
], UserContactCreateOrConnectWithoutOwnerContactInput.prototype, "create", void 0);
UserContactCreateOrConnectWithoutOwnerContactInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactCreateOrConnectWithoutOwnerContactInput", {
        isAbstract: true
    })
], UserContactCreateOrConnectWithoutOwnerContactInput);
exports.UserContactCreateOrConnectWithoutOwnerContactInput = UserContactCreateOrConnectWithoutOwnerContactInput;
