"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsWhereInput_1 = require("../inputs/PaticipantsWhereInput");
let PaticipantsListRelationFilter = class PaticipantsListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereInput_1.PaticipantsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereInput_1.PaticipantsWhereInput)
], PaticipantsListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereInput_1.PaticipantsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereInput_1.PaticipantsWhereInput)
], PaticipantsListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereInput_1.PaticipantsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereInput_1.PaticipantsWhereInput)
], PaticipantsListRelationFilter.prototype, "none", void 0);
PaticipantsListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsListRelationFilter", {
        isAbstract: true
    })
], PaticipantsListRelationFilter);
exports.PaticipantsListRelationFilter = PaticipantsListRelationFilter;
