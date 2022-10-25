"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactCreateWithoutContactUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutOwnerContactInput_1 = require("../inputs/UserCreateNestedOneWithoutOwnerContactInput");
let UserContactCreateWithoutContactUserInput = class UserContactCreateWithoutContactUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutOwnerContactInput_1.UserCreateNestedOneWithoutOwnerContactInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutOwnerContactInput_1.UserCreateNestedOneWithoutOwnerContactInput)
], UserContactCreateWithoutContactUserInput.prototype, "ownerContact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateWithoutContactUserInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateWithoutContactUserInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateWithoutContactUserInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateWithoutContactUserInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateWithoutContactUserInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateWithoutContactUserInput.prototype, "photo", void 0);
UserContactCreateWithoutContactUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactCreateWithoutContactUserInput", {
        isAbstract: true
    })
], UserContactCreateWithoutContactUserInput);
exports.UserContactCreateWithoutContactUserInput = UserContactCreateWithoutContactUserInput;
