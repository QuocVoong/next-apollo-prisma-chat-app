"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactCreateManyOwnerContactInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserContactCreateManyOwnerContactInput_1 = require("../inputs/UserContactCreateManyOwnerContactInput");
let UserContactCreateManyOwnerContactInputEnvelope = class UserContactCreateManyOwnerContactInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserContactCreateManyOwnerContactInput_1.UserContactCreateManyOwnerContactInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], UserContactCreateManyOwnerContactInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserContactCreateManyOwnerContactInputEnvelope.prototype, "skipDuplicates", void 0);
UserContactCreateManyOwnerContactInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("UserContactCreateManyOwnerContactInputEnvelope", {
        isAbstract: true
    })
], UserContactCreateManyOwnerContactInputEnvelope);
exports.UserContactCreateManyOwnerContactInputEnvelope = UserContactCreateManyOwnerContactInputEnvelope;
