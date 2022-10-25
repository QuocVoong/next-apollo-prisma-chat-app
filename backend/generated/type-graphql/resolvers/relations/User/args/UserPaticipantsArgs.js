"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPaticipantsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsOrderByWithRelationInput_1 = require("../../../inputs/PaticipantsOrderByWithRelationInput");
const PaticipantsWhereInput_1 = require("../../../inputs/PaticipantsWhereInput");
const PaticipantsWhereUniqueInput_1 = require("../../../inputs/PaticipantsWhereUniqueInput");
const PaticipantsScalarFieldEnum_1 = require("../../../../enums/PaticipantsScalarFieldEnum");
let UserPaticipantsArgs = class UserPaticipantsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereInput_1.PaticipantsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereInput_1.PaticipantsWhereInput)
], UserPaticipantsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsOrderByWithRelationInput_1.PaticipantsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserPaticipantsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput)
], UserPaticipantsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserPaticipantsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserPaticipantsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsScalarFieldEnum_1.PaticipantsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserPaticipantsArgs.prototype, "distinct", void 0);
UserPaticipantsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserPaticipantsArgs);
exports.UserPaticipantsArgs = UserPaticipantsArgs;
