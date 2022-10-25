"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationUpsertWithoutMessageInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateWithoutMessageInput_1 = require("../inputs/ConversationCreateWithoutMessageInput");
const ConversationUpdateWithoutMessageInput_1 = require("../inputs/ConversationUpdateWithoutMessageInput");
let ConversationUpsertWithoutMessageInput = class ConversationUpsertWithoutMessageInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationUpdateWithoutMessageInput_1.ConversationUpdateWithoutMessageInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationUpdateWithoutMessageInput_1.ConversationUpdateWithoutMessageInput)
], ConversationUpsertWithoutMessageInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateWithoutMessageInput_1.ConversationCreateWithoutMessageInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationCreateWithoutMessageInput_1.ConversationCreateWithoutMessageInput)
], ConversationUpsertWithoutMessageInput.prototype, "create", void 0);
ConversationUpsertWithoutMessageInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationUpsertWithoutMessageInput", {
        isAbstract: true
    })
], ConversationUpsertWithoutMessageInput);
exports.ConversationUpsertWithoutMessageInput = ConversationUpsertWithoutMessageInput;
