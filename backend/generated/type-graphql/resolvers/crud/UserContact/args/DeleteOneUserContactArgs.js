"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneUserContactArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactWhereUniqueInput_1 = require("../../../inputs/UserContactWhereUniqueInput");
let DeleteOneUserContactArgs = class DeleteOneUserContactArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereUniqueInput_1.UserContactWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactWhereUniqueInput_1.UserContactWhereUniqueInput)
], DeleteOneUserContactArgs.prototype, "where", void 0);
DeleteOneUserContactArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneUserContactArgs);
exports.DeleteOneUserContactArgs = DeleteOneUserContactArgs;
