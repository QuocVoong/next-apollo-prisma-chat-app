"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyUserContactArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactWhereInput_1 = require("../../../inputs/UserContactWhereInput");
let DeleteManyUserContactArgs = class DeleteManyUserContactArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereInput_1.UserContactWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactWhereInput_1.UserContactWhereInput)
], DeleteManyUserContactArgs.prototype, "where", void 0);
DeleteManyUserContactArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyUserContactArgs);
exports.DeleteManyUserContactArgs = DeleteManyUserContactArgs;
