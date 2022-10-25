"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationCreateNestedManyWithoutCreatorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateOrConnectWithoutCreatorInput_1 = require("../inputs/ConversationCreateOrConnectWithoutCreatorInput");
const ConversationCreateWithoutCreatorInput_1 = require("../inputs/ConversationCreateWithoutCreatorInput");
const ConversationWhereUniqueInput_1 = require("../inputs/ConversationWhereUniqueInput");
let ConversationCreateNestedManyWithoutCreatorInput = class ConversationCreateNestedManyWithoutCreatorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationCreateWithoutCreatorInput_1.ConversationCreateWithoutCreatorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ConversationCreateNestedManyWithoutCreatorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationCreateOrConnectWithoutCreatorInput_1.ConversationCreateOrConnectWithoutCreatorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ConversationCreateNestedManyWithoutCreatorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationWhereUniqueInput_1.ConversationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ConversationCreateNestedManyWithoutCreatorInput.prototype, "connect", void 0);
ConversationCreateNestedManyWithoutCreatorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationCreateNestedManyWithoutCreatorInput", {
        isAbstract: true
    })
], ConversationCreateNestedManyWithoutCreatorInput);
exports.ConversationCreateNestedManyWithoutCreatorInput = ConversationCreateNestedManyWithoutCreatorInput;
