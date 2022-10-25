import { MessageOrderByRelationAggregateInput } from "../inputs/MessageOrderByRelationAggregateInput";
import { PaticipantsOrderByRelationAggregateInput } from "../inputs/PaticipantsOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class ConversationOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    secondaryName?: "asc" | "desc" | undefined;
    creator?: UserOrderByWithRelationInput | undefined;
    creatorId?: "asc" | "desc" | undefined;
    isDeleted?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    Message?: MessageOrderByRelationAggregateInput | undefined;
    Paticipants?: PaticipantsOrderByRelationAggregateInput | undefined;
}
