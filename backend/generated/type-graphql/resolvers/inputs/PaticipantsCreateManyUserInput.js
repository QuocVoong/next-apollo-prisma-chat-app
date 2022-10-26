"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PaticipantsCreateManyUserInput = class PaticipantsCreateManyUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsCreateManyUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsCreateManyUserInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsCreateManyUserInput.prototype, "conversationId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PaticipantsCreateManyUserInput.prototype, "joinedDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PaticipantsCreateManyUserInput.prototype, "leftDate", void 0);
PaticipantsCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsCreateManyUserInput", {
        isAbstract: true
    })
], PaticipantsCreateManyUserInput);
exports.PaticipantsCreateManyUserInput = PaticipantsCreateManyUserInput;
