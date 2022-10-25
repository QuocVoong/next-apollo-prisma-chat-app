"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationPaticipantsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsOrderByWithRelationInput_1 = require("../../../inputs/PaticipantsOrderByWithRelationInput");
const PaticipantsWhereInput_1 = require("../../../inputs/PaticipantsWhereInput");
const PaticipantsWhereUniqueInput_1 = require("../../../inputs/PaticipantsWhereUniqueInput");
const PaticipantsScalarFieldEnum_1 = require("../../../../enums/PaticipantsScalarFieldEnum");
let ConversationPaticipantsArgs = class ConversationPaticipantsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereInput_1.PaticipantsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereInput_1.PaticipantsWhereInput)
], ConversationPaticipantsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsOrderByWithRelationInput_1.PaticipantsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ConversationPaticipantsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput)
], ConversationPaticipantsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ConversationPaticipantsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ConversationPaticipantsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsScalarFieldEnum_1.PaticipantsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ConversationPaticipantsArgs.prototype, "distinct", void 0);
ConversationPaticipantsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ConversationPaticipantsArgs);
exports.ConversationPaticipantsArgs = ConversationPaticipantsArgs;
