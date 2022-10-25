"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationCreateOrConnectWithoutPaticipantsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateWithoutPaticipantsInput_1 = require("../inputs/ConversationCreateWithoutPaticipantsInput");
const ConversationWhereUniqueInput_1 = require("../inputs/ConversationWhereUniqueInput");
let ConversationCreateOrConnectWithoutPaticipantsInput = class ConversationCreateOrConnectWithoutPaticipantsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereUniqueInput_1.ConversationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationWhereUniqueInput_1.ConversationWhereUniqueInput)
], ConversationCreateOrConnectWithoutPaticipantsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateWithoutPaticipantsInput_1.ConversationCreateWithoutPaticipantsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationCreateWithoutPaticipantsInput_1.ConversationCreateWithoutPaticipantsInput)
], ConversationCreateOrConnectWithoutPaticipantsInput.prototype, "create", void 0);
ConversationCreateOrConnectWithoutPaticipantsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationCreateOrConnectWithoutPaticipantsInput", {
        isAbstract: true
    })
], ConversationCreateOrConnectWithoutPaticipantsInput);
exports.ConversationCreateOrConnectWithoutPaticipantsInput = ConversationCreateOrConnectWithoutPaticipantsInput;
