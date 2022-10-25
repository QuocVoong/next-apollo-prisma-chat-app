"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneConversationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationWhereUniqueInput_1 = require("../../../inputs/ConversationWhereUniqueInput");
let DeleteOneConversationArgs = class DeleteOneConversationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereUniqueInput_1.ConversationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationWhereUniqueInput_1.ConversationWhereUniqueInput)
], DeleteOneConversationArgs.prototype, "where", void 0);
DeleteOneConversationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneConversationArgs);
exports.DeleteOneConversationArgs = DeleteOneConversationArgs;
