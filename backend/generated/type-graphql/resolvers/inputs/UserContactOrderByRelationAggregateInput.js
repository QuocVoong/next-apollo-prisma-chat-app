"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let UserContactOrderByRelationAggregateInput = class UserContactOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserContactOrderByRelationAggregateInput.prototype, "_count", void 0);
UserContactOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactOrderByRelationAggregateInput", {
        isAbstract: true
    })
], UserContactOrderByRelationAggregateInput);
exports.UserContactOrderByRelationAggregateInput = UserContactOrderByRelationAggregateInput;
