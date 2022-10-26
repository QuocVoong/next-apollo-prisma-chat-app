"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsCreateManyConversationInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PaticipantsCreateManyConversationInput_1 = require("../inputs/PaticipantsCreateManyConversationInput");
let PaticipantsCreateManyConversationInputEnvelope = class PaticipantsCreateManyConversationInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PaticipantsCreateManyConversationInput_1.PaticipantsCreateManyConversationInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PaticipantsCreateManyConversationInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PaticipantsCreateManyConversationInputEnvelope.prototype, "skipDuplicates", void 0);
PaticipantsCreateManyConversationInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("PaticipantsCreateManyConversationInputEnvelope", {
        isAbstract: true
    })
], PaticipantsCreateManyConversationInputEnvelope);
exports.PaticipantsCreateManyConversationInputEnvelope = PaticipantsCreateManyConversationInputEnvelope;
