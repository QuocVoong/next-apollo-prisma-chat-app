"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUserContactArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactOrderByWithAggregationInput_1 = require("../../../inputs/UserContactOrderByWithAggregationInput");
const UserContactScalarWhereWithAggregatesInput_1 = require("../../../inputs/UserContactScalarWhereWithAggregatesInput");
const UserContactWhereInput_1 = require("../../../inputs/UserContactWhereInput");
const UserContactScalarFieldEnum_1 = require("../../../../enums/UserContactScalarFieldEnum");
let GroupByUserContactArgs = class GroupByUserContactArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereInput_1.UserContactWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactWhereInput_1.UserContactWhereInput)
], GroupByUserContactArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactOrderByWithAggregationInput_1.UserContactOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByUserContactArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactScalarFieldEnum_1.UserContactScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByUserContactArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactScalarWhereWithAggregatesInput_1.UserContactScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactScalarWhereWithAggregatesInput_1.UserContactScalarWhereWithAggregatesInput)
], GroupByUserContactArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByUserContactArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByUserContactArgs.prototype, "skip", void 0);
GroupByUserContactArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByUserContactArgs);
exports.GroupByUserContactArgs = GroupByUserContactArgs;
