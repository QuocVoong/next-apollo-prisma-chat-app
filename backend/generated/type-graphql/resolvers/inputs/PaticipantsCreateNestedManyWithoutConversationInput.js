"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsCreateNestedManyWithoutConversationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsCreateManyConversationInputEnvelope_1 = require("../inputs/PaticipantsCreateManyConversationInputEnvelope");
const PaticipantsCreateOrConnectWithoutConversationInput_1 = require("../inputs/PaticipantsCreateOrConnectWithoutConversationInput");
const PaticipantsCreateWithoutConversationInput_1 = require("../inputs/PaticipantsCreateWithoutConversationInput");
const PaticipantsWhereUniqueInput_1 = require("../inputs/PaticipantsWhereUniqueInput");
let PaticipantsCreateNestedManyWithoutConversationInput = class PaticipantsCreateNestedManyWithoutConversationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsCreateWithoutConversationInput_1.PaticipantsCreateWithoutConversationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsCreateNestedManyWithoutConversationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsCreateOrConnectWithoutConversationInput_1.PaticipantsCreateOrConnectWithoutConversationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsCreateNestedManyWithoutConversationInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PaticipantsCreateManyConversationInputEnvelope_1.PaticipantsCreateManyConversationInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PaticipantsCreateManyConversationInputEnvelope_1.PaticipantsCreateManyConversationInputEnvelope)
], PaticipantsCreateNestedManyWithoutConversationInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsWhereUniqueInput_1.PaticipantsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsCreateNestedManyWithoutConversationInput.prototype, "connect", void 0);
PaticipantsCreateNestedManyWithoutConversationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsCreateNestedManyWithoutConversationInput", {
        isAbstract: true
    })
], PaticipantsCreateNestedManyWithoutConversationInput);
exports.PaticipantsCreateNestedManyWithoutConversationInput = PaticipantsCreateNestedManyWithoutConversationInput;
