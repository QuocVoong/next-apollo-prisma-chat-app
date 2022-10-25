"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var UserContactScalarFieldEnum;
(function (UserContactScalarFieldEnum) {
    UserContactScalarFieldEnum["ownerContactId"] = "ownerContactId";
    UserContactScalarFieldEnum["contactId"] = "contactId";
    UserContactScalarFieldEnum["email"] = "email";
    UserContactScalarFieldEnum["username"] = "username";
    UserContactScalarFieldEnum["firstName"] = "firstName";
    UserContactScalarFieldEnum["lastName"] = "lastName";
    UserContactScalarFieldEnum["phoneNumber"] = "phoneNumber";
    UserContactScalarFieldEnum["photo"] = "photo";
})(UserContactScalarFieldEnum = exports.UserContactScalarFieldEnum || (exports.UserContactScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(UserContactScalarFieldEnum, {
    name: "UserContactScalarFieldEnum",
    description: undefined,
});
