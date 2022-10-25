import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserContactScalarWhereInput {
    AND?: UserContactScalarWhereInput[] | undefined;
    OR?: UserContactScalarWhereInput[] | undefined;
    NOT?: UserContactScalarWhereInput[] | undefined;
    ownerContactId?: StringFilter | undefined;
    contactId?: StringFilter | undefined;
    email?: StringFilter | undefined;
    username?: StringNullableFilter | undefined;
    firstName?: StringNullableFilter | undefined;
    lastName?: StringNullableFilter | undefined;
    phoneNumber?: StringNullableFilter | undefined;
    photo?: StringNullableFilter | undefined;
}
