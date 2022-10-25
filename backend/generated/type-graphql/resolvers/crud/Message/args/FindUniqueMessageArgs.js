"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMessageArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageWhereUniqueInput_1 = require("../../../inputs/MessageWhereUniqueInput");
let FindUniqueMessageArgs = class FindUniqueMessageArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageWhereUniqueInput_1.MessageWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageWhereUniqueInput_1.MessageWhereUniqueInput)
], FindUniqueMessageArgs.prototype, "where", void 0);
FindUniqueMessageArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueMessageArgs);
exports.FindUniqueMessageArgs = FindUniqueMessageArgs;
