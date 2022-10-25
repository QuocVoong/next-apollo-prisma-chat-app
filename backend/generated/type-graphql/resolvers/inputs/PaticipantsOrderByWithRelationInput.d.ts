import { ConversationOrderByWithRelationInput } from "../inputs/ConversationOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class PaticipantsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    conversation?: ConversationOrderByWithRelationInput | undefined;
    conversationId?: "asc" | "desc" | undefined;
    joinedDate?: "asc" | "desc" | undefined;
    leftDate?: "asc" | "desc" | undefined;
}
