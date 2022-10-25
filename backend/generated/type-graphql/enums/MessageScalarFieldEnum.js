"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var MessageScalarFieldEnum;
(function (MessageScalarFieldEnum) {
    MessageScalarFieldEnum["id"] = "id";
    MessageScalarFieldEnum["from"] = "from";
    MessageScalarFieldEnum["conversationId"] = "conversationId";
    MessageScalarFieldEnum["text"] = "text";
    MessageScalarFieldEnum["isDeleted"] = "isDeleted";
    MessageScalarFieldEnum["createdAt"] = "createdAt";
    MessageScalarFieldEnum["updatedAt"] = "updatedAt";
})(MessageScalarFieldEnum = exports.MessageScalarFieldEnum || (exports.MessageScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(MessageScalarFieldEnum, {
    name: "MessageScalarFieldEnum",
    description: undefined,
});
