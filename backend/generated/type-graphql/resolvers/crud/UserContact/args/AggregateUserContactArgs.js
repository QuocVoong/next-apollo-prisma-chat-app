"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUserContactArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactOrderByWithRelationInput_1 = require("../../../inputs/UserContactOrderByWithRelationInput");
const UserContactWhereInput_1 = require("../../../inputs/UserContactWhereInput");
const UserContactWhereUniqueInput_1 = require("../../../inputs/UserContactWhereUniqueInput");
let AggregateUserContactArgs = class AggregateUserContactArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereInput_1.UserContactWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactWhereInput_1.UserContactWhereInput)
], AggregateUserContactArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactOrderByWithRelationInput_1.UserContactOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateUserContactArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereUniqueInput_1.UserContactWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactWhereUniqueInput_1.UserContactWhereUniqueInput)
], AggregateUserContactArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateUserContactArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateUserContactArgs.prototype, "skip", void 0);
AggregateUserContactArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateUserContactArgs);
exports.AggregateUserContactArgs = AggregateUserContactArgs;
