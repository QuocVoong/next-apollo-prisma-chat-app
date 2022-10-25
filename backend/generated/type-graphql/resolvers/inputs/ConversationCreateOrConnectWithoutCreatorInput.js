"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationCreateOrConnectWithoutCreatorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateWithoutCreatorInput_1 = require("../inputs/ConversationCreateWithoutCreatorInput");
const ConversationWhereUniqueInput_1 = require("../inputs/ConversationWhereUniqueInput");
let ConversationCreateOrConnectWithoutCreatorInput = class ConversationCreateOrConnectWithoutCreatorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereUniqueInput_1.ConversationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationWhereUniqueInput_1.ConversationWhereUniqueInput)
], ConversationCreateOrConnectWithoutCreatorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateWithoutCreatorInput_1.ConversationCreateWithoutCreatorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationCreateWithoutCreatorInput_1.ConversationCreateWithoutCreatorInput)
], ConversationCreateOrConnectWithoutCreatorInput.prototype, "create", void 0);
ConversationCreateOrConnectWithoutCreatorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationCreateOrConnectWithoutCreatorInput", {
        isAbstract: true
    })
], ConversationCreateOrConnectWithoutCreatorInput);
exports.ConversationCreateOrConnectWithoutCreatorInput = ConversationCreateOrConnectWithoutCreatorInput;
