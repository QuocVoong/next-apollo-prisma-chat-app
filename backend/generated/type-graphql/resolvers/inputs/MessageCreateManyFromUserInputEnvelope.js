"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCreateManyFromUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageCreateManyFromUserInput_1 = require("../inputs/MessageCreateManyFromUserInput");
let MessageCreateManyFromUserInputEnvelope = class MessageCreateManyFromUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageCreateManyFromUserInput_1.MessageCreateManyFromUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], MessageCreateManyFromUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MessageCreateManyFromUserInputEnvelope.prototype, "skipDuplicates", void 0);
MessageCreateManyFromUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("MessageCreateManyFromUserInputEnvelope", {
        isAbstract: true
    })
], MessageCreateManyFromUserInputEnvelope);
exports.MessageCreateManyFromUserInputEnvelope = MessageCreateManyFromUserInputEnvelope;
