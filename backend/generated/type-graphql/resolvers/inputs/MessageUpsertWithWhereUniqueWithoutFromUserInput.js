"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpsertWithWhereUniqueWithoutFromUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageCreateWithoutFromUserInput_1 = require("../inputs/MessageCreateWithoutFromUserInput");
const MessageUpdateWithoutFromUserInput_1 = require("../inputs/MessageUpdateWithoutFromUserInput");
const MessageWhereUniqueInput_1 = require("../inputs/MessageWhereUniqueInput");
let MessageUpsertWithWhereUniqueWithoutFromUserInput = class MessageUpsertWithWhereUniqueWithoutFromUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageWhereUniqueInput_1.MessageWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageWhereUniqueInput_1.MessageWhereUniqueInput)
], MessageUpsertWithWhereUniqueWithoutFromUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageUpdateWithoutFromUserInput_1.MessageUpdateWithoutFromUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageUpdateWithoutFromUserInput_1.MessageUpdateWithoutFromUserInput)
], MessageUpsertWithWhereUniqueWithoutFromUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageCreateWithoutFromUserInput_1.MessageCreateWithoutFromUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageCreateWithoutFromUserInput_1.MessageCreateWithoutFromUserInput)
], MessageUpsertWithWhereUniqueWithoutFromUserInput.prototype, "create", void 0);
MessageUpsertWithWhereUniqueWithoutFromUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageUpsertWithWhereUniqueWithoutFromUserInput", {
        isAbstract: true
    })
], MessageUpsertWithWhereUniqueWithoutFromUserInput);
exports.MessageUpsertWithWhereUniqueWithoutFromUserInput = MessageUpsertWithWhereUniqueWithoutFromUserInput;
