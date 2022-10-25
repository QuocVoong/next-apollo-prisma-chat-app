"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCreateOrConnectWithoutConversationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageCreateWithoutConversationInput_1 = require("../inputs/MessageCreateWithoutConversationInput");
const MessageWhereUniqueInput_1 = require("../inputs/MessageWhereUniqueInput");
let MessageCreateOrConnectWithoutConversationInput = class MessageCreateOrConnectWithoutConversationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageWhereUniqueInput_1.MessageWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageWhereUniqueInput_1.MessageWhereUniqueInput)
], MessageCreateOrConnectWithoutConversationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageCreateWithoutConversationInput_1.MessageCreateWithoutConversationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageCreateWithoutConversationInput_1.MessageCreateWithoutConversationInput)
], MessageCreateOrConnectWithoutConversationInput.prototype, "create", void 0);
MessageCreateOrConnectWithoutConversationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageCreateOrConnectWithoutConversationInput", {
        isAbstract: true
    })
], MessageCreateOrConnectWithoutConversationInput);
exports.MessageCreateOrConnectWithoutConversationInput = MessageCreateOrConnectWithoutConversationInput;
