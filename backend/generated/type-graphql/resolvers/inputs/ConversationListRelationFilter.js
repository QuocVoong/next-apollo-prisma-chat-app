"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationWhereInput_1 = require("../inputs/ConversationWhereInput");
let ConversationListRelationFilter = class ConversationListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereInput_1.ConversationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationWhereInput_1.ConversationWhereInput)
], ConversationListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereInput_1.ConversationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationWhereInput_1.ConversationWhereInput)
], ConversationListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereInput_1.ConversationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationWhereInput_1.ConversationWhereInput)
], ConversationListRelationFilter.prototype, "none", void 0);
ConversationListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationListRelationFilter", {
        isAbstract: true
    })
], ConversationListRelationFilter);
exports.ConversationListRelationFilter = ConversationListRelationFilter;
