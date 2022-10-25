"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOwnerContactArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactOrderByWithRelationInput_1 = require("../../../inputs/UserContactOrderByWithRelationInput");
const UserContactWhereInput_1 = require("../../../inputs/UserContactWhereInput");
const UserContactWhereUniqueInput_1 = require("../../../inputs/UserContactWhereUniqueInput");
const UserContactScalarFieldEnum_1 = require("../../../../enums/UserContactScalarFieldEnum");
let UserOwnerContactArgs = class UserOwnerContactArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereInput_1.UserContactWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactWhereInput_1.UserContactWhereInput)
], UserOwnerContactArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactOrderByWithRelationInput_1.UserContactOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserOwnerContactArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereUniqueInput_1.UserContactWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactWhereUniqueInput_1.UserContactWhereUniqueInput)
], UserOwnerContactArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserOwnerContactArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserOwnerContactArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactScalarFieldEnum_1.UserContactScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserOwnerContactArgs.prototype, "distinct", void 0);
UserOwnerContactArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserOwnerContactArgs);
exports.UserOwnerContactArgs = UserOwnerContactArgs;
