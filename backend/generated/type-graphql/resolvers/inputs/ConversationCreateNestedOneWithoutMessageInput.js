"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationCreateNestedOneWithoutMessageInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateOrConnectWithoutMessageInput_1 = require("../inputs/ConversationCreateOrConnectWithoutMessageInput");
const ConversationCreateWithoutMessageInput_1 = require("../inputs/ConversationCreateWithoutMessageInput");
const ConversationWhereUniqueInput_1 = require("../inputs/ConversationWhereUniqueInput");
let ConversationCreateNestedOneWithoutMessageInput = class ConversationCreateNestedOneWithoutMessageInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateWithoutMessageInput_1.ConversationCreateWithoutMessageInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationCreateWithoutMessageInput_1.ConversationCreateWithoutMessageInput)
], ConversationCreateNestedOneWithoutMessageInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateOrConnectWithoutMessageInput_1.ConversationCreateOrConnectWithoutMessageInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationCreateOrConnectWithoutMessageInput_1.ConversationCreateOrConnectWithoutMessageInput)
], ConversationCreateNestedOneWithoutMessageInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereUniqueInput_1.ConversationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationWhereUniqueInput_1.ConversationWhereUniqueInput)
], ConversationCreateNestedOneWithoutMessageInput.prototype, "connect", void 0);
ConversationCreateNestedOneWithoutMessageInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationCreateNestedOneWithoutMessageInput", {
        isAbstract: true
    })
], ConversationCreateNestedOneWithoutMessageInput);
exports.ConversationCreateNestedOneWithoutMessageInput = ConversationCreateNestedOneWithoutMessageInput;
