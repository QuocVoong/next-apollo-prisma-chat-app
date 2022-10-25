"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneConversationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ConversationCreateInput_1 = require("../../../inputs/ConversationCreateInput");
let CreateOneConversationArgs = class CreateOneConversationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ConversationCreateInput_1.ConversationCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ConversationCreateInput_1.ConversationCreateInput)
], CreateOneConversationArgs.prototype, "data", void 0);
CreateOneConversationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneConversationArgs);
exports.CreateOneConversationArgs = CreateOneConversationArgs;
