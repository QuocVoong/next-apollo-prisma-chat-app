"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactUpdateWithWhereUniqueWithoutOwnerContactInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactUpdateWithoutOwnerContactInput_1 = require("../inputs/UserContactUpdateWithoutOwnerContactInput");
const UserContactWhereUniqueInput_1 = require("../inputs/UserContactWhereUniqueInput");
let UserContactUpdateWithWhereUniqueWithoutOwnerContactInput = class UserContactUpdateWithWhereUniqueWithoutOwnerContactInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereUniqueInput_1.UserContactWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactWhereUniqueInput_1.UserContactWhereUniqueInput)
], UserContactUpdateWithWhereUniqueWithoutOwnerContactInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactUpdateWithoutOwnerContactInput_1.UserContactUpdateWithoutOwnerContactInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactUpdateWithoutOwnerContactInput_1.UserContactUpdateWithoutOwnerContactInput)
], UserContactUpdateWithWhereUniqueWithoutOwnerContactInput.prototype, "data", void 0);
UserContactUpdateWithWhereUniqueWithoutOwnerContactInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactUpdateWithWhereUniqueWithoutOwnerContactInput", {
        isAbstract: true
    })
], UserContactUpdateWithWhereUniqueWithoutOwnerContactInput);
exports.UserContactUpdateWithWhereUniqueWithoutOwnerContactInput = UserContactUpdateWithWhereUniqueWithoutOwnerContactInput;
