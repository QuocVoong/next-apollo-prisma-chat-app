"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyUserContactArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactOrderByWithRelationInput_1 = require("../../../inputs/UserContactOrderByWithRelationInput");
const UserContactWhereInput_1 = require("../../../inputs/UserContactWhereInput");
const UserContactWhereUniqueInput_1 = require("../../../inputs/UserContactWhereUniqueInput");
const UserContactScalarFieldEnum_1 = require("../../../../enums/UserContactScalarFieldEnum");
let FindManyUserContactArgs = class FindManyUserContactArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereInput_1.UserContactWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactWhereInput_1.UserContactWhereInput)
], FindManyUserContactArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactOrderByWithRelationInput_1.UserContactOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyUserContactArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereUniqueInput_1.UserContactWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactWhereUniqueInput_1.UserContactWhereUniqueInput)
], FindManyUserContactArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyUserContactArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyUserContactArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactScalarFieldEnum_1.UserContactScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyUserContactArgs.prototype, "distinct", void 0);
FindManyUserContactArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyUserContactArgs);
exports.FindManyUserContactArgs = FindManyUserContactArgs;
