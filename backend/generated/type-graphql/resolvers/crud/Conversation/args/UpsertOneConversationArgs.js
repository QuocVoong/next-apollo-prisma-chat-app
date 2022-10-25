"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneConversationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateInput_1 = require("../../../inputs/ConversationCreateInput");
const ConversationUpdateInput_1 = require("../../../inputs/ConversationUpdateInput");
const ConversationWhereUniqueInput_1 = require("../../../inputs/ConversationWhereUniqueInput");
let UpsertOneConversationArgs = class UpsertOneConversationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereUniqueInput_1.ConversationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationWhereUniqueInput_1.ConversationWhereUniqueInput)
], UpsertOneConversationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateInput_1.ConversationCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationCreateInput_1.ConversationCreateInput)
], UpsertOneConversationArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationUpdateInput_1.ConversationUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationUpdateInput_1.ConversationUpdateInput)
], UpsertOneConversationArgs.prototype, "update", void 0);
UpsertOneConversationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneConversationArgs);
exports.UpsertOneConversationArgs = UpsertOneConversationArgs;
