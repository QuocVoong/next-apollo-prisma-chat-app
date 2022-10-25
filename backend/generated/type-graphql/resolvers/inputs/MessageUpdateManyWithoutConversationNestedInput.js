"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpdateManyWithoutConversationNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageCreateOrConnectWithoutConversationInput_1 = require("../inputs/MessageCreateOrConnectWithoutConversationInput");
const MessageCreateWithoutConversationInput_1 = require("../inputs/MessageCreateWithoutConversationInput");
const MessageScalarWhereInput_1 = require("../inputs/MessageScalarWhereInput");
const MessageUpdateManyWithWhereWithoutConversationInput_1 = require("../inputs/MessageUpdateManyWithWhereWithoutConversationInput");
const MessageUpdateWithWhereUniqueWithoutConversationInput_1 = require("../inputs/MessageUpdateWithWhereUniqueWithoutConversationInput");
const MessageUpsertWithWhereUniqueWithoutConversationInput_1 = require("../inputs/MessageUpsertWithWhereUniqueWithoutConversationInput");
const MessageWhereUniqueInput_1 = require("../inputs/MessageWhereUniqueInput");
let MessageUpdateManyWithoutConversationNestedInput = class MessageUpdateManyWithoutConversationNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageCreateWithoutConversationInput_1.MessageCreateWithoutConversationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageUpdateManyWithoutConversationNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutConversationInput_1.MessageCreateOrConnectWithoutConversationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageUpdateManyWithoutConversationNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageUpsertWithWhereUniqueWithoutConversationInput_1.MessageUpsertWithWhereUniqueWithoutConversationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageUpdateManyWithoutConversationNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageWhereUniqueInput_1.MessageWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageUpdateManyWithoutConversationNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageWhereUniqueInput_1.MessageWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageUpdateManyWithoutConversationNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageWhereUniqueInput_1.MessageWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageUpdateManyWithoutConversationNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageWhereUniqueInput_1.MessageWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageUpdateManyWithoutConversationNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageUpdateWithWhereUniqueWithoutConversationInput_1.MessageUpdateWithWhereUniqueWithoutConversationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageUpdateManyWithoutConversationNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageUpdateManyWithWhereWithoutConversationInput_1.MessageUpdateManyWithWhereWithoutConversationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageUpdateManyWithoutConversationNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageScalarWhereInput_1.MessageScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageUpdateManyWithoutConversationNestedInput.prototype, "deleteMany", void 0);
MessageUpdateManyWithoutConversationNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageUpdateManyWithoutConversationNestedInput", {
        isAbstract: true
    })
], MessageUpdateManyWithoutConversationNestedInput);
exports.MessageUpdateManyWithoutConversationNestedInput = MessageUpdateManyWithoutConversationNestedInput;
