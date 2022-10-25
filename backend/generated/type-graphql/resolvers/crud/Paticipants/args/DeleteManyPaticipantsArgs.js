"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPaticipantsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsWhereInput_1 = require("../../../inputs/PaticipantsWhereInput");
let DeleteManyPaticipantsArgs = class DeleteManyPaticipantsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereInput_1.PaticipantsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereInput_1.PaticipantsWhereInput)
], DeleteManyPaticipantsArgs.prototype, "where", void 0);
DeleteManyPaticipantsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyPaticipantsArgs);
exports.DeleteManyPaticipantsArgs = DeleteManyPaticipantsArgs;
