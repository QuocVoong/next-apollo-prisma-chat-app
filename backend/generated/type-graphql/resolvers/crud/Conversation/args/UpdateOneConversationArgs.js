"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneConversationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationUpdateInput_1 = require("../../../inputs/ConversationUpdateInput");
const ConversationWhereUniqueInput_1 = require("../../../inputs/ConversationWhereUniqueInput");
let UpdateOneConversationArgs = class UpdateOneConversationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationUpdateInput_1.ConversationUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationUpdateInput_1.ConversationUpdateInput)
], UpdateOneConversationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereUniqueInput_1.ConversationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationWhereUniqueInput_1.ConversationWhereUniqueInput)
], UpdateOneConversationArgs.prototype, "where", void 0);
UpdateOneConversationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneConversationArgs);
exports.UpdateOneConversationArgs = UpdateOneConversationArgs;
