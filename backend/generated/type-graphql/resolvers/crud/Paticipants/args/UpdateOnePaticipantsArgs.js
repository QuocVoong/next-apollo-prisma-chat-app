"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnePaticipantsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsUpdateInput_1 = require("../../../inputs/PaticipantsUpdateInput");
const PaticipantsWhereUniqueInput_1 = require("../../../inputs/PaticipantsWhereUniqueInput");
let UpdateOnePaticipantsArgs = class UpdateOnePaticipantsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsUpdateInput_1.PaticipantsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsUpdateInput_1.PaticipantsUpdateInput)
], UpdateOnePaticipantsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput)
], UpdateOnePaticipantsArgs.prototype, "where", void 0);
UpdateOnePaticipantsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOnePaticipantsArgs);
exports.UpdateOnePaticipantsArgs = UpdateOnePaticipantsArgs;
