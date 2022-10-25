"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationCreateOrConnectWithoutMessageInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateWithoutMessageInput_1 = require("../inputs/ConversationCreateWithoutMessageInput");
const ConversationWhereUniqueInput_1 = require("../inputs/ConversationWhereUniqueInput");
let ConversationCreateOrConnectWithoutMessageInput = class ConversationCreateOrConnectWithoutMessageInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereUniqueInput_1.ConversationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationWhereUniqueInput_1.ConversationWhereUniqueInput)
], ConversationCreateOrConnectWithoutMessageInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateWithoutMessageInput_1.ConversationCreateWithoutMessageInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationCreateWithoutMessageInput_1.ConversationCreateWithoutMessageInput)
], ConversationCreateOrConnectWithoutMessageInput.prototype, "create", void 0);
ConversationCreateOrConnectWithoutMessageInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationCreateOrConnectWithoutMessageInput", {
        isAbstract: true
    })
], ConversationCreateOrConnectWithoutMessageInput);
exports.ConversationCreateOrConnectWithoutMessageInput = ConversationCreateOrConnectWithoutMessageInput;
