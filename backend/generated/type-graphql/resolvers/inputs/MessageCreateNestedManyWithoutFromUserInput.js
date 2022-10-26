"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCreateNestedManyWithoutFromUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageCreateManyFromUserInputEnvelope_1 = require("../inputs/MessageCreateManyFromUserInputEnvelope");
const MessageCreateOrConnectWithoutFromUserInput_1 = require("../inputs/MessageCreateOrConnectWithoutFromUserInput");
const MessageCreateWithoutFromUserInput_1 = require("../inputs/MessageCreateWithoutFromUserInput");
const MessageWhereUniqueInput_1 = require("../inputs/MessageWhereUniqueInput");
let MessageCreateNestedManyWithoutFromUserInput = class MessageCreateNestedManyWithoutFromUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageCreateWithoutFromUserInput_1.MessageCreateWithoutFromUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageCreateNestedManyWithoutFromUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutFromUserInput_1.MessageCreateOrConnectWithoutFromUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageCreateNestedManyWithoutFromUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageCreateManyFromUserInputEnvelope_1.MessageCreateManyFromUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MessageCreateManyFromUserInputEnvelope_1.MessageCreateManyFromUserInputEnvelope)
], MessageCreateNestedManyWithoutFromUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageWhereUniqueInput_1.MessageWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageCreateNestedManyWithoutFromUserInput.prototype, "connect", void 0);
MessageCreateNestedManyWithoutFromUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageCreateNestedManyWithoutFromUserInput", {
        isAbstract: true
    })
], MessageCreateNestedManyWithoutFromUserInput);
exports.MessageCreateNestedManyWithoutFromUserInput = MessageCreateNestedManyWithoutFromUserInput;
