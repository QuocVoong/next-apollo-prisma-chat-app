"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactCreateWithoutOwnerContactInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutContactUserInput_1 = require("../inputs/UserCreateNestedOneWithoutContactUserInput");
let UserContactCreateWithoutOwnerContactInput = class UserContactCreateWithoutOwnerContactInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutContactUserInput_1.UserCreateNestedOneWithoutContactUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutContactUserInput_1.UserCreateNestedOneWithoutContactUserInput)
], UserContactCreateWithoutOwnerContactInput.prototype, "contactUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateWithoutOwnerContactInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateWithoutOwnerContactInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateWithoutOwnerContactInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateWithoutOwnerContactInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateWithoutOwnerContactInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateWithoutOwnerContactInput.prototype, "photo", void 0);
UserContactCreateWithoutOwnerContactInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactCreateWithoutOwnerContactInput", {
        isAbstract: true
    })
], UserContactCreateWithoutOwnerContactInput);
exports.UserContactCreateWithoutOwnerContactInput = UserContactCreateWithoutOwnerContactInput;
