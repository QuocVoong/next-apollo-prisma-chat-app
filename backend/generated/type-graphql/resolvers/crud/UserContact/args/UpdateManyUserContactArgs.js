"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyUserContactArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactUpdateManyMutationInput_1 = require("../../../inputs/UserContactUpdateManyMutationInput");
const UserContactWhereInput_1 = require("../../../inputs/UserContactWhereInput");
let UpdateManyUserContactArgs = class UpdateManyUserContactArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactUpdateManyMutationInput_1.UserContactUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactUpdateManyMutationInput_1.UserContactUpdateManyMutationInput)
], UpdateManyUserContactArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereInput_1.UserContactWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactWhereInput_1.UserContactWhereInput)
], UpdateManyUserContactArgs.prototype, "where", void 0);
UpdateManyUserContactArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyUserContactArgs);
exports.UpdateManyUserContactArgs = UpdateManyUserContactArgs;
