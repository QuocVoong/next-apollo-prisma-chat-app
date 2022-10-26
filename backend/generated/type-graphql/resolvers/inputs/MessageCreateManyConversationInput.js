"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCreateManyConversationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MessageCreateManyConversationInput = class MessageCreateManyConversationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageCreateManyConversationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MessageCreateManyConversationInput.prototype, "from", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MessageCreateManyConversationInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MessageCreateManyConversationInput.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MessageCreateManyConversationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MessageCreateManyConversationInput.prototype, "updatedAt", void 0);
MessageCreateManyConversationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageCreateManyConversationInput", {
        isAbstract: true
    })
], MessageCreateManyConversationInput);
exports.MessageCreateManyConversationInput = MessageCreateManyConversationInput;
