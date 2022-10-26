"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationCreateManyCreatorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ConversationCreateManyCreatorInput = class ConversationCreateManyCreatorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationCreateManyCreatorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationCreateManyCreatorInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationCreateManyCreatorInput.prototype, "secondaryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ConversationCreateManyCreatorInput.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ConversationCreateManyCreatorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ConversationCreateManyCreatorInput.prototype, "updatedAt", void 0);
ConversationCreateManyCreatorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationCreateManyCreatorInput", {
        isAbstract: true
    })
], ConversationCreateManyCreatorInput);
exports.ConversationCreateManyCreatorInput = ConversationCreateManyCreatorInput;
