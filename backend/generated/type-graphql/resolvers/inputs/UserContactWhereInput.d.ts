import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class UserContactWhereInput {
    AND?: UserContactWhereInput[] | undefined;
    OR?: UserContactWhereInput[] | undefined;
    NOT?: UserContactWhereInput[] | undefined;
    ownerContact?: UserRelationFilter | undefined;
    ownerContactId?: StringFilter | undefined;
    contactUser?: UserRelationFilter | undefined;
    contactId?: StringFilter | undefined;
    email?: StringFilter | undefined;
    username?: StringNullableFilter | undefined;
    firstName?: StringNullableFilter | undefined;
    lastName?: StringNullableFilter | undefined;
    phoneNumber?: StringNullableFilter | undefined;
    photo?: StringNullableFilter | undefined;
}
