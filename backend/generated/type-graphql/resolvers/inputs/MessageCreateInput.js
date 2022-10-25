"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateNestedOneWithoutMessageInput_1 = require("../inputs/ConversationCreateNestedOneWithoutMessageInput");
const UserCreateNestedOneWithoutMessageInput_1 = require("../inputs/UserCreateNestedOneWithoutMessageInput");
let MessageCreateInput = class MessageCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MessageCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMessageInput_1.UserCreateNestedOneWithoutMessageInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutMessageInput_1.UserCreateNestedOneWithoutMessageInput)
], MessageCreateInput.prototype, "fromUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateNestedOneWithoutMessageInput_1.ConversationCreateNestedOneWithoutMessageInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationCreateNestedOneWithoutMessageInput_1.ConversationCreateNestedOneWithoutMessageInput)
], MessageCreateInput.prototype, "conversation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MessageCreateInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MessageCreateInput.prototype, "isDeleted", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MessageCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MessageCreateInput.prototype, "updatedAt", void 0);
MessageCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageCreateInput", {
        isAbstract: true
    })
], MessageCreateInput);
exports.MessageCreateInput = MessageCreateInput;
