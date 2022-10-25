"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpdateWithWhereUniqueWithoutConversationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageUpdateWithoutConversationInput_1 = require("../inputs/MessageUpdateWithoutConversationInput");
const MessageWhereUniqueInput_1 = require("../inputs/MessageWhereUniqueInput");
let MessageUpdateWithWhereUniqueWithoutConversationInput = class MessageUpdateWithWhereUniqueWithoutConversationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageWhereUniqueInput_1.MessageWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageWhereUniqueInput_1.MessageWhereUniqueInput)
], MessageUpdateWithWhereUniqueWithoutConversationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageUpdateWithoutConversationInput_1.MessageUpdateWithoutConversationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageUpdateWithoutConversationInput_1.MessageUpdateWithoutConversationInput)
], MessageUpdateWithWhereUniqueWithoutConversationInput.prototype, "data", void 0);
MessageUpdateWithWhereUniqueWithoutConversationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageUpdateWithWhereUniqueWithoutConversationInput", {
        isAbstract: true
    })
], MessageUpdateWithWhereUniqueWithoutConversationInput);
exports.MessageUpdateWithWhereUniqueWithoutConversationInput = MessageUpdateWithWhereUniqueWithoutConversationInput;
