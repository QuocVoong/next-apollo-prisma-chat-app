"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactUpdateManyWithWhereWithoutContactUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactScalarWhereInput_1 = require("../inputs/UserContactScalarWhereInput");
const UserContactUpdateManyMutationInput_1 = require("../inputs/UserContactUpdateManyMutationInput");
let UserContactUpdateManyWithWhereWithoutContactUserInput = class UserContactUpdateManyWithWhereWithoutContactUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactScalarWhereInput_1.UserContactScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactScalarWhereInput_1.UserContactScalarWhereInput)
], UserContactUpdateManyWithWhereWithoutContactUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactUpdateManyMutationInput_1.UserContactUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactUpdateManyMutationInput_1.UserContactUpdateManyMutationInput)
], UserContactUpdateManyWithWhereWithoutContactUserInput.prototype, "data", void 0);
UserContactUpdateManyWithWhereWithoutContactUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactUpdateManyWithWhereWithoutContactUserInput", {
        isAbstract: true
    })
], UserContactUpdateManyWithWhereWithoutContactUserInput);
exports.UserContactUpdateManyWithWhereWithoutContactUserInput = UserContactUpdateManyWithWhereWithoutContactUserInput;
