"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactCountOrderByAggregateInput_1 = require("../inputs/UserContactCountOrderByAggregateInput");
const UserContactMaxOrderByAggregateInput_1 = require("../inputs/UserContactMaxOrderByAggregateInput");
const UserContactMinOrderByAggregateInput_1 = require("../inputs/UserContactMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserContactOrderByWithAggregationInput = class UserContactOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactOrderByWithAggregationInput.prototype, "ownerContactId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactOrderByWithAggregationInput.prototype, "contactId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactOrderByWithAggregationInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactOrderByWithAggregationInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactOrderByWithAggregationInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactOrderByWithAggregationInput.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactOrderByWithAggregationInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactCountOrderByAggregateInput_1.UserContactCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactCountOrderByAggregateInput_1.UserContactCountOrderByAggregateInput)
], UserContactOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactMaxOrderByAggregateInput_1.UserContactMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactMaxOrderByAggregateInput_1.UserContactMaxOrderByAggregateInput)
], UserContactOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactMinOrderByAggregateInput_1.UserContactMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactMinOrderByAggregateInput_1.UserContactMinOrderByAggregateInput)
], UserContactOrderByWithAggregationInput.prototype, "_min", void 0);
UserContactOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactOrderByWithAggregationInput", {
        isAbstract: true
    })
], UserContactOrderByWithAggregationInput);
exports.UserContactOrderByWithAggregationInput = UserContactOrderByWithAggregationInput;
