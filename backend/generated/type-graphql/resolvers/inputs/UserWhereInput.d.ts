import { BoolFilter } from "../inputs/BoolFilter";
import { ConversationListRelationFilter } from "../inputs/ConversationListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MessageListRelationFilter } from "../inputs/MessageListRelationFilter";
import { PaticipantsListRelationFilter } from "../inputs/PaticipantsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserContactListRelationFilter } from "../inputs/UserContactListRelationFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    email?: StringFilter | undefined;
    username?: StringNullableFilter | undefined;
    firstName?: StringNullableFilter | undefined;
    lastName?: StringNullableFilter | undefined;
    phoneNumber?: StringNullableFilter | undefined;
    photo?: StringNullableFilter | undefined;
    isAdmin?: BoolFilter | undefined;
    active?: BoolFilter | undefined;
    count?: IntFilter | undefined;
    Message?: MessageListRelationFilter | undefined;
    Paticipants?: PaticipantsListRelationFilter | undefined;
    ownerContact?: UserContactListRelationFilter | undefined;
    contactUser?: UserContactListRelationFilter | undefined;
    Conversation?: ConversationListRelationFilter | undefined;
}
