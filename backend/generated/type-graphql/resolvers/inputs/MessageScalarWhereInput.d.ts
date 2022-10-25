import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class MessageScalarWhereInput {
    AND?: MessageScalarWhereInput[] | undefined;
    OR?: MessageScalarWhereInput[] | undefined;
    NOT?: MessageScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    from?: StringFilter | undefined;
    conversationId?: StringFilter | undefined;
    text?: StringFilter | undefined;
    isDeleted?: BoolFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
