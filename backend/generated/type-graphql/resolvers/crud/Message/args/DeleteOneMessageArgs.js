"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneMessageArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageWhereUniqueInput_1 = require("../../../inputs/MessageWhereUniqueInput");
let DeleteOneMessageArgs = class DeleteOneMessageArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageWhereUniqueInput_1.MessageWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageWhereUniqueInput_1.MessageWhereUniqueInput)
], DeleteOneMessageArgs.prototype, "where", void 0);
DeleteOneMessageArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneMessageArgs);
exports.DeleteOneMessageArgs = DeleteOneMessageArgs;
