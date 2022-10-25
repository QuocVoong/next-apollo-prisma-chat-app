"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsUpdateWithWhereUniqueWithoutConversationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsUpdateWithoutConversationInput_1 = require("../inputs/PaticipantsUpdateWithoutConversationInput");
const PaticipantsWhereUniqueInput_1 = require("../inputs/PaticipantsWhereUniqueInput");
let PaticipantsUpdateWithWhereUniqueWithoutConversationInput = class PaticipantsUpdateWithWhereUniqueWithoutConversationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput)
], PaticipantsUpdateWithWhereUniqueWithoutConversationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsUpdateWithoutConversationInput_1.PaticipantsUpdateWithoutConversationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsUpdateWithoutConversationInput_1.PaticipantsUpdateWithoutConversationInput)
], PaticipantsUpdateWithWhereUniqueWithoutConversationInput.prototype, "data", void 0);
PaticipantsUpdateWithWhereUniqueWithoutConversationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsUpdateWithWhereUniqueWithoutConversationInput", {
        isAbstract: true
    })
], PaticipantsUpdateWithWhereUniqueWithoutConversationInput);
exports.PaticipantsUpdateWithWhereUniqueWithoutConversationInput = PaticipantsUpdateWithWhereUniqueWithoutConversationInput;
