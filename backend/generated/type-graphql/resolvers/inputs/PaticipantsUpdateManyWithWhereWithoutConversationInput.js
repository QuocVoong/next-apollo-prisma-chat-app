"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsUpdateManyWithWhereWithoutConversationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsScalarWhereInput_1 = require("../inputs/PaticipantsScalarWhereInput");
const PaticipantsUpdateManyMutationInput_1 = require("../inputs/PaticipantsUpdateManyMutationInput");
let PaticipantsUpdateManyWithWhereWithoutConversationInput = class PaticipantsUpdateManyWithWhereWithoutConversationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsScalarWhereInput_1.PaticipantsScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsScalarWhereInput_1.PaticipantsScalarWhereInput)
], PaticipantsUpdateManyWithWhereWithoutConversationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsUpdateManyMutationInput_1.PaticipantsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PaticipantsUpdateManyMutationInput_1.PaticipantsUpdateManyMutationInput)
], PaticipantsUpdateManyWithWhereWithoutConversationInput.prototype, "data", void 0);
PaticipantsUpdateManyWithWhereWithoutConversationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsUpdateManyWithWhereWithoutConversationInput", {
        isAbstract: true
    })
], PaticipantsUpdateManyWithWhereWithoutConversationInput);
exports.PaticipantsUpdateManyWithWhereWithoutConversationInput = PaticipantsUpdateManyWithWhereWithoutConversationInput;
