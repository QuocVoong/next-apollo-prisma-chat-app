"use strict";
var UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const ConversationListRelationFilter_1 = require("../inputs/ConversationListRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const MessageListRelationFilter_1 = require("../inputs/MessageListRelationFilter");
const PaticipantsListRelationFilter_1 = require("../inputs/PaticipantsListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserContactListRelationFilter_1 = require("../inputs/UserContactListRelationFilter");
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], UserWhereInput.prototype, "isAdmin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], UserWhereInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], UserWhereInput.prototype, "count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageListRelationFilter_1.MessageListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageListRelationFilter_1.MessageListRelationFilter)
], UserWhereInput.prototype, "Message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsListRelationFilter_1.PaticipantsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsListRelationFilter_1.PaticipantsListRelationFilter)
], UserWhereInput.prototype, "Paticipants", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactListRelationFilter_1.UserContactListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactListRelationFilter_1.UserContactListRelationFilter)
], UserWhereInput.prototype, "ownerContact", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactListRelationFilter_1.UserContactListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactListRelationFilter_1.UserContactListRelationFilter)
], UserWhereInput.prototype, "contactUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationListRelationFilter_1.ConversationListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationListRelationFilter_1.ConversationListRelationFilter)
], UserWhereInput.prototype, "Conversation", void 0);
UserWhereInput = UserWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("UserWhereInput", {
        isAbstract: true
    })
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
