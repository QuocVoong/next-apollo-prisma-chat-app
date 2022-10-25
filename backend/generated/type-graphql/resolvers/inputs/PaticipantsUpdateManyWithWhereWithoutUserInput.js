"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsScalarWhereInput_1 = require("../inputs/PaticipantsScalarWhereInput");
const PaticipantsUpdateManyMutationInput_1 = require("../inputs/PaticipantsUpdateManyMutationInput");
let PaticipantsUpdateManyWithWhereWithoutUserInput = class PaticipantsUpdateManyWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsScalarWhereInput_1.PaticipantsScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsScalarWhereInput_1.PaticipantsScalarWhereInput)
], PaticipantsUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsUpdateManyMutationInput_1.PaticipantsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsUpdateManyMutationInput_1.PaticipantsUpdateManyMutationInput)
], PaticipantsUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
PaticipantsUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], PaticipantsUpdateManyWithWhereWithoutUserInput);
exports.PaticipantsUpdateManyWithWhereWithoutUserInput = PaticipantsUpdateManyWithWhereWithoutUserInput;
