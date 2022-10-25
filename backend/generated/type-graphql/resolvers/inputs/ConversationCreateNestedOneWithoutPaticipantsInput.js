"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationCreateNestedOneWithoutPaticipantsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateOrConnectWithoutPaticipantsInput_1 = require("../inputs/ConversationCreateOrConnectWithoutPaticipantsInput");
const ConversationCreateWithoutPaticipantsInput_1 = require("../inputs/ConversationCreateWithoutPaticipantsInput");
const ConversationWhereUniqueInput_1 = require("../inputs/ConversationWhereUniqueInput");
let ConversationCreateNestedOneWithoutPaticipantsInput = class ConversationCreateNestedOneWithoutPaticipantsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateWithoutPaticipantsInput_1.ConversationCreateWithoutPaticipantsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationCreateWithoutPaticipantsInput_1.ConversationCreateWithoutPaticipantsInput)
], ConversationCreateNestedOneWithoutPaticipantsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateOrConnectWithoutPaticipantsInput_1.ConversationCreateOrConnectWithoutPaticipantsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationCreateOrConnectWithoutPaticipantsInput_1.ConversationCreateOrConnectWithoutPaticipantsInput)
], ConversationCreateNestedOneWithoutPaticipantsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereUniqueInput_1.ConversationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationWhereUniqueInput_1.ConversationWhereUniqueInput)
], ConversationCreateNestedOneWithoutPaticipantsInput.prototype, "connect", void 0);
ConversationCreateNestedOneWithoutPaticipantsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationCreateNestedOneWithoutPaticipantsInput", {
        isAbstract: true
    })
], ConversationCreateNestedOneWithoutPaticipantsInput);
exports.ConversationCreateNestedOneWithoutPaticipantsInput = ConversationCreateNestedOneWithoutPaticipantsInput;
