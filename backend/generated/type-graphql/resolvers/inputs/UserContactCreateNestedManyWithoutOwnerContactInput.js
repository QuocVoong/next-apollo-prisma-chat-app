"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactCreateNestedManyWithoutOwnerContactInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactCreateManyOwnerContactInputEnvelope_1 = require("../inputs/UserContactCreateManyOwnerContactInputEnvelope");
const UserContactCreateOrConnectWithoutOwnerContactInput_1 = require("../inputs/UserContactCreateOrConnectWithoutOwnerContactInput");
const UserContactCreateWithoutOwnerContactInput_1 = require("../inputs/UserContactCreateWithoutOwnerContactInput");
const UserContactWhereUniqueInput_1 = require("../inputs/UserContactWhereUniqueInput");
let UserContactCreateNestedManyWithoutOwnerContactInput = class UserContactCreateNestedManyWithoutOwnerContactInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactCreateWithoutOwnerContactInput_1.UserContactCreateWithoutOwnerContactInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactCreateNestedManyWithoutOwnerContactInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactCreateOrConnectWithoutOwnerContactInput_1.UserContactCreateOrConnectWithoutOwnerContactInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactCreateNestedManyWithoutOwnerContactInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactCreateManyOwnerContactInputEnvelope_1.UserContactCreateManyOwnerContactInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactCreateManyOwnerContactInputEnvelope_1.UserContactCreateManyOwnerContactInputEnvelope)
], UserContactCreateNestedManyWithoutOwnerContactInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactWhereUniqueInput_1.UserContactWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactCreateNestedManyWithoutOwnerContactInput.prototype, "connect", void 0);
UserContactCreateNestedManyWithoutOwnerContactInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactCreateNestedManyWithoutOwnerContactInput", {
        isAbstract: true
    })
], UserContactCreateNestedManyWithoutOwnerContactInput);
exports.UserContactCreateNestedManyWithoutOwnerContactInput = UserContactCreateNestedManyWithoutOwnerContactInput;
