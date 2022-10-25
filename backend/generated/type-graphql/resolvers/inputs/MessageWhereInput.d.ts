import { BoolFilter } from "../inputs/BoolFilter";
import { ConversationRelationFilter } from "../inputs/ConversationRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class MessageWhereInput {
    AND?: MessageWhereInput[] | undefined;
    OR?: MessageWhereInput[] | undefined;
    NOT?: MessageWhereInput[] | undefined;
    id?: StringFilter | undefined;
    fromUser?: UserRelationFilter | undefined;
    from?: StringFilter | undefined;
    conversation?: ConversationRelationFilter | undefined;
    conversationId?: StringFilter | undefined;
    text?: StringFilter | undefined;
    isDeleted?: BoolFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
