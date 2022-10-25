import { ConversationOrderByWithRelationInput } from "../inputs/ConversationOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class MessageOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    fromUser?: UserOrderByWithRelationInput | undefined;
    from?: "asc" | "desc" | undefined;
    conversation?: ConversationOrderByWithRelationInput | undefined;
    conversationId?: "asc" | "desc" | undefined;
    text?: "asc" | "desc" | undefined;
    isDeleted?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
