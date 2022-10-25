import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MessageListRelationFilter } from "../inputs/MessageListRelationFilter";
import { PaticipantsListRelationFilter } from "../inputs/PaticipantsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class ConversationWhereInput {
    AND?: ConversationWhereInput[] | undefined;
    OR?: ConversationWhereInput[] | undefined;
    NOT?: ConversationWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringNullableFilter | undefined;
    secondaryName?: StringNullableFilter | undefined;
    creator?: UserRelationFilter | undefined;
    creatorId?: StringFilter | undefined;
    isDeleted?: BoolFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    Message?: MessageListRelationFilter | undefined;
    Paticipants?: PaticipantsListRelationFilter | undefined;
}
