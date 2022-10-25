"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpdateManyWithWhereWithoutConversationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageScalarWhereInput_1 = require("../inputs/MessageScalarWhereInput");
const MessageUpdateManyMutationInput_1 = require("../inputs/MessageUpdateManyMutationInput");
let MessageUpdateManyWithWhereWithoutConversationInput = class MessageUpdateManyWithWhereWithoutConversationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageScalarWhereInput_1.MessageScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageScalarWhereInput_1.MessageScalarWhereInput)
], MessageUpdateManyWithWhereWithoutConversationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageUpdateManyMutationInput_1.MessageUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageUpdateManyMutationInput_1.MessageUpdateManyMutationInput)
], MessageUpdateManyWithWhereWithoutConversationInput.prototype, "data", void 0);
MessageUpdateManyWithWhereWithoutConversationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageUpdateManyWithWhereWithoutConversationInput", {
        isAbstract: true
    })
], MessageUpdateManyWithWhereWithoutConversationInput);
exports.MessageUpdateManyWithWhereWithoutConversationInput = MessageUpdateManyWithWhereWithoutConversationInput;
