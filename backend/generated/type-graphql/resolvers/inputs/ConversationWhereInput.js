"use strict";
var ConversationWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const MessageListRelationFilter_1 = require("../inputs/MessageListRelationFilter");
const PaticipantsListRelationFilter_1 = require("../inputs/PaticipantsListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let ConversationWhereInput = ConversationWhereInput_1 = class ConversationWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ConversationWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ConversationWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ConversationWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ConversationWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ConversationWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ConversationWhereInput.prototype, "secondaryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], ConversationWhereInput.prototype, "creator", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ConversationWhereInput.prototype, "creatorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], ConversationWhereInput.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ConversationWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ConversationWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageListRelationFilter_1.MessageListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageListRelationFilter_1.MessageListRelationFilter)
], ConversationWhereInput.prototype, "Message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsListRelationFilter_1.PaticipantsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsListRelationFilter_1.PaticipantsListRelationFilter)
], ConversationWhereInput.prototype, "Paticipants", void 0);
ConversationWhereInput = ConversationWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationWhereInput", {
        isAbstract: true
    })
], ConversationWhereInput);
exports.ConversationWhereInput = ConversationWhereInput;
