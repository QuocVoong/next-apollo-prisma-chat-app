"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPaticipantsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsCreateManyInput_1 = require("../../../inputs/PaticipantsCreateManyInput");
let CreateManyPaticipantsArgs = class CreateManyPaticipantsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsCreateManyInput_1.PaticipantsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyPaticipantsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyPaticipantsArgs.prototype, "skipDuplicates", void 0);
CreateManyPaticipantsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyPaticipantsArgs);
exports.CreateManyPaticipantsArgs = CreateManyPaticipantsArgs;
