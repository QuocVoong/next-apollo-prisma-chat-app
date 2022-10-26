"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactCreateManyOwnerContactInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserContactCreateManyOwnerContactInput = class UserContactCreateManyOwnerContactInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateManyOwnerContactInput.prototype, "contactId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateManyOwnerContactInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateManyOwnerContactInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateManyOwnerContactInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateManyOwnerContactInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateManyOwnerContactInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactCreateManyOwnerContactInput.prototype, "photo", void 0);
UserContactCreateManyOwnerContactInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactCreateManyOwnerContactInput", {
        isAbstract: true
    })
], UserContactCreateManyOwnerContactInput);
exports.UserContactCreateManyOwnerContactInput = UserContactCreateManyOwnerContactInput;
