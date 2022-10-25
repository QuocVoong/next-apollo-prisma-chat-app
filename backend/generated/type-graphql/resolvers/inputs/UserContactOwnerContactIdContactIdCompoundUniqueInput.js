"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactOwnerContactIdContactIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserContactOwnerContactIdContactIdCompoundUniqueInput = class UserContactOwnerContactIdContactIdCompoundUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserContactOwnerContactIdContactIdCompoundUniqueInput.prototype, "ownerContactId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserContactOwnerContactIdContactIdCompoundUniqueInput.prototype, "contactId", void 0);
UserContactOwnerContactIdContactIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactOwnerContactIdContactIdCompoundUniqueInput", {
        isAbstract: true
    })
], UserContactOwnerContactIdContactIdCompoundUniqueInput);
exports.UserContactOwnerContactIdContactIdCompoundUniqueInput = UserContactOwnerContactIdContactIdCompoundUniqueInput;
