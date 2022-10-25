"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactWhereInput_1 = require("../inputs/UserContactWhereInput");
let UserContactListRelationFilter = class UserContactListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereInput_1.UserContactWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactWhereInput_1.UserContactWhereInput)
], UserContactListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereInput_1.UserContactWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactWhereInput_1.UserContactWhereInput)
], UserContactListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereInput_1.UserContactWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserContactWhereInput_1.UserContactWhereInput)
], UserContactListRelationFilter.prototype, "none", void 0);
UserContactListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactListRelationFilter", {
        isAbstract: true
    })
], UserContactListRelationFilter);
exports.UserContactListRelationFilter = UserContactListRelationFilter;
