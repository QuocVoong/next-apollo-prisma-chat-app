"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePaticipantsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsOrderByWithRelationInput_1 = require("../../../inputs/PaticipantsOrderByWithRelationInput");
const PaticipantsWhereInput_1 = require("../../../inputs/PaticipantsWhereInput");
const PaticipantsWhereUniqueInput_1 = require("../../../inputs/PaticipantsWhereUniqueInput");
let AggregatePaticipantsArgs = class AggregatePaticipantsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereInput_1.PaticipantsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereInput_1.PaticipantsWhereInput)
], AggregatePaticipantsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsOrderByWithRelationInput_1.PaticipantsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregatePaticipantsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput)
], AggregatePaticipantsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePaticipantsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePaticipantsArgs.prototype, "skip", void 0);
AggregatePaticipantsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregatePaticipantsArgs);
exports.AggregatePaticipantsArgs = AggregatePaticipantsArgs;
