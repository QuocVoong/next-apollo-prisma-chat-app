"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneUserContactArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactCreateInput_1 = require("../../../inputs/UserContactCreateInput");
let CreateOneUserContactArgs = class CreateOneUserContactArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserContactCreateInput_1.UserContactCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserContactCreateInput_1.UserContactCreateInput)
], CreateOneUserContactArgs.prototype, "data", void 0);
CreateOneUserContactArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneUserContactArgs);
exports.CreateOneUserContactArgs = CreateOneUserContactArgs;
