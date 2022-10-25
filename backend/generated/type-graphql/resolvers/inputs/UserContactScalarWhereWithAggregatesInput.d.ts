import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserContactScalarWhereWithAggregatesInput {
    AND?: UserContactScalarWhereWithAggregatesInput[] | undefined;
    OR?: UserContactScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UserContactScalarWhereWithAggregatesInput[] | undefined;
    ownerContactId?: StringWithAggregatesFilter | undefined;
    contactId?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    username?: StringNullableWithAggregatesFilter | undefined;
    firstName?: StringNullableWithAggregatesFilter | undefined;
    lastName?: StringNullableWithAggregatesFilter | undefined;
    phoneNumber?: StringNullableWithAggregatesFilter | undefined;
    photo?: StringNullableWithAggregatesFilter | undefined;
}
