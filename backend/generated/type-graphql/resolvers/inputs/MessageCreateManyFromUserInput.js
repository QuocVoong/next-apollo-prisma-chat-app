"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCreateManyFromUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MessageCreateManyFromUserInput = class MessageCreateManyFromUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageCreateManyFromUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MessageCreateManyFromUserInput.prototype, "conversationId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MessageCreateManyFromUserInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MessageCreateManyFromUserInput.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MessageCreateManyFromUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MessageCreateManyFromUserInput.prototype, "updatedAt", void 0);
MessageCreateManyFromUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageCreateManyFromUserInput", {
        isAbstract: true
    })
], MessageCreateManyFromUserInput);
exports.MessageCreateManyFromUserInput = MessageCreateManyFromUserInput;
