"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCreateOrConnectWithoutFromUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageCreateWithoutFromUserInput_1 = require("../inputs/MessageCreateWithoutFromUserInput");
const MessageWhereUniqueInput_1 = require("../inputs/MessageWhereUniqueInput");
let MessageCreateOrConnectWithoutFromUserInput = class MessageCreateOrConnectWithoutFromUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageWhereUniqueInput_1.MessageWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageWhereUniqueInput_1.MessageWhereUniqueInput)
], MessageCreateOrConnectWithoutFromUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageCreateWithoutFromUserInput_1.MessageCreateWithoutFromUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageCreateWithoutFromUserInput_1.MessageCreateWithoutFromUserInput)
], MessageCreateOrConnectWithoutFromUserInput.prototype, "create", void 0);
MessageCreateOrConnectWithoutFromUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageCreateOrConnectWithoutFromUserInput", {
        isAbstract: true
    })
], MessageCreateOrConnectWithoutFromUserInput);
exports.MessageCreateOrConnectWithoutFromUserInput = MessageCreateOrConnectWithoutFromUserInput;
