"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneMessageArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageUpdateInput_1 = require("../../../inputs/MessageUpdateInput");
const MessageWhereUniqueInput_1 = require("../../../inputs/MessageWhereUniqueInput");
let UpdateOneMessageArgs = class UpdateOneMessageArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageUpdateInput_1.MessageUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageUpdateInput_1.MessageUpdateInput)
], UpdateOneMessageArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageWhereUniqueInput_1.MessageWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageWhereUniqueInput_1.MessageWhereUniqueInput)
], UpdateOneMessageArgs.prototype, "where", void 0);
UpdateOneMessageArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneMessageArgs);
exports.UpdateOneMessageArgs = UpdateOneMessageArgs;
