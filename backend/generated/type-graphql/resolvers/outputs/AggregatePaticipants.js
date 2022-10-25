"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePaticipants = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsCountAggregate_1 = require("../outputs/PaticipantsCountAggregate");
const PaticipantsMaxAggregate_1 = require("../outputs/PaticipantsMaxAggregate");
const PaticipantsMinAggregate_1 = require("../outputs/PaticipantsMinAggregate");
let AggregatePaticipants = class AggregatePaticipants {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsCountAggregate_1.PaticipantsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsCountAggregate_1.PaticipantsCountAggregate)
], AggregatePaticipants.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsMinAggregate_1.PaticipantsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsMinAggregate_1.PaticipantsMinAggregate)
], AggregatePaticipants.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsMaxAggregate_1.PaticipantsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsMaxAggregate_1.PaticipantsMaxAggregate)
], AggregatePaticipants.prototype, "_max", void 0);
AggregatePaticipants = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregatePaticipants", {
        isAbstract: true
    })
], AggregatePaticipants);
exports.AggregatePaticipants = AggregatePaticipants;
