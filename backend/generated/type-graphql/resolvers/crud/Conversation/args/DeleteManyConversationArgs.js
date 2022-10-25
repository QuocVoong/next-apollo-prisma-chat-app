"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyConversationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationWhereInput_1 = require("../../../inputs/ConversationWhereInput");
let DeleteManyConversationArgs = class DeleteManyConversationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereInput_1.ConversationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationWhereInput_1.ConversationWhereInput)
], DeleteManyConversationArgs.prototype, "where", void 0);
DeleteManyConversationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyConversationArgs);
exports.DeleteManyConversationArgs = DeleteManyConversationArgs;
