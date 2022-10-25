"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsCreateWithoutConversationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutPaticipantsInput_1 = require("../inputs/UserCreateNestedOneWithoutPaticipantsInput");
let PaticipantsCreateWithoutConversationInput = class PaticipantsCreateWithoutConversationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsCreateWithoutConversationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsCreateWithoutConversationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPaticipantsInput_1.UserCreateNestedOneWithoutPaticipantsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPaticipantsInput_1.UserCreateNestedOneWithoutPaticipantsInput)
], PaticipantsCreateWithoutConversationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PaticipantsCreateWithoutConversationInput.prototype, "joinedDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PaticipantsCreateWithoutConversationInput.prototype, "leftDate", void 0);
PaticipantsCreateWithoutConversationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsCreateWithoutConversationInput", {
        isAbstract: true
    })
], PaticipantsCreateWithoutConversationInput);
exports.PaticipantsCreateWithoutConversationInput = PaticipantsCreateWithoutConversationInput;
