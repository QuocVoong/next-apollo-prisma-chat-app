"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsCreateWithoutUserInput_1 = require("../inputs/PaticipantsCreateWithoutUserInput");
const PaticipantsWhereUniqueInput_1 = require("../inputs/PaticipantsWhereUniqueInput");
let PaticipantsCreateOrConnectWithoutUserInput = class PaticipantsCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput)
], PaticipantsCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsCreateWithoutUserInput_1.PaticipantsCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsCreateWithoutUserInput_1.PaticipantsCreateWithoutUserInput)
], PaticipantsCreateOrConnectWithoutUserInput.prototype, "create", void 0);
PaticipantsCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], PaticipantsCreateOrConnectWithoutUserInput);
exports.PaticipantsCreateOrConnectWithoutUserInput = PaticipantsCreateOrConnectWithoutUserInput;
