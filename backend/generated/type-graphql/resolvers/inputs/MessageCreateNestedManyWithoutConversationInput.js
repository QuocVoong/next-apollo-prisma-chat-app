"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCreateNestedManyWithoutConversationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageCreateManyConversationInputEnvelope_1 = require("../inputs/MessageCreateManyConversationInputEnvelope");
const MessageCreateOrConnectWithoutConversationInput_1 = require("../inputs/MessageCreateOrConnectWithoutConversationInput");
const MessageCreateWithoutConversationInput_1 = require("../inputs/MessageCreateWithoutConversationInput");
const MessageWhereUniqueInput_1 = require("../inputs/MessageWhereUniqueInput");
let MessageCreateNestedManyWithoutConversationInput = class MessageCreateNestedManyWithoutConversationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageCreateWithoutConversationInput_1.MessageCreateWithoutConversationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageCreateNestedManyWithoutConversationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutConversationInput_1.MessageCreateOrConnectWithoutConversationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageCreateNestedManyWithoutConversationInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageCreateManyConversationInputEnvelope_1.MessageCreateManyConversationInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageCreateManyConversationInputEnvelope_1.MessageCreateManyConversationInputEnvelope)
], MessageCreateNestedManyWithoutConversationInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageWhereUniqueInput_1.MessageWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageCreateNestedManyWithoutConversationInput.prototype, "connect", void 0);
MessageCreateNestedManyWithoutConversationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageCreateNestedManyWithoutConversationInput", {
        isAbstract: true
    })
], MessageCreateNestedManyWithoutConversationInput);
exports.MessageCreateNestedManyWithoutConversationInput = MessageCreateNestedManyWithoutConversationInput;
