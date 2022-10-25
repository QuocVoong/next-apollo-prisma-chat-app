"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateNestedOneWithoutPaticipantsInput_1 = require("../inputs/ConversationCreateNestedOneWithoutPaticipantsInput");
const UserCreateNestedOneWithoutPaticipantsInput_1 = require("../inputs/UserCreateNestedOneWithoutPaticipantsInput");
let PaticipantsCreateInput = class PaticipantsCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PaticipantsCreateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPaticipantsInput_1.UserCreateNestedOneWithoutPaticipantsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPaticipantsInput_1.UserCreateNestedOneWithoutPaticipantsInput)
], PaticipantsCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateNestedOneWithoutPaticipantsInput_1.ConversationCreateNestedOneWithoutPaticipantsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationCreateNestedOneWithoutPaticipantsInput_1.ConversationCreateNestedOneWithoutPaticipantsInput)
], PaticipantsCreateInput.prototype, "conversation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PaticipantsCreateInput.prototype, "joinedDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PaticipantsCreateInput.prototype, "leftDate", void 0);
PaticipantsCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsCreateInput", {
        isAbstract: true
    })
], PaticipantsCreateInput);
exports.PaticipantsCreateInput = PaticipantsCreateInput;
