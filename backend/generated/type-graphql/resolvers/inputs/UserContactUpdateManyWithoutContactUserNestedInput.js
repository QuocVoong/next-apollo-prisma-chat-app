"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactUpdateManyWithoutContactUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactCreateOrConnectWithoutContactUserInput_1 = require("../inputs/UserContactCreateOrConnectWithoutContactUserInput");
const UserContactCreateWithoutContactUserInput_1 = require("../inputs/UserContactCreateWithoutContactUserInput");
const UserContactScalarWhereInput_1 = require("../inputs/UserContactScalarWhereInput");
const UserContactUpdateManyWithWhereWithoutContactUserInput_1 = require("../inputs/UserContactUpdateManyWithWhereWithoutContactUserInput");
const UserContactUpdateWithWhereUniqueWithoutContactUserInput_1 = require("../inputs/UserContactUpdateWithWhereUniqueWithoutContactUserInput");
const UserContactUpsertWithWhereUniqueWithoutContactUserInput_1 = require("../inputs/UserContactUpsertWithWhereUniqueWithoutContactUserInput");
const UserContactWhereUniqueInput_1 = require("../inputs/UserContactWhereUniqueInput");
let UserContactUpdateManyWithoutContactUserNestedInput = class UserContactUpdateManyWithoutContactUserNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactCreateWithoutContactUserInput_1.UserContactCreateWithoutContactUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactUpdateManyWithoutContactUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactCreateOrConnectWithoutContactUserInput_1.UserContactCreateOrConnectWithoutContactUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactUpdateManyWithoutContactUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactUpsertWithWhereUniqueWithoutContactUserInput_1.UserContactUpsertWithWhereUniqueWithoutContactUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactUpdateManyWithoutContactUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactWhereUniqueInput_1.UserContactWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactUpdateManyWithoutContactUserNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactWhereUniqueInput_1.UserContactWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactUpdateManyWithoutContactUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactWhereUniqueInput_1.UserContactWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactUpdateManyWithoutContactUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactWhereUniqueInput_1.UserContactWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactUpdateManyWithoutContactUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactUpdateWithWhereUniqueWithoutContactUserInput_1.UserContactUpdateWithWhereUniqueWithoutContactUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactUpdateManyWithoutContactUserNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactUpdateManyWithWhereWithoutContactUserInput_1.UserContactUpdateManyWithWhereWithoutContactUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactUpdateManyWithoutContactUserNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactScalarWhereInput_1.UserContactScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactUpdateManyWithoutContactUserNestedInput.prototype, "deleteMany", void 0);
UserContactUpdateManyWithoutContactUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactUpdateManyWithoutContactUserNestedInput", {
        isAbstract: true
    })
], UserContactUpdateManyWithoutContactUserNestedInput);
exports.UserContactUpdateManyWithoutContactUserNestedInput = UserContactUpdateManyWithoutContactUserNestedInput;
