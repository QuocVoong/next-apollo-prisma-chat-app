"use strict";
var PaticipantsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationRelationFilter_1 = require("../inputs/ConversationRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let PaticipantsWhereInput = PaticipantsWhereInput_1 = class PaticipantsWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PaticipantsWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PaticipantsWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], PaticipantsWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PaticipantsWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationRelationFilter_1.ConversationRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationRelationFilter_1.ConversationRelationFilter)
], PaticipantsWhereInput.prototype, "conversation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PaticipantsWhereInput.prototype, "conversationId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PaticipantsWhereInput.prototype, "joinedDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PaticipantsWhereInput.prototype, "leftDate", void 0);
PaticipantsWhereInput = PaticipantsWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsWhereInput", {
        isAbstract: true
    })
], PaticipantsWhereInput);
exports.PaticipantsWhereInput = PaticipantsWhereInput;
