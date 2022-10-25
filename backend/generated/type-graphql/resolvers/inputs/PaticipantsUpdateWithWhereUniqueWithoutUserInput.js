"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsUpdateWithoutUserInput_1 = require("../inputs/PaticipantsUpdateWithoutUserInput");
const PaticipantsWhereUniqueInput_1 = require("../inputs/PaticipantsWhereUniqueInput");
let PaticipantsUpdateWithWhereUniqueWithoutUserInput = class PaticipantsUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput)
], PaticipantsUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsUpdateWithoutUserInput_1.PaticipantsUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsUpdateWithoutUserInput_1.PaticipantsUpdateWithoutUserInput)
], PaticipantsUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
PaticipantsUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], PaticipantsUpdateWithWhereUniqueWithoutUserInput);
exports.PaticipantsUpdateWithWhereUniqueWithoutUserInput = PaticipantsUpdateWithWhereUniqueWithoutUserInput;
