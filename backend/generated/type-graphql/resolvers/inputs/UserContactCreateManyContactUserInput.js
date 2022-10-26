"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactCreateManyContactUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserContactCreateManyContactUserInput = class UserContactCreateManyContactUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateManyContactUserInput.prototype, "ownerContactId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateManyContactUserInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateManyContactUserInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateManyContactUserInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateManyContactUserInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateManyContactUserInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateManyContactUserInput.prototype, "photo", void 0);
UserContactCreateManyContactUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactCreateManyContactUserInput", {
        isAbstract: true
    })
], UserContactCreateManyContactUserInput);
exports.UserContactCreateManyContactUserInput = UserContactCreateManyContactUserInput;
