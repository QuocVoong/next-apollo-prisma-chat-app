import { ConversationOrderByRelationAggregateInput } from "../inputs/ConversationOrderByRelationAggregateInput";
import { MessageOrderByRelationAggregateInput } from "../inputs/MessageOrderByRelationAggregateInput";
import { PaticipantsOrderByRelationAggregateInput } from "../inputs/PaticipantsOrderByRelationAggregateInput";
import { UserContactOrderByRelationAggregateInput } from "../inputs/UserContactOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    firstName?: "asc" | "desc" | undefined;
    lastName?: "asc" | "desc" | undefined;
    phoneNumber?: "asc" | "desc" | undefined;
    photo?: "asc" | "desc" | undefined;
    isAdmin?: "asc" | "desc" | undefined;
    active?: "asc" | "desc" | undefined;
    count?: "asc" | "desc" | undefined;
    Message?: MessageOrderByRelationAggregateInput | undefined;
    Paticipants?: PaticipantsOrderByRelationAggregateInput | undefined;
    ownerContact?: UserContactOrderByRelationAggregateInput | undefined;
    contactUser?: UserContactOrderByRelationAggregateInput | undefined;
    Conversation?: ConversationOrderByRelationAggregateInput | undefined;
}
