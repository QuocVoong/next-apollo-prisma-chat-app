"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneUserContactArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactCreateInput_1 = require("../../../inputs/UserContactCreateInput");
const UserContactUpdateInput_1 = require("../../../inputs/UserContactUpdateInput");
const UserContactWhereUniqueInput_1 = require("../../../inputs/UserContactWhereUniqueInput");
let UpsertOneUserContactArgs = class UpsertOneUserContactArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereUniqueInput_1.UserContactWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactWhereUniqueInput_1.UserContactWhereUniqueInput)
], UpsertOneUserContactArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactCreateInput_1.UserContactCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactCreateInput_1.UserContactCreateInput)
], UpsertOneUserContactArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactUpdateInput_1.UserContactUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactUpdateInput_1.UserContactUpdateInput)
], UpsertOneUserContactArgs.prototype, "update", void 0);
UpsertOneUserContactArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneUserContactArgs);
exports.UpsertOneUserContactArgs = UpsertOneUserContactArgs;
