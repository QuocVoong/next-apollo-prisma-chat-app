"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsUpdateManyWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsCreateManyUserInputEnvelope_1 = require("../inputs/PaticipantsCreateManyUserInputEnvelope");
const PaticipantsCreateOrConnectWithoutUserInput_1 = require("../inputs/PaticipantsCreateOrConnectWithoutUserInput");
const PaticipantsCreateWithoutUserInput_1 = require("../inputs/PaticipantsCreateWithoutUserInput");
const PaticipantsScalarWhereInput_1 = require("../inputs/PaticipantsScalarWhereInput");
const PaticipantsUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/PaticipantsUpdateManyWithWhereWithoutUserInput");
const PaticipantsUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/PaticipantsUpdateWithWhereUniqueWithoutUserInput");
const PaticipantsUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/PaticipantsUpsertWithWhereUniqueWithoutUserInput");
const PaticipantsWhereUniqueInput_1 = require("../inputs/PaticipantsWhereUniqueInput");
let PaticipantsUpdateManyWithoutUserNestedInput = class PaticipantsUpdateManyWithoutUserNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsCreateWithoutUserInput_1.PaticipantsCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsCreateOrConnectWithoutUserInput_1.PaticipantsCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsUpsertWithWhereUniqueWithoutUserInput_1.PaticipantsUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsCreateManyUserInputEnvelope_1.PaticipantsCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsCreateManyUserInputEnvelope_1.PaticipantsCreateManyUserInputEnvelope)
], PaticipantsUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsUpdateWithWhereUniqueWithoutUserInput_1.PaticipantsUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsUpdateManyWithWhereWithoutUserInput_1.PaticipantsUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsScalarWhereInput_1.PaticipantsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
PaticipantsUpdateManyWithoutUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsUpdateManyWithoutUserNestedInput", {
        isAbstract: true
    })
], PaticipantsUpdateManyWithoutUserNestedInput);
exports.PaticipantsUpdateManyWithoutUserNestedInput = PaticipantsUpdateManyWithoutUserNestedInput;
