"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPaticipantsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsUpdateManyMutationInput_1 = require("../../../inputs/PaticipantsUpdateManyMutationInput");
const PaticipantsWhereInput_1 = require("../../../inputs/PaticipantsWhereInput");
let UpdateManyPaticipantsArgs = class UpdateManyPaticipantsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsUpdateManyMutationInput_1.PaticipantsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsUpdateManyMutationInput_1.PaticipantsUpdateManyMutationInput)
], UpdateManyPaticipantsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereInput_1.PaticipantsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereInput_1.PaticipantsWhereInput)
], UpdateManyPaticipantsArgs.prototype, "where", void 0);
UpdateManyPaticipantsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyPaticipantsArgs);
exports.UpdateManyPaticipantsArgs = UpdateManyPaticipantsArgs;
