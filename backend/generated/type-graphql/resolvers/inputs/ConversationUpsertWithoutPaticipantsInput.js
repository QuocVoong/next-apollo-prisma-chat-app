"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationUpsertWithoutPaticipantsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateWithoutPaticipantsInput_1 = require("../inputs/ConversationCreateWithoutPaticipantsInput");
const ConversationUpdateWithoutPaticipantsInput_1 = require("../inputs/ConversationUpdateWithoutPaticipantsInput");
let ConversationUpsertWithoutPaticipantsInput = class ConversationUpsertWithoutPaticipantsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationUpdateWithoutPaticipantsInput_1.ConversationUpdateWithoutPaticipantsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationUpdateWithoutPaticipantsInput_1.ConversationUpdateWithoutPaticipantsInput)
], ConversationUpsertWithoutPaticipantsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateWithoutPaticipantsInput_1.ConversationCreateWithoutPaticipantsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationCreateWithoutPaticipantsInput_1.ConversationCreateWithoutPaticipantsInput)
], ConversationUpsertWithoutPaticipantsInput.prototype, "create", void 0);
ConversationUpsertWithoutPaticipantsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationUpsertWithoutPaticipantsInput", {
        isAbstract: true
    })
], ConversationUpsertWithoutPaticipantsInput);
exports.ConversationUpsertWithoutPaticipantsInput = ConversationUpsertWithoutPaticipantsInput;
