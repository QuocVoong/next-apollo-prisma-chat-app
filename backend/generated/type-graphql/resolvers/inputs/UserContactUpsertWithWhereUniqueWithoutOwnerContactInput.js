"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactUpsertWithWhereUniqueWithoutOwnerContactInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactCreateWithoutOwnerContactInput_1 = require("../inputs/UserContactCreateWithoutOwnerContactInput");
const UserContactUpdateWithoutOwnerContactInput_1 = require("../inputs/UserContactUpdateWithoutOwnerContactInput");
const UserContactWhereUniqueInput_1 = require("../inputs/UserContactWhereUniqueInput");
let UserContactUpsertWithWhereUniqueWithoutOwnerContactInput = class UserContactUpsertWithWhereUniqueWithoutOwnerContactInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereUniqueInput_1.UserContactWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactWhereUniqueInput_1.UserContactWhereUniqueInput)
], UserContactUpsertWithWhereUniqueWithoutOwnerContactInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactUpdateWithoutOwnerContactInput_1.UserContactUpdateWithoutOwnerContactInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactUpdateWithoutOwnerContactInput_1.UserContactUpdateWithoutOwnerContactInput)
], UserContactUpsertWithWhereUniqueWithoutOwnerContactInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactCreateWithoutOwnerContactInput_1.UserContactCreateWithoutOwnerContactInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactCreateWithoutOwnerContactInput_1.UserContactCreateWithoutOwnerContactInput)
], UserContactUpsertWithWhereUniqueWithoutOwnerContactInput.prototype, "create", void 0);
UserContactUpsertWithWhereUniqueWithoutOwnerContactInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactUpsertWithWhereUniqueWithoutOwnerContactInput", {
        isAbstract: true
    })
], UserContactUpsertWithWhereUniqueWithoutOwnerContactInput);
exports.UserContactUpsertWithWhereUniqueWithoutOwnerContactInput = UserContactUpsertWithWhereUniqueWithoutOwnerContactInput;
