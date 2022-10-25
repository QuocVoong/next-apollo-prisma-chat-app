"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpdateManyWithWhereWithoutFromUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageScalarWhereInput_1 = require("../inputs/MessageScalarWhereInput");
const MessageUpdateManyMutationInput_1 = require("../inputs/MessageUpdateManyMutationInput");
let MessageUpdateManyWithWhereWithoutFromUserInput = class MessageUpdateManyWithWhereWithoutFromUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageScalarWhereInput_1.MessageScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageScalarWhereInput_1.MessageScalarWhereInput)
], MessageUpdateManyWithWhereWithoutFromUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageUpdateManyMutationInput_1.MessageUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageUpdateManyMutationInput_1.MessageUpdateManyMutationInput)
], MessageUpdateManyWithWhereWithoutFromUserInput.prototype, "data", void 0);
MessageUpdateManyWithWhereWithoutFromUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageUpdateManyWithWhereWithoutFromUserInput", {
        isAbstract: true
    })
], MessageUpdateManyWithWhereWithoutFromUserInput);
exports.MessageUpdateManyWithWhereWithoutFromUserInput = MessageUpdateManyWithWhereWithoutFromUserInput;
