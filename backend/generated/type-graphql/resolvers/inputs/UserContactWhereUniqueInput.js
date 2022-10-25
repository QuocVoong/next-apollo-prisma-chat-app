"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactOwnerContactIdContactIdCompoundUniqueInput_1 = require("../inputs/UserContactOwnerContactIdContactIdCompoundUniqueInput");
let UserContactWhereUniqueInput = class UserContactWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactWhereUniqueInput.prototype, "ownerContactId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactOwnerContactIdContactIdCompoundUniqueInput_1.UserContactOwnerContactIdContactIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactOwnerContactIdContactIdCompoundUniqueInput_1.UserContactOwnerContactIdContactIdCompoundUniqueInput)
], UserContactWhereUniqueInput.prototype, "ownerContactId_contactId", void 0);
UserContactWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactWhereUniqueInput", {
        isAbstract: true
    })
], UserContactWhereUniqueInput);
exports.UserContactWhereUniqueInput = UserContactWhereUniqueInput;
