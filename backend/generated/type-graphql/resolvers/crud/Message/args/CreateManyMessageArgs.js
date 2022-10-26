"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyMessageArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MessageCreateManyInput_1 = require("../../../inputs/MessageCreateManyInput");
let CreateManyMessageArgs = class CreateManyMessageArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MessageCreateManyInput_1.MessageCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyMessageArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyMessageArgs.prototype, "skipDuplicates", void 0);
CreateManyMessageArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyMessageArgs);
exports.CreateManyMessageArgs = CreateManyMessageArgs;
