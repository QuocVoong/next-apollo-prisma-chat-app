import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class MessageScalarWhereWithAggregatesInput {
    AND?: MessageScalarWhereWithAggregatesInput[] | undefined;
    OR?: MessageScalarWhereWithAggregatesInput[] | undefined;
    NOT?: MessageScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    from?: StringWithAggregatesFilter | undefined;
    conversationId?: StringWithAggregatesFilter | undefined;
    text?: StringWithAggregatesFilter | undefined;
    isDeleted?: BoolWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
