"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_1 = require("../../../models/User");
const UserContact_1 = require("../../../models/UserContact");
const helpers_1 = require("../../../helpers");
let UserContactRelationsResolver = class UserContactRelationsResolver {
    async ownerContact(userContact, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.findUnique({
            where: {
                ownerContactId: userContact.ownerContactId,
            },
        }).ownerContact({});
    }
    async contactUser(userContact, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).userContact.findUnique({
            where: {
                ownerContactId: userContact.ownerContactId,
            },
        }).contactUser({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserContact_1.UserContact, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserContactRelationsResolver.prototype, "ownerContact", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserContact_1.UserContact, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserContactRelationsResolver.prototype, "contactUser", null);
UserContactRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => UserContact_1.UserContact)
], UserContactRelationsResolver);
exports.UserContactRelationsResolver = UserContactRelationsResolver;
