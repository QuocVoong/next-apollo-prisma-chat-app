"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationCreateManyCreatorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateManyCreatorInput_1 = require("../inputs/ConversationCreateManyCreatorInput");
let ConversationCreateManyCreatorInputEnvelope = class ConversationCreateManyCreatorInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationCreateManyCreatorInput_1.ConversationCreateManyCreatorInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ConversationCreateManyCreatorInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ConversationCreateManyCreatorInputEnvelope.prototype, "skipDuplicates", void 0);
ConversationCreateManyCreatorInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ConversationCreateManyCreatorInputEnvelope", {
        isAbstract: true
    })
], ConversationCreateManyCreatorInputEnvelope);
exports.ConversationCreateManyCreatorInputEnvelope = ConversationCreateManyCreatorInputEnvelope;
