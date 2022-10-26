"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactCreateManyContactUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactCreateManyContactUserInput_1 = require("../inputs/UserContactCreateManyContactUserInput");
let UserContactCreateManyContactUserInputEnvelope = class UserContactCreateManyContactUserInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactCreateManyContactUserInput_1.UserContactCreateManyContactUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactCreateManyContactUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserContactCreateManyContactUserInputEnvelope.prototype, "skipDuplicates", void 0);
UserContactCreateManyContactUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactCreateManyContactUserInputEnvelope", {
        isAbstract: true
    })
], UserContactCreateManyContactUserInputEnvelope);
exports.UserContactCreateManyContactUserInputEnvelope = UserContactCreateManyContactUserInputEnvelope;
