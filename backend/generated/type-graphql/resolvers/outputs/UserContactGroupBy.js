"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactCountAggregate_1 = require("../outputs/UserContactCountAggregate");
const UserContactMaxAggregate_1 = require("../outputs/UserContactMaxAggregate");
const UserContactMinAggregate_1 = require("../outputs/UserContactMinAggregate");
let UserContactGroupBy = class UserContactGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserContactGroupBy.prototype, "ownerContactId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserContactGroupBy.prototype, "contactId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserContactGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactGroupBy.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactGroupBy.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactGroupBy.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactGroupBy.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactGroupBy.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactCountAggregate_1.UserContactCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactCountAggregate_1.UserContactCountAggregate)
], UserContactGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactMinAggregate_1.UserContactMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactMinAggregate_1.UserContactMinAggregate)
], UserContactGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactMaxAggregate_1.UserContactMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactMaxAggregate_1.UserContactMaxAggregate)
], UserContactGroupBy.prototype, "_max", void 0);
UserContactGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserContactGroupBy", {
        isAbstract: true
    })
], UserContactGroupBy);
exports.UserContactGroupBy = UserContactGroupBy;
