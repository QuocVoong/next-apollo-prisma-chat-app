"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let MessageWhereUniqueInput = class MessageWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageWhereUniqueInput.prototype, "id", void 0);
MessageWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageWhereUniqueInput", {
        isAbstract: true
    })
], MessageWhereUniqueInput);
exports.MessageWhereUniqueInput = MessageWhereUniqueInput;
