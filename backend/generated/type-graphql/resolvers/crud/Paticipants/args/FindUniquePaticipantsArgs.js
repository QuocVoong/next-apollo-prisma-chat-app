"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePaticipantsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsWhereUniqueInput_1 = require("../../../inputs/PaticipantsWhereUniqueInput");
let FindUniquePaticipantsArgs = class FindUniquePaticipantsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput)
], FindUniquePaticipantsArgs.prototype, "where", void 0);
FindUniquePaticipantsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniquePaticipantsArgs);
exports.FindUniquePaticipantsArgs = FindUniquePaticipantsArgs;
