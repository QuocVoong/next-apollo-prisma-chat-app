"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyConversationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateManyInput_1 = require("../../../inputs/ConversationCreateManyInput");
let CreateManyConversationArgs = class CreateManyConversationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ConversationCreateManyInput_1.ConversationCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyConversationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyConversationArgs.prototype, "skipDuplicates", void 0);
CreateManyConversationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyConversationArgs);
exports.CreateManyConversationArgs = CreateManyConversationArgs;
