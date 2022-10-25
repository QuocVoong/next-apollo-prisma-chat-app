"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnePaticipantsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsCreateInput_1 = require("../../../inputs/PaticipantsCreateInput");
let CreateOnePaticipantsArgs = class CreateOnePaticipantsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsCreateInput_1.PaticipantsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsCreateInput_1.PaticipantsCreateInput)
], CreateOnePaticipantsArgs.prototype, "data", void 0);
CreateOnePaticipantsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOnePaticipantsArgs);
exports.CreateOnePaticipantsArgs = CreateOnePaticipantsArgs;
