"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUserContact = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactCountAggregate_1 = require("../outputs/UserContactCountAggregate");
const UserContactMaxAggregate_1 = require("../outputs/UserContactMaxAggregate");
const UserContactMinAggregate_1 = require("../outputs/UserContactMinAggregate");
let AggregateUserContact = class AggregateUserContact {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactCountAggregate_1.UserContactCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactCountAggregate_1.UserContactCountAggregate)
], AggregateUserContact.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactMinAggregate_1.UserContactMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactMinAggregate_1.UserContactMinAggregate)
], AggregateUserContact.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactMaxAggregate_1.UserContactMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactMaxAggregate_1.UserContactMaxAggregate)
], AggregateUserContact.prototype, "_max", void 0);
AggregateUserContact = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateUserContact", {
        isAbstract: true
    })
], AggregateUserContact);
exports.AggregateUserContact = AggregateUserContact;
