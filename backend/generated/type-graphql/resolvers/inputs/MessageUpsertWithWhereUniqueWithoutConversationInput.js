"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpsertWithWhereUniqueWithoutConversationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageCreateWithoutConversationInput_1 = require("../inputs/MessageCreateWithoutConversationInput");
const MessageUpdateWithoutConversationInput_1 = require("../inputs/MessageUpdateWithoutConversationInput");
const MessageWhereUniqueInput_1 = require("../inputs/MessageWhereUniqueInput");
let MessageUpsertWithWhereUniqueWithoutConversationInput = class MessageUpsertWithWhereUniqueWithoutConversationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageWhereUniqueInput_1.MessageWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageWhereUniqueInput_1.MessageWhereUniqueInput)
], MessageUpsertWithWhereUniqueWithoutConversationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageUpdateWithoutConversationInput_1.MessageUpdateWithoutConversationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageUpdateWithoutConversationInput_1.MessageUpdateWithoutConversationInput)
], MessageUpsertWithWhereUniqueWithoutConversationInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageCreateWithoutConversationInput_1.MessageCreateWithoutConversationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageCreateWithoutConversationInput_1.MessageCreateWithoutConversationInput)
], MessageUpsertWithWhereUniqueWithoutConversationInput.prototype, "create", void 0);
MessageUpsertWithWhereUniqueWithoutConversationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageUpsertWithWhereUniqueWithoutConversationInput", {
        isAbstract: true
    })
], MessageUpsertWithWhereUniqueWithoutConversationInput);
exports.MessageUpsertWithWhereUniqueWithoutConversationInput = MessageUpsertWithWhereUniqueWithoutConversationInput;
