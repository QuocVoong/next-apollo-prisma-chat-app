"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsCreateManyUserInput_1 = require("../inputs/PaticipantsCreateManyUserInput");
let PaticipantsCreateManyUserInputEnvelope = class PaticipantsCreateManyUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsCreateManyUserInput_1.PaticipantsCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PaticipantsCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
PaticipantsCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], PaticipantsCreateManyUserInputEnvelope);
exports.PaticipantsCreateManyUserInputEnvelope = PaticipantsCreateManyUserInputEnvelope;
