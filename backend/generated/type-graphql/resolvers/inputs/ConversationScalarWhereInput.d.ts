import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ConversationScalarWhereInput {
    AND?: ConversationScalarWhereInput[] | undefined;
    OR?: ConversationScalarWhereInput[] | undefined;
    NOT?: ConversationScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringNullableFilter | undefined;
    secondaryName?: StringNullableFilter | undefined;
    creatorId?: StringFilter | undefined;
    isDeleted?: BoolFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
