"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpdateWithWhereUniqueWithoutFromUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageUpdateWithoutFromUserInput_1 = require("../inputs/MessageUpdateWithoutFromUserInput");
const MessageWhereUniqueInput_1 = require("../inputs/MessageWhereUniqueInput");
let MessageUpdateWithWhereUniqueWithoutFromUserInput = class MessageUpdateWithWhereUniqueWithoutFromUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageWhereUniqueInput_1.MessageWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageWhereUniqueInput_1.MessageWhereUniqueInput)
], MessageUpdateWithWhereUniqueWithoutFromUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageUpdateWithoutFromUserInput_1.MessageUpdateWithoutFromUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageUpdateWithoutFromUserInput_1.MessageUpdateWithoutFromUserInput)
], MessageUpdateWithWhereUniqueWithoutFromUserInput.prototype, "data", void 0);
MessageUpdateWithWhereUniqueWithoutFromUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageUpdateWithWhereUniqueWithoutFromUserInput", {
        isAbstract: true
    })
], MessageUpdateWithWhereUniqueWithoutFromUserInput);
exports.MessageUpdateWithWhereUniqueWithoutFromUserInput = MessageUpdateWithWhereUniqueWithoutFromUserInput;
