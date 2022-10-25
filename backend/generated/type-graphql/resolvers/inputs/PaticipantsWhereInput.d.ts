import { ConversationRelationFilter } from "../inputs/ConversationRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class PaticipantsWhereInput {
    AND?: PaticipantsWhereInput[] | undefined;
    OR?: PaticipantsWhereInput[] | undefined;
    NOT?: PaticipantsWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: StringFilter | undefined;
    user?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
    conversation?: ConversationRelationFilter | undefined;
    conversationId?: StringFilter | undefined;
    joinedDate?: DateTimeFilter | undefined;
    leftDate?: DateTimeFilter | undefined;
}
