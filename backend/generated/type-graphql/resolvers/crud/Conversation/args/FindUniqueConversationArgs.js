"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueConversationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationWhereUniqueInput_1 = require("../../../inputs/ConversationWhereUniqueInput");
let FindUniqueConversationArgs = class FindUniqueConversationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereUniqueInput_1.ConversationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationWhereUniqueInput_1.ConversationWhereUniqueInput)
], FindUniqueConversationArgs.prototype, "where", void 0);
FindUniqueConversationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueConversationArgs);
exports.FindUniqueConversationArgs = FindUniqueConversationArgs;
