"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOnePaticipantsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsCreateInput_1 = require("../../../inputs/PaticipantsCreateInput");
const PaticipantsUpdateInput_1 = require("../../../inputs/PaticipantsUpdateInput");
const PaticipantsWhereUniqueInput_1 = require("../../../inputs/PaticipantsWhereUniqueInput");
let UpsertOnePaticipantsArgs = class UpsertOnePaticipantsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput)
], UpsertOnePaticipantsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsCreateInput_1.PaticipantsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsCreateInput_1.PaticipantsCreateInput)
], UpsertOnePaticipantsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsUpdateInput_1.PaticipantsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsUpdateInput_1.PaticipantsUpdateInput)
], UpsertOnePaticipantsArgs.prototype, "update", void 0);
UpsertOnePaticipantsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOnePaticipantsArgs);
exports.UpsertOnePaticipantsArgs = UpsertOnePaticipantsArgs;
