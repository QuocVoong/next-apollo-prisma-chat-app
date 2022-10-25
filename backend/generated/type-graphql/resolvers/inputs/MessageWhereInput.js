"use strict";
var MessageWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const ConversationRelationFilter_1 = require("../inputs/ConversationRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let MessageWhereInput = MessageWhereInput_1 = class MessageWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MessageWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], MessageWhereInput.prototype, "fromUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MessageWhereInput.prototype, "from", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationRelationFilter_1.ConversationRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationRelationFilter_1.ConversationRelationFilter)
], MessageWhereInput.prototype, "conversation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MessageWhereInput.prototype, "conversationId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MessageWhereInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], MessageWhereInput.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MessageWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MessageWhereInput.prototype, "updatedAt", void 0);
MessageWhereInput = MessageWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageWhereInput", {
        isAbstract: true
    })
], MessageWhereInput);
exports.MessageWhereInput = MessageWhereInput;
