"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsCountAggregate_1 = require("../outputs/PaticipantsCountAggregate");
const PaticipantsMaxAggregate_1 = require("../outputs/PaticipantsMaxAggregate");
const PaticipantsMinAggregate_1 = require("../outputs/PaticipantsMinAggregate");
let PaticipantsGroupBy = class PaticipantsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsGroupBy.prototype, "conversationId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PaticipantsGroupBy.prototype, "joinedDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PaticipantsGroupBy.prototype, "leftDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsCountAggregate_1.PaticipantsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsCountAggregate_1.PaticipantsCountAggregate)
], PaticipantsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsMinAggregate_1.PaticipantsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsMinAggregate_1.PaticipantsMinAggregate)
], PaticipantsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsMaxAggregate_1.PaticipantsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsMaxAggregate_1.PaticipantsMaxAggregate)
], PaticipantsGroupBy.prototype, "_max", void 0);
PaticipantsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PaticipantsGroupBy", {
        isAbstract: true
    })
], PaticipantsGroupBy);
exports.PaticipantsGroupBy = PaticipantsGroupBy;
