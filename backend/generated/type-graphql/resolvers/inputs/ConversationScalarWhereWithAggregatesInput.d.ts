import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ConversationScalarWhereWithAggregatesInput {
    AND?: ConversationScalarWhereWithAggregatesInput[] | undefined;
    OR?: ConversationScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ConversationScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    secondaryName?: StringNullableWithAggregatesFilter | undefined;
    creatorId?: StringWithAggregatesFilter | undefined;
    isDeleted?: BoolWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
