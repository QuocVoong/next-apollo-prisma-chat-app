"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyConversationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationUpdateManyMutationInput_1 = require("../../../inputs/ConversationUpdateManyMutationInput");
const ConversationWhereInput_1 = require("../../../inputs/ConversationWhereInput");
let UpdateManyConversationArgs = class UpdateManyConversationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationUpdateManyMutationInput_1.ConversationUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationUpdateManyMutationInput_1.ConversationUpdateManyMutationInput)
], UpdateManyConversationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereInput_1.ConversationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationWhereInput_1.ConversationWhereInput)
], UpdateManyConversationArgs.prototype, "where", void 0);
UpdateManyConversationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyConversationArgs);
exports.UpdateManyConversationArgs = UpdateManyConversationArgs;
