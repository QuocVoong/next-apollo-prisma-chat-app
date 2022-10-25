"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ConversationScalarFieldEnum;
(function (ConversationScalarFieldEnum) {
    ConversationScalarFieldEnum["id"] = "id";
    ConversationScalarFieldEnum["name"] = "name";
    ConversationScalarFieldEnum["secondaryName"] = "secondaryName";
    ConversationScalarFieldEnum["creatorId"] = "creatorId";
    ConversationScalarFieldEnum["isDeleted"] = "isDeleted";
    ConversationScalarFieldEnum["createdAt"] = "createdAt";
    ConversationScalarFieldEnum["updatedAt"] = "updatedAt";
})(ConversationScalarFieldEnum = exports.ConversationScalarFieldEnum || (exports.ConversationScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ConversationScalarFieldEnum, {
    name: "ConversationScalarFieldEnum",
    description: undefined,
});
