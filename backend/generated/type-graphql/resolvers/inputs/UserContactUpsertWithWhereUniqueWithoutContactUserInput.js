"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactUpsertWithWhereUniqueWithoutContactUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactCreateWithoutContactUserInput_1 = require("../inputs/UserContactCreateWithoutContactUserInput");
const UserContactUpdateWithoutContactUserInput_1 = require("../inputs/UserContactUpdateWithoutContactUserInput");
const UserContactWhereUniqueInput_1 = require("../inputs/UserContactWhereUniqueInput");
let UserContactUpsertWithWhereUniqueWithoutContactUserInput = class UserContactUpsertWithWhereUniqueWithoutContactUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereUniqueInput_1.UserContactWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactWhereUniqueInput_1.UserContactWhereUniqueInput)
], UserContactUpsertWithWhereUniqueWithoutContactUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactUpdateWithoutContactUserInput_1.UserContactUpdateWithoutContactUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactUpdateWithoutContactUserInput_1.UserContactUpdateWithoutContactUserInput)
], UserContactUpsertWithWhereUniqueWithoutContactUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactCreateWithoutContactUserInput_1.UserContactCreateWithoutContactUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactCreateWithoutContactUserInput_1.UserContactCreateWithoutContactUserInput)
], UserContactUpsertWithWhereUniqueWithoutContactUserInput.prototype, "create", void 0);
UserContactUpsertWithWhereUniqueWithoutContactUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactUpsertWithWhereUniqueWithoutContactUserInput", {
        isAbstract: true
    })
], UserContactUpsertWithWhereUniqueWithoutContactUserInput);
exports.UserContactUpsertWithWhereUniqueWithoutContactUserInput = UserContactUpsertWithWhereUniqueWithoutContactUserInput;
