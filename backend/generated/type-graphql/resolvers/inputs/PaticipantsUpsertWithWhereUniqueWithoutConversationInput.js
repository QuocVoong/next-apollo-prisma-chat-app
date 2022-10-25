"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsUpsertWithWhereUniqueWithoutConversationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsCreateWithoutConversationInput_1 = require("../inputs/PaticipantsCreateWithoutConversationInput");
const PaticipantsUpdateWithoutConversationInput_1 = require("../inputs/PaticipantsUpdateWithoutConversationInput");
const PaticipantsWhereUniqueInput_1 = require("../inputs/PaticipantsWhereUniqueInput");
let PaticipantsUpsertWithWhereUniqueWithoutConversationInput = class PaticipantsUpsertWithWhereUniqueWithoutConversationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput)
], PaticipantsUpsertWithWhereUniqueWithoutConversationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsUpdateWithoutConversationInput_1.PaticipantsUpdateWithoutConversationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsUpdateWithoutConversationInput_1.PaticipantsUpdateWithoutConversationInput)
], PaticipantsUpsertWithWhereUniqueWithoutConversationInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsCreateWithoutConversationInput_1.PaticipantsCreateWithoutConversationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsCreateWithoutConversationInput_1.PaticipantsCreateWithoutConversationInput)
], PaticipantsUpsertWithWhereUniqueWithoutConversationInput.prototype, "create", void 0);
PaticipantsUpsertWithWhereUniqueWithoutConversationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsUpsertWithWhereUniqueWithoutConversationInput", {
        isAbstract: true
    })
], PaticipantsUpsertWithWhereUniqueWithoutConversationInput);
exports.PaticipantsUpsertWithWhereUniqueWithoutConversationInput = PaticipantsUpsertWithWhereUniqueWithoutConversationInput;
