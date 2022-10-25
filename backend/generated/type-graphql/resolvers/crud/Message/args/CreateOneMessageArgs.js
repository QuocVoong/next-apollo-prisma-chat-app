"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneMessageArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageCreateInput_1 = require("../../../inputs/MessageCreateInput");
let CreateOneMessageArgs = class CreateOneMessageArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MessageCreateInput_1.MessageCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MessageCreateInput_1.MessageCreateInput)
], CreateOneMessageArgs.prototype, "data", void 0);
CreateOneMessageArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneMessageArgs);
exports.CreateOneMessageArgs = CreateOneMessageArgs;
