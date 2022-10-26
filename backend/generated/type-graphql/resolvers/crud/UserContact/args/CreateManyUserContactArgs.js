"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyUserContactArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactCreateManyInput_1 = require("../../../inputs/UserContactCreateManyInput");
let CreateManyUserContactArgs = class CreateManyUserContactArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactCreateManyInput_1.UserContactCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyUserContactArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyUserContactArgs.prototype, "skipDuplicates", void 0);
CreateManyUserContactArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyUserContactArgs);
exports.CreateManyUserContactArgs = CreateManyUserContactArgs;
