"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationUpdateManyWithoutCreatorNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateManyCreatorInputEnvelope_1 = require("../inputs/ConversationCreateManyCreatorInputEnvelope");
const ConversationCreateOrConnectWithoutCreatorInput_1 = require("../inputs/ConversationCreateOrConnectWithoutCreatorInput");
const ConversationCreateWithoutCreatorInput_1 = require("../inputs/ConversationCreateWithoutCreatorInput");
const ConversationScalarWhereInput_1 = require("../inputs/ConversationScalarWhereInput");
const ConversationUpdateManyWithWhereWithoutCreatorInput_1 = require("../inputs/ConversationUpdateManyWithWhereWithoutCreatorInput");
const ConversationUpdateWithWhereUniqueWithoutCreatorInput_1 = require("../inputs/ConversationUpdateWithWhereUniqueWithoutCreatorInput");
const ConversationUpsertWithWhereUniqueWithoutCreatorInput_1 = require("../inputs/ConversationUpsertWithWhereUniqueWithoutCreatorInput");
const ConversationWhereUniqueInput_1 = require("../inputs/ConversationWhereUniqueInput");
let ConversationUpdateManyWithoutCreatorNestedInput = class ConversationUpdateManyWithoutCreatorNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationCreateWithoutCreatorInput_1.ConversationCreateWithoutCreatorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ConversationUpdateManyWithoutCreatorNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationCreateOrConnectWithoutCreatorInput_1.ConversationCreateOrConnectWithoutCreatorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ConversationUpdateManyWithoutCreatorNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationUpsertWithWhereUniqueWithoutCreatorInput_1.ConversationUpsertWithWhereUniqueWithoutCreatorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ConversationUpdateManyWithoutCreatorNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateManyCreatorInputEnvelope_1.ConversationCreateManyCreatorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationCreateManyCreatorInputEnvelope_1.ConversationCreateManyCreatorInputEnvelope)
], ConversationUpdateManyWithoutCreatorNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationWhereUniqueInput_1.ConversationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ConversationUpdateManyWithoutCreatorNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationWhereUniqueInput_1.ConversationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ConversationUpdateManyWithoutCreatorNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationWhereUniqueInput_1.ConversationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ConversationUpdateManyWithoutCreatorNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationWhereUniqueInput_1.ConversationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ConversationUpdateManyWithoutCreatorNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationUpdateWithWhereUniqueWithoutCreatorInput_1.ConversationUpdateWithWhereUniqueWithoutCreatorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ConversationUpdateManyWithoutCreatorNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationUpdateManyWithWhereWithoutCreatorInput_1.ConversationUpdateManyWithWhereWithoutCreatorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ConversationUpdateManyWithoutCreatorNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationScalarWhereInput_1.ConversationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ConversationUpdateManyWithoutCreatorNestedInput.prototype, "deleteMany", void 0);
ConversationUpdateManyWithoutCreatorNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationUpdateManyWithoutCreatorNestedInput", {
        isAbstract: true
    })
], ConversationUpdateManyWithoutCreatorNestedInput);
exports.ConversationUpdateManyWithoutCreatorNestedInput = ConversationUpdateManyWithoutCreatorNestedInput;
