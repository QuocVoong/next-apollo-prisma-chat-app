"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutContactUserInput_1 = require("../inputs/UserCreateNestedOneWithoutContactUserInput");
const UserCreateNestedOneWithoutOwnerContactInput_1 = require("../inputs/UserCreateNestedOneWithoutOwnerContactInput");
let UserContactCreateInput = class UserContactCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutOwnerContactInput_1.UserCreateNestedOneWithoutOwnerContactInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutOwnerContactInput_1.UserCreateNestedOneWithoutOwnerContactInput)
], UserContactCreateInput.prototype, "ownerContact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutContactUserInput_1.UserCreateNestedOneWithoutContactUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutContactUserInput_1.UserCreateNestedOneWithoutContactUserInput)
], UserContactCreateInput.prototype, "contactUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateInput.prototype, "photo", void 0);
UserContactCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactCreateInput", {
        isAbstract: true
    })
], UserContactCreateInput);
exports.UserContactCreateInput = UserContactCreateInput;
