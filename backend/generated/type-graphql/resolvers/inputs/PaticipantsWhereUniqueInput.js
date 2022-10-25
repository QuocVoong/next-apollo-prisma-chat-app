"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PaticipantsWhereUniqueInput = class PaticipantsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsWhereUniqueInput.prototype, "id", void 0);
PaticipantsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsWhereUniqueInput", {
        isAbstract: true
    })
], PaticipantsWhereUniqueInput);
exports.PaticipantsWhereUniqueInput = PaticipantsWhereUniqueInput;
