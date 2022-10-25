"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationUpsertWithWhereUniqueWithoutCreatorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateWithoutCreatorInput_1 = require("../inputs/ConversationCreateWithoutCreatorInput");
const ConversationUpdateWithoutCreatorInput_1 = require("../inputs/ConversationUpdateWithoutCreatorInput");
const ConversationWhereUniqueInput_1 = require("../inputs/ConversationWhereUniqueInput");
let ConversationUpsertWithWhereUniqueWithoutCreatorInput = class ConversationUpsertWithWhereUniqueWithoutCreatorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereUniqueInput_1.ConversationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationWhereUniqueInput_1.ConversationWhereUniqueInput)
], ConversationUpsertWithWhereUniqueWithoutCreatorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationUpdateWithoutCreatorInput_1.ConversationUpdateWithoutCreatorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationUpdateWithoutCreatorInput_1.ConversationUpdateWithoutCreatorInput)
], ConversationUpsertWithWhereUniqueWithoutCreatorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateWithoutCreatorInput_1.ConversationCreateWithoutCreatorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationCreateWithoutCreatorInput_1.ConversationCreateWithoutCreatorInput)
], ConversationUpsertWithWhereUniqueWithoutCreatorInput.prototype, "create", void 0);
ConversationUpsertWithWhereUniqueWithoutCreatorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationUpsertWithWhereUniqueWithoutCreatorInput", {
        isAbstract: true
    })
], ConversationUpsertWithWhereUniqueWithoutCreatorInput);
exports.ConversationUpsertWithWhereUniqueWithoutCreatorInput = ConversationUpsertWithWhereUniqueWithoutCreatorInput;
