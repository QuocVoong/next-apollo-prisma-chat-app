"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsCreateOrConnectWithoutConversationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsCreateWithoutConversationInput_1 = require("../inputs/PaticipantsCreateWithoutConversationInput");
const PaticipantsWhereUniqueInput_1 = require("../inputs/PaticipantsWhereUniqueInput");
let PaticipantsCreateOrConnectWithoutConversationInput = class PaticipantsCreateOrConnectWithoutConversationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput)
], PaticipantsCreateOrConnectWithoutConversationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsCreateWithoutConversationInput_1.PaticipantsCreateWithoutConversationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsCreateWithoutConversationInput_1.PaticipantsCreateWithoutConversationInput)
], PaticipantsCreateOrConnectWithoutConversationInput.prototype, "create", void 0);
PaticipantsCreateOrConnectWithoutConversationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsCreateOrConnectWithoutConversationInput", {
        isAbstract: true
    })
], PaticipantsCreateOrConnectWithoutConversationInput);
exports.PaticipantsCreateOrConnectWithoutConversationInput = PaticipantsCreateOrConnectWithoutConversationInput;
