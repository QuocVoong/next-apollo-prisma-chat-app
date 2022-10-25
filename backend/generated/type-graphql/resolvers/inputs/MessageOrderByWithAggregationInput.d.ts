import { MessageCountOrderByAggregateInput } from "../inputs/MessageCountOrderByAggregateInput";
import { MessageMaxOrderByAggregateInput } from "../inputs/MessageMaxOrderByAggregateInput";
import { MessageMinOrderByAggregateInput } from "../inputs/MessageMinOrderByAggregateInput";
export declare class MessageOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    from?: "asc" | "desc" | undefined;
    conversationId?: "asc" | "desc" | undefined;
    text?: "asc" | "desc" | undefined;
    isDeleted?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: MessageCountOrderByAggregateInput | undefined;
    _max?: MessageMaxOrderByAggregateInput | undefined;
    _min?: MessageMinOrderByAggregateInput | undefined;
}
