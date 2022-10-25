"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactUpdateManyWithoutOwnerContactNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactCreateOrConnectWithoutOwnerContactInput_1 = require("../inputs/UserContactCreateOrConnectWithoutOwnerContactInput");
const UserContactCreateWithoutOwnerContactInput_1 = require("../inputs/UserContactCreateWithoutOwnerContactInput");
const UserContactScalarWhereInput_1 = require("../inputs/UserContactScalarWhereInput");
const UserContactUpdateManyWithWhereWithoutOwnerContactInput_1 = require("../inputs/UserContactUpdateManyWithWhereWithoutOwnerContactInput");
const UserContactUpdateWithWhereUniqueWithoutOwnerContactInput_1 = require("../inputs/UserContactUpdateWithWhereUniqueWithoutOwnerContactInput");
const UserContactUpsertWithWhereUniqueWithoutOwnerContactInput_1 = require("../inputs/UserContactUpsertWithWhereUniqueWithoutOwnerContactInput");
const UserContactWhereUniqueInput_1 = require("../inputs/UserContactWhereUniqueInput");
let UserContactUpdateManyWithoutOwnerContactNestedInput = class UserContactUpdateManyWithoutOwnerContactNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactCreateWithoutOwnerContactInput_1.UserContactCreateWithoutOwnerContactInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactUpdateManyWithoutOwnerContactNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactCreateOrConnectWithoutOwnerContactInput_1.UserContactCreateOrConnectWithoutOwnerContactInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactUpdateManyWithoutOwnerContactNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactUpsertWithWhereUniqueWithoutOwnerContactInput_1.UserContactUpsertWithWhereUniqueWithoutOwnerContactInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactUpdateManyWithoutOwnerContactNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactWhereUniqueInput_1.UserContactWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactUpdateManyWithoutOwnerContactNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactWhereUniqueInput_1.UserContactWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactUpdateManyWithoutOwnerContactNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactWhereUniqueInput_1.UserContactWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactUpdateManyWithoutOwnerContactNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactWhereUniqueInput_1.UserContactWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactUpdateManyWithoutOwnerContactNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactUpdateWithWhereUniqueWithoutOwnerContactInput_1.UserContactUpdateWithWhereUniqueWithoutOwnerContactInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactUpdateManyWithoutOwnerContactNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactUpdateManyWithWhereWithoutOwnerContactInput_1.UserContactUpdateManyWithWhereWithoutOwnerContactInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactUpdateManyWithoutOwnerContactNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactScalarWhereInput_1.UserContactScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactUpdateManyWithoutOwnerContactNestedInput.prototype, "deleteMany", void 0);
UserContactUpdateManyWithoutOwnerContactNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactUpdateManyWithoutOwnerContactNestedInput", {
        isAbstract: true
    })
], UserContactUpdateManyWithoutOwnerContactNestedInput);
exports.UserContactUpdateManyWithoutOwnerContactNestedInput = UserContactUpdateManyWithoutOwnerContactNestedInput;
