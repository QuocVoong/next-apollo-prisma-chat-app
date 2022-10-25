"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactUpdateWithWhereUniqueWithoutContactUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactUpdateWithoutContactUserInput_1 = require("../inputs/UserContactUpdateWithoutContactUserInput");
const UserContactWhereUniqueInput_1 = require("../inputs/UserContactWhereUniqueInput");
let UserContactUpdateWithWhereUniqueWithoutContactUserInput = class UserContactUpdateWithWhereUniqueWithoutContactUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereUniqueInput_1.UserContactWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactWhereUniqueInput_1.UserContactWhereUniqueInput)
], UserContactUpdateWithWhereUniqueWithoutContactUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactUpdateWithoutContactUserInput_1.UserContactUpdateWithoutContactUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactUpdateWithoutContactUserInput_1.UserContactUpdateWithoutContactUserInput)
], UserContactUpdateWithWhereUniqueWithoutContactUserInput.prototype, "data", void 0);
UserContactUpdateWithWhereUniqueWithoutContactUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactUpdateWithWhereUniqueWithoutContactUserInput", {
        isAbstract: true
    })
], UserContactUpdateWithWhereUniqueWithoutContactUserInput);
exports.UserContactUpdateWithWhereUniqueWithoutContactUserInput = UserContactUpdateWithWhereUniqueWithoutContactUserInput;
