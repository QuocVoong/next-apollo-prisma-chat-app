"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ConversationCount = class ConversationCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ConversationCount.prototype, "Message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ConversationCount.prototype, "Paticipants", void 0);
ConversationCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ConversationCount", {
        isAbstract: true
    })
], ConversationCount);
exports.ConversationCount = ConversationCount;
