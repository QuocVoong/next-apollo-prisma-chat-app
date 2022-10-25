import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserScalarWhereWithAggregatesInput {
    AND?: UserScalarWhereWithAggregatesInput[] | undefined;
    OR?: UserScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UserScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    username?: StringNullableWithAggregatesFilter | undefined;
    firstName?: StringNullableWithAggregatesFilter | undefined;
    lastName?: StringNullableWithAggregatesFilter | undefined;
    phoneNumber?: StringNullableWithAggregatesFilter | undefined;
    photo?: StringNullableWithAggregatesFilter | undefined;
    isAdmin?: BoolWithAggregatesFilter | undefined;
    active?: BoolWithAggregatesFilter | undefined;
    count?: IntWithAggregatesFilter | undefined;
}
