"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsUpdateManyWithoutConversationNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsCreateManyConversationInputEnvelope_1 = require("../inputs/PaticipantsCreateManyConversationInputEnvelope");
const PaticipantsCreateOrConnectWithoutConversationInput_1 = require("../inputs/PaticipantsCreateOrConnectWithoutConversationInput");
const PaticipantsCreateWithoutConversationInput_1 = require("../inputs/PaticipantsCreateWithoutConversationInput");
const PaticipantsScalarWhereInput_1 = require("../inputs/PaticipantsScalarWhereInput");
const PaticipantsUpdateManyWithWhereWithoutConversationInput_1 = require("../inputs/PaticipantsUpdateManyWithWhereWithoutConversationInput");
const PaticipantsUpdateWithWhereUniqueWithoutConversationInput_1 = require("../inputs/PaticipantsUpdateWithWhereUniqueWithoutConversationInput");
const PaticipantsUpsertWithWhereUniqueWithoutConversationInput_1 = require("../inputs/PaticipantsUpsertWithWhereUniqueWithoutConversationInput");
const PaticipantsWhereUniqueInput_1 = require("../inputs/PaticipantsWhereUniqueInput");
let PaticipantsUpdateManyWithoutConversationNestedInput = class PaticipantsUpdateManyWithoutConversationNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsCreateWithoutConversationInput_1.PaticipantsCreateWithoutConversationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsUpdateManyWithoutConversationNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsCreateOrConnectWithoutConversationInput_1.PaticipantsCreateOrConnectWithoutConversationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsUpdateManyWithoutConversationNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsUpsertWithWhereUniqueWithoutConversationInput_1.PaticipantsUpsertWithWhereUniqueWithoutConversationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsUpdateManyWithoutConversationNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsCreateManyConversationInputEnvelope_1.PaticipantsCreateManyConversationInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsCreateManyConversationInputEnvelope_1.PaticipantsCreateManyConversationInputEnvelope)
], PaticipantsUpdateManyWithoutConversationNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsUpdateManyWithoutConversationNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsUpdateManyWithoutConversationNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsUpdateManyWithoutConversationNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsUpdateManyWithoutConversationNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsUpdateWithWhereUniqueWithoutConversationInput_1.PaticipantsUpdateWithWhereUniqueWithoutConversationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsUpdateManyWithoutConversationNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsUpdateManyWithWhereWithoutConversationInput_1.PaticipantsUpdateManyWithWhereWithoutConversationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsUpdateManyWithoutConversationNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsScalarWhereInput_1.PaticipantsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsUpdateManyWithoutConversationNestedInput.prototype, "deleteMany", void 0);
PaticipantsUpdateManyWithoutConversationNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsUpdateManyWithoutConversationNestedInput", {
        isAbstract: true
    })
], PaticipantsUpdateManyWithoutConversationNestedInput);
exports.PaticipantsUpdateManyWithoutConversationNestedInput = PaticipantsUpdateManyWithoutConversationNestedInput;
