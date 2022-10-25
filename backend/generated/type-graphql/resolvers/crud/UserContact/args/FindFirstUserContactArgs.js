"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUserContactArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactOrderByWithRelationInput_1 = require("../../../inputs/UserContactOrderByWithRelationInput");
const UserContactWhereInput_1 = require("../../../inputs/UserContactWhereInput");
const UserContactWhereUniqueInput_1 = require("../../../inputs/UserContactWhereUniqueInput");
const UserContactScalarFieldEnum_1 = require("../../../../enums/UserContactScalarFieldEnum");
let FindFirstUserContactArgs = class FindFirstUserContactArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereInput_1.UserContactWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactWhereInput_1.UserContactWhereInput)
], FindFirstUserContactArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactOrderByWithRelationInput_1.UserContactOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstUserContactArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereUniqueInput_1.UserContactWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactWhereUniqueInput_1.UserContactWhereUniqueInput)
], FindFirstUserContactArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstUserContactArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstUserContactArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactScalarFieldEnum_1.UserContactScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstUserContactArgs.prototype, "distinct", void 0);
FindFirstUserContactArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstUserContactArgs);
exports.FindFirstUserContactArgs = FindFirstUserContactArgs;
