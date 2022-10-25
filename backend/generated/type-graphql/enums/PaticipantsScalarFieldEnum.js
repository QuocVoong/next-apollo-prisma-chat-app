"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PaticipantsScalarFieldEnum;
(function (PaticipantsScalarFieldEnum) {
    PaticipantsScalarFieldEnum["id"] = "id";
    PaticipantsScalarFieldEnum["type"] = "type";
    PaticipantsScalarFieldEnum["userId"] = "userId";
    PaticipantsScalarFieldEnum["conversationId"] = "conversationId";
    PaticipantsScalarFieldEnum["joinedDate"] = "joinedDate";
    PaticipantsScalarFieldEnum["leftDate"] = "leftDate";
})(PaticipantsScalarFieldEnum = exports.PaticipantsScalarFieldEnum || (exports.PaticipantsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PaticipantsScalarFieldEnum, {
    name: "PaticipantsScalarFieldEnum",
    description: undefined,
});
