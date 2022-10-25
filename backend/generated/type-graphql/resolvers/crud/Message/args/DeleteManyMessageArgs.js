"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyMessageArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageWhereInput_1 = require("../../../inputs/MessageWhereInput");
let DeleteManyMessageArgs = class DeleteManyMessageArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageWhereInput_1.MessageWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageWhereInput_1.MessageWhereInput)
], DeleteManyMessageArgs.prototype, "where", void 0);
DeleteManyMessageArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyMessageArgs);
exports.DeleteManyMessageArgs = DeleteManyMessageArgs;
