"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateNestedOneWithoutPaticipantsInput_1 = require("../inputs/ConversationCreateNestedOneWithoutPaticipantsInput");
let PaticipantsCreateWithoutUserInput = class PaticipantsCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsCreateWithoutUserInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateNestedOneWithoutPaticipantsInput_1.ConversationCreateNestedOneWithoutPaticipantsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationCreateNestedOneWithoutPaticipantsInput_1.ConversationCreateNestedOneWithoutPaticipantsInput)
], PaticipantsCreateWithoutUserInput.prototype, "conversation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PaticipantsCreateWithoutUserInput.prototype, "joinedDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PaticipantsCreateWithoutUserInput.prototype, "leftDate", void 0);
PaticipantsCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsCreateWithoutUserInput", {
        isAbstract: true
    })
], PaticipantsCreateWithoutUserInput);
exports.PaticipantsCreateWithoutUserInput = PaticipantsCreateWithoutUserInput;
