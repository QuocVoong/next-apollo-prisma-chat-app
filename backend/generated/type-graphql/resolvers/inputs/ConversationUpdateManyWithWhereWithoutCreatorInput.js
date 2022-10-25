"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationUpdateManyWithWhereWithoutCreatorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationScalarWhereInput_1 = require("../inputs/ConversationScalarWhereInput");
const ConversationUpdateManyMutationInput_1 = require("../inputs/ConversationUpdateManyMutationInput");
let ConversationUpdateManyWithWhereWithoutCreatorInput = class ConversationUpdateManyWithWhereWithoutCreatorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationScalarWhereInput_1.ConversationScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationScalarWhereInput_1.ConversationScalarWhereInput)
], ConversationUpdateManyWithWhereWithoutCreatorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationUpdateManyMutationInput_1.ConversationUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationUpdateManyMutationInput_1.ConversationUpdateManyMutationInput)
], ConversationUpdateManyWithWhereWithoutCreatorInput.prototype, "data", void 0);
ConversationUpdateManyWithWhereWithoutCreatorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationUpdateManyWithWhereWithoutCreatorInput", {
        isAbstract: true
    })
], ConversationUpdateManyWithWhereWithoutCreatorInput);
exports.ConversationUpdateManyWithWhereWithoutCreatorInput = ConversationUpdateManyWithWhereWithoutCreatorInput;
