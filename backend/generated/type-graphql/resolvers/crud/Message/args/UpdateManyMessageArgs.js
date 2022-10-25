"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyMessageArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageUpdateManyMutationInput_1 = require("../../../inputs/MessageUpdateManyMutationInput");
const MessageWhereInput_1 = require("../../../inputs/MessageWhereInput");
let UpdateManyMessageArgs = class UpdateManyMessageArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageUpdateManyMutationInput_1.MessageUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageUpdateManyMutationInput_1.MessageUpdateManyMutationInput)
], UpdateManyMessageArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageWhereInput_1.MessageWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageWhereInput_1.MessageWhereInput)
], UpdateManyMessageArgs.prototype, "where", void 0);
UpdateManyMessageArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyMessageArgs);
exports.UpdateManyMessageArgs = UpdateManyMessageArgs;
