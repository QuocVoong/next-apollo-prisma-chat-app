"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactUpdateManyWithWhereWithoutOwnerContactInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactScalarWhereInput_1 = require("../inputs/UserContactScalarWhereInput");
const UserContactUpdateManyMutationInput_1 = require("../inputs/UserContactUpdateManyMutationInput");
let UserContactUpdateManyWithWhereWithoutOwnerContactInput = class UserContactUpdateManyWithWhereWithoutOwnerContactInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactScalarWhereInput_1.UserContactScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactScalarWhereInput_1.UserContactScalarWhereInput)
], UserContactUpdateManyWithWhereWithoutOwnerContactInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactUpdateManyMutationInput_1.UserContactUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactUpdateManyMutationInput_1.UserContactUpdateManyMutationInput)
], UserContactUpdateManyWithWhereWithoutOwnerContactInput.prototype, "data", void 0);
UserContactUpdateManyWithWhereWithoutOwnerContactInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactUpdateManyWithWhereWithoutOwnerContactInput", {
        isAbstract: true
    })
], UserContactUpdateManyWithWhereWithoutOwnerContactInput);
exports.UserContactUpdateManyWithWhereWithoutOwnerContactInput = UserContactUpdateManyWithWhereWithoutOwnerContactInput;
