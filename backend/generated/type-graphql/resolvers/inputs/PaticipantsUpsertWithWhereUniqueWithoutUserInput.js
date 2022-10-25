"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsCreateWithoutUserInput_1 = require("../inputs/PaticipantsCreateWithoutUserInput");
const PaticipantsUpdateWithoutUserInput_1 = require("../inputs/PaticipantsUpdateWithoutUserInput");
const PaticipantsWhereUniqueInput_1 = require("../inputs/PaticipantsWhereUniqueInput");
let PaticipantsUpsertWithWhereUniqueWithoutUserInput = class PaticipantsUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput)
], PaticipantsUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsUpdateWithoutUserInput_1.PaticipantsUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsUpdateWithoutUserInput_1.PaticipantsUpdateWithoutUserInput)
], PaticipantsUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsCreateWithoutUserInput_1.PaticipantsCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsCreateWithoutUserInput_1.PaticipantsCreateWithoutUserInput)
], PaticipantsUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
PaticipantsUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], PaticipantsUpsertWithWhereUniqueWithoutUserInput);
exports.PaticipantsUpsertWithWhereUniqueWithoutUserInput = PaticipantsUpsertWithWhereUniqueWithoutUserInput;
