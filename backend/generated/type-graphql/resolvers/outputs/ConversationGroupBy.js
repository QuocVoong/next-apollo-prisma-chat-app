"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCountAggregate_1 = require("../outputs/ConversationCountAggregate");
const ConversationMaxAggregate_1 = require("../outputs/ConversationMaxAggregate");
const ConversationMinAggregate_1 = require("../outputs/ConversationMinAggregate");
let ConversationGroupBy = class ConversationGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ConversationGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationGroupBy.prototype, "secondaryName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ConversationGroupBy.prototype, "creatorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], ConversationGroupBy.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ConversationGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ConversationGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCountAggregate_1.ConversationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationCountAggregate_1.ConversationCountAggregate)
], ConversationGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationMinAggregate_1.ConversationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationMinAggregate_1.ConversationMinAggregate)
], ConversationGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationMaxAggregate_1.ConversationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationMaxAggregate_1.ConversationMaxAggregate)
], ConversationGroupBy.prototype, "_max", void 0);
ConversationGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ConversationGroupBy", {
        isAbstract: true
    })
], ConversationGroupBy);
exports.ConversationGroupBy = ConversationGroupBy;
