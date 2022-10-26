"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsCreateManyConversationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PaticipantsCreateManyConversationInput = class PaticipantsCreateManyConversationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsCreateManyConversationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsCreateManyConversationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsCreateManyConversationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PaticipantsCreateManyConversationInput.prototype, "joinedDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PaticipantsCreateManyConversationInput.prototype, "leftDate", void 0);
PaticipantsCreateManyConversationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsCreateManyConversationInput", {
        isAbstract: true
    })
], PaticipantsCreateManyConversationInput);
exports.PaticipantsCreateManyConversationInput = PaticipantsCreateManyConversationInput;
