import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class PaticipantsScalarWhereInput {
    AND?: PaticipantsScalarWhereInput[] | undefined;
    OR?: PaticipantsScalarWhereInput[] | undefined;
    NOT?: PaticipantsScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    conversationId?: StringFilter | undefined;
    joinedDate?: DateTimeFilter | undefined;
    leftDate?: DateTimeFilter | undefined;
}
