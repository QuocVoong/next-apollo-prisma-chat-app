"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PaticipantsCreateManyInput = class PaticipantsCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsCreateManyInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsCreateManyInput.prototype, "conversationId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PaticipantsCreateManyInput.prototype, "joinedDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PaticipantsCreateManyInput.prototype, "leftDate", void 0);
PaticipantsCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsCreateManyInput", {
        isAbstract: true
    })
], PaticipantsCreateManyInput);
exports.PaticipantsCreateManyInput = PaticipantsCreateManyInput;
