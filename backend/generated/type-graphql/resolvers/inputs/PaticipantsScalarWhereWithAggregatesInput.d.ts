import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class PaticipantsScalarWhereWithAggregatesInput {
    AND?: PaticipantsScalarWhereWithAggregatesInput[] | undefined;
    OR?: PaticipantsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PaticipantsScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    type?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    conversationId?: StringWithAggregatesFilter | undefined;
    joinedDate?: DateTimeWithAggregatesFilter | undefined;
    leftDate?: DateTimeWithAggregatesFilter | undefined;
}
