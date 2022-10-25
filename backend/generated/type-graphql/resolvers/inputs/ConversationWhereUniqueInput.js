"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ConversationWhereUniqueInput = class ConversationWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ConversationWhereUniqueInput.prototype, "id", void 0);
ConversationWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationWhereUniqueInput", {
        isAbstract: true
    })
], ConversationWhereUniqueInput);
exports.ConversationWhereUniqueInput = ConversationWhereUniqueInput;
