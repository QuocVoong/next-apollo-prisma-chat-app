"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationUpdateOneRequiredWithoutPaticipantsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateOrConnectWithoutPaticipantsInput_1 = require("../inputs/ConversationCreateOrConnectWithoutPaticipantsInput");
const ConversationCreateWithoutPaticipantsInput_1 = require("../inputs/ConversationCreateWithoutPaticipantsInput");
const ConversationUpdateWithoutPaticipantsInput_1 = require("../inputs/ConversationUpdateWithoutPaticipantsInput");
const ConversationUpsertWithoutPaticipantsInput_1 = require("../inputs/ConversationUpsertWithoutPaticipantsInput");
const ConversationWhereUniqueInput_1 = require("../inputs/ConversationWhereUniqueInput");
let ConversationUpdateOneRequiredWithoutPaticipantsNestedInput = class ConversationUpdateOneRequiredWithoutPaticipantsNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateWithoutPaticipantsInput_1.ConversationCreateWithoutPaticipantsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationCreateWithoutPaticipantsInput_1.ConversationCreateWithoutPaticipantsInput)
], ConversationUpdateOneRequiredWithoutPaticipantsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateOrConnectWithoutPaticipantsInput_1.ConversationCreateOrConnectWithoutPaticipantsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationCreateOrConnectWithoutPaticipantsInput_1.ConversationCreateOrConnectWithoutPaticipantsInput)
], ConversationUpdateOneRequiredWithoutPaticipantsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationUpsertWithoutPaticipantsInput_1.ConversationUpsertWithoutPaticipantsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationUpsertWithoutPaticipantsInput_1.ConversationUpsertWithoutPaticipantsInput)
], ConversationUpdateOneRequiredWithoutPaticipantsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationWhereUniqueInput_1.ConversationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationWhereUniqueInput_1.ConversationWhereUniqueInput)
], ConversationUpdateOneRequiredWithoutPaticipantsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationUpdateWithoutPaticipantsInput_1.ConversationUpdateWithoutPaticipantsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ConversationUpdateWithoutPaticipantsInput_1.ConversationUpdateWithoutPaticipantsInput)
], ConversationUpdateOneRequiredWithoutPaticipantsNestedInput.prototype, "update", void 0);
ConversationUpdateOneRequiredWithoutPaticipantsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationUpdateOneRequiredWithoutPaticipantsNestedInput", {
        isAbstract: true
    })
], ConversationUpdateOneRequiredWithoutPaticipantsNestedInput);
exports.ConversationUpdateOneRequiredWithoutPaticipantsNestedInput = ConversationUpdateOneRequiredWithoutPaticipantsNestedInput;
