"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstConversationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationOrderByWithRelationInput_1 = require("../../../inputs/ConversationOrderByWithRelationInput");
const ConversationWhereInput_1 = require("../../../inputs/ConversationWhereInput");
const ConversationWhereUniqueInput_1 = require("../../../inputs/ConversationWhereUniqueInput");
const ConversationScalarFieldEnum_1 = require("../../../../enums/ConversationScalarFieldEnum");
let FindFirstConversationArgs = class FindFirstConversationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereInput_1.ConversationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationWhereInput_1.ConversationWhereInput)
], FindFirstConversationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationOrderByWithRelationInput_1.ConversationOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstConversationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereUniqueInput_1.ConversationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationWhereUniqueInput_1.ConversationWhereUniqueInput)
], FindFirstConversationArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstConversationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstConversationArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationScalarFieldEnum_1.ConversationScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstConversationArgs.prototype, "distinct", void 0);
FindFirstConversationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstConversationArgs);
exports.FindFirstConversationArgs = FindFirstConversationArgs;
