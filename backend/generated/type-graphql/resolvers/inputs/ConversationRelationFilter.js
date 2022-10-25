"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationWhereInput_1 = require("../inputs/ConversationWhereInput");
let ConversationRelationFilter = class ConversationRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereInput_1.ConversationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationWhereInput_1.ConversationWhereInput)
], ConversationRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereInput_1.ConversationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationWhereInput_1.ConversationWhereInput)
], ConversationRelationFilter.prototype, "isNot", void 0);
ConversationRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationRelationFilter", {
        isAbstract: true
    })
], ConversationRelationFilter);
exports.ConversationRelationFilter = ConversationRelationFilter;
