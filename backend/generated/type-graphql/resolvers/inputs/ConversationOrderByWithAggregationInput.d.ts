import { ConversationCountOrderByAggregateInput } from "../inputs/ConversationCountOrderByAggregateInput";
import { ConversationMaxOrderByAggregateInput } from "../inputs/ConversationMaxOrderByAggregateInput";
import { ConversationMinOrderByAggregateInput } from "../inputs/ConversationMinOrderByAggregateInput";
export declare class ConversationOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    secondaryName?: "asc" | "desc" | undefined;
    creatorId?: "asc" | "desc" | undefined;
    isDeleted?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: ConversationCountOrderByAggregateInput | undefined;
    _max?: ConversationMaxOrderByAggregateInput | undefined;
    _min?: ConversationMinOrderByAggregateInput | undefined;
}
