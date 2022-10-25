"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUpdateManyWithoutFromUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageCreateOrConnectWithoutFromUserInput_1 = require("../inputs/MessageCreateOrConnectWithoutFromUserInput");
const MessageCreateWithoutFromUserInput_1 = require("../inputs/MessageCreateWithoutFromUserInput");
const MessageScalarWhereInput_1 = require("../inputs/MessageScalarWhereInput");
const MessageUpdateManyWithWhereWithoutFromUserInput_1 = require("../inputs/MessageUpdateManyWithWhereWithoutFromUserInput");
const MessageUpdateWithWhereUniqueWithoutFromUserInput_1 = require("../inputs/MessageUpdateWithWhereUniqueWithoutFromUserInput");
const MessageUpsertWithWhereUniqueWithoutFromUserInput_1 = require("../inputs/MessageUpsertWithWhereUniqueWithoutFromUserInput");
const MessageWhereUniqueInput_1 = require("../inputs/MessageWhereUniqueInput");
let MessageUpdateManyWithoutFromUserNestedInput = class MessageUpdateManyWithoutFromUserNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageCreateWithoutFromUserInput_1.MessageCreateWithoutFromUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageUpdateManyWithoutFromUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutFromUserInput_1.MessageCreateOrConnectWithoutFromUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageUpdateManyWithoutFromUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageUpsertWithWhereUniqueWithoutFromUserInput_1.MessageUpsertWithWhereUniqueWithoutFromUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageUpdateManyWithoutFromUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageWhereUniqueInput_1.MessageWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageUpdateManyWithoutFromUserNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageWhereUniqueInput_1.MessageWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageUpdateManyWithoutFromUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageWhereUniqueInput_1.MessageWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageUpdateManyWithoutFromUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageWhereUniqueInput_1.MessageWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageUpdateManyWithoutFromUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageUpdateWithWhereUniqueWithoutFromUserInput_1.MessageUpdateWithWhereUniqueWithoutFromUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageUpdateManyWithoutFromUserNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageUpdateManyWithWhereWithoutFromUserInput_1.MessageUpdateManyWithWhereWithoutFromUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageUpdateManyWithoutFromUserNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageScalarWhereInput_1.MessageScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MessageUpdateManyWithoutFromUserNestedInput.prototype, "deleteMany", void 0);
MessageUpdateManyWithoutFromUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageUpdateManyWithoutFromUserNestedInput", {
        isAbstract: true
    })
], MessageUpdateManyWithoutFromUserNestedInput);
exports.MessageUpdateManyWithoutFromUserNestedInput = MessageUpdateManyWithoutFromUserNestedInput;
