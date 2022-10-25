"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationUpdateWithWhereUniqueWithoutCreatorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationUpdateWithoutCreatorInput_1 = require("../inputs/ConversationUpdateWithoutCreatorInput");
const ConversationWhereUniqueInput_1 = require("../inputs/ConversationWhereUniqueInput");
let ConversationUpdateWithWhereUniqueWithoutCreatorInput = class ConversationUpdateWithWhereUniqueWithoutCreatorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereUniqueInput_1.ConversationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationWhereUniqueInput_1.ConversationWhereUniqueInput)
], ConversationUpdateWithWhereUniqueWithoutCreatorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationUpdateWithoutCreatorInput_1.ConversationUpdateWithoutCreatorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationUpdateWithoutCreatorInput_1.ConversationUpdateWithoutCreatorInput)
], ConversationUpdateWithWhereUniqueWithoutCreatorInput.prototype, "data", void 0);
ConversationUpdateWithWhereUniqueWithoutCreatorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationUpdateWithWhereUniqueWithoutCreatorInput", {
        isAbstract: true
    })
], ConversationUpdateWithWhereUniqueWithoutCreatorInput);
exports.ConversationUpdateWithWhereUniqueWithoutCreatorInput = ConversationUpdateWithWhereUniqueWithoutCreatorInput;
