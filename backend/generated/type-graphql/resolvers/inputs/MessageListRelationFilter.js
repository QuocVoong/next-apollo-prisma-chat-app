"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageWhereInput_1 = require("../inputs/MessageWhereInput");
let MessageListRelationFilter = class MessageListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageWhereInput_1.MessageWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageWhereInput_1.MessageWhereInput)
], MessageListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageWhereInput_1.MessageWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageWhereInput_1.MessageWhereInput)
], MessageListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageWhereInput_1.MessageWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageWhereInput_1.MessageWhereInput)
], MessageListRelationFilter.prototype, "none", void 0);
MessageListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageListRelationFilter", {
        isAbstract: true
    })
], MessageListRelationFilter);
exports.MessageListRelationFilter = MessageListRelationFilter;
