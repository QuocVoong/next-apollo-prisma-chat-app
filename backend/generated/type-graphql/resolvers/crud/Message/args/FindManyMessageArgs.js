"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyMessageArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageOrderByWithRelationInput_1 = require("../../../inputs/MessageOrderByWithRelationInput");
const MessageWhereInput_1 = require("../../../inputs/MessageWhereInput");
const MessageWhereUniqueInput_1 = require("../../../inputs/MessageWhereUniqueInput");
const MessageScalarFieldEnum_1 = require("../../../../enums/MessageScalarFieldEnum");
let FindManyMessageArgs = class FindManyMessageArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageWhereInput_1.MessageWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageWhereInput_1.MessageWhereInput)
], FindManyMessageArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageOrderByWithRelationInput_1.MessageOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyMessageArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageWhereUniqueInput_1.MessageWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageWhereUniqueInput_1.MessageWhereUniqueInput)
], FindManyMessageArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyMessageArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyMessageArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageScalarFieldEnum_1.MessageScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyMessageArgs.prototype, "distinct", void 0);
FindManyMessageArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyMessageArgs);
exports.FindManyMessageArgs = FindManyMessageArgs;
