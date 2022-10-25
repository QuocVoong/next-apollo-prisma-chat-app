"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationUpdateOneRequiredWithoutMessageNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateOrConnectWithoutMessageInput_1 = require("../inputs/ConversationCreateOrConnectWithoutMessageInput");
const ConversationCreateWithoutMessageInput_1 = require("../inputs/ConversationCreateWithoutMessageInput");
const ConversationUpdateWithoutMessageInput_1 = require("../inputs/ConversationUpdateWithoutMessageInput");
const ConversationUpsertWithoutMessageInput_1 = require("../inputs/ConversationUpsertWithoutMessageInput");
const ConversationWhereUniqueInput_1 = require("../inputs/ConversationWhereUniqueInput");
let ConversationUpdateOneRequiredWithoutMessageNestedInput = class ConversationUpdateOneRequiredWithoutMessageNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateWithoutMessageInput_1.ConversationCreateWithoutMessageInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationCreateWithoutMessageInput_1.ConversationCreateWithoutMessageInput)
], ConversationUpdateOneRequiredWithoutMessageNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateOrConnectWithoutMessageInput_1.ConversationCreateOrConnectWithoutMessageInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationCreateOrConnectWithoutMessageInput_1.ConversationCreateOrConnectWithoutMessageInput)
], ConversationUpdateOneRequiredWithoutMessageNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationUpsertWithoutMessageInput_1.ConversationUpsertWithoutMessageInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationUpsertWithoutMessageInput_1.ConversationUpsertWithoutMessageInput)
], ConversationUpdateOneRequiredWithoutMessageNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereUniqueInput_1.ConversationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationWhereUniqueInput_1.ConversationWhereUniqueInput)
], ConversationUpdateOneRequiredWithoutMessageNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationUpdateWithoutMessageInput_1.ConversationUpdateWithoutMessageInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationUpdateWithoutMessageInput_1.ConversationUpdateWithoutMessageInput)
], ConversationUpdateOneRequiredWithoutMessageNestedInput.prototype, "update", void 0);
ConversationUpdateOneRequiredWithoutMessageNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationUpdateOneRequiredWithoutMessageNestedInput", {
        isAbstract: true
    })
], ConversationUpdateOneRequiredWithoutMessageNestedInput);
exports.ConversationUpdateOneRequiredWithoutMessageNestedInput = ConversationUpdateOneRequiredWithoutMessageNestedInput;
