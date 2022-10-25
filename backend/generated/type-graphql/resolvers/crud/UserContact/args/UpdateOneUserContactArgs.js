"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneUserContactArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactUpdateInput_1 = require("../../../inputs/UserContactUpdateInput");
const UserContactWhereUniqueInput_1 = require("../../../inputs/UserContactWhereUniqueInput");
let UpdateOneUserContactArgs = class UpdateOneUserContactArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactUpdateInput_1.UserContactUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactUpdateInput_1.UserContactUpdateInput)
], UpdateOneUserContactArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactWhereUniqueInput_1.UserContactWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactWhereUniqueInput_1.UserContactWhereUniqueInput)
], UpdateOneUserContactArgs.prototype, "where", void 0);
UpdateOneUserContactArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneUserContactArgs);
exports.UpdateOneUserContactArgs = UpdateOneUserContactArgs;
