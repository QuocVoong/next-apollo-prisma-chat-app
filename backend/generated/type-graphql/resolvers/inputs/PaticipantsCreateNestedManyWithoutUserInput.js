"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsCreateOrConnectWithoutUserInput_1 = require("../inputs/PaticipantsCreateOrConnectWithoutUserInput");
const PaticipantsCreateWithoutUserInput_1 = require("../inputs/PaticipantsCreateWithoutUserInput");
const PaticipantsWhereUniqueInput_1 = require("../inputs/PaticipantsWhereUniqueInput");
let PaticipantsCreateNestedManyWithoutUserInput = class PaticipantsCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsCreateWithoutUserInput_1.PaticipantsCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsCreateOrConnectWithoutUserInput_1.PaticipantsCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
PaticipantsCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], PaticipantsCreateNestedManyWithoutUserInput);
exports.PaticipantsCreateNestedManyWithoutUserInput = PaticipantsCreateNestedManyWithoutUserInput;
