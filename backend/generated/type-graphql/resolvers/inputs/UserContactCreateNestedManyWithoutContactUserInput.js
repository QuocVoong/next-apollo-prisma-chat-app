"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactCreateNestedManyWithoutContactUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactCreateOrConnectWithoutContactUserInput_1 = require("../inputs/UserContactCreateOrConnectWithoutContactUserInput");
const UserContactCreateWithoutContactUserInput_1 = require("../inputs/UserContactCreateWithoutContactUserInput");
const UserContactWhereUniqueInput_1 = require("../inputs/UserContactWhereUniqueInput");
let UserContactCreateNestedManyWithoutContactUserInput = class UserContactCreateNestedManyWithoutContactUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactCreateWithoutContactUserInput_1.UserContactCreateWithoutContactUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactCreateNestedManyWithoutContactUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactCreateOrConnectWithoutContactUserInput_1.UserContactCreateOrConnectWithoutContactUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactCreateNestedManyWithoutContactUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactWhereUniqueInput_1.UserContactWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactCreateNestedManyWithoutContactUserInput.prototype, "connect", void 0);
UserContactCreateNestedManyWithoutContactUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactCreateNestedManyWithoutContactUserInput", {
        isAbstract: true
    })
], UserContactCreateNestedManyWithoutContactUserInput);
exports.UserContactCreateNestedManyWithoutContactUserInput = UserContactCreateNestedManyWithoutContactUserInput;
