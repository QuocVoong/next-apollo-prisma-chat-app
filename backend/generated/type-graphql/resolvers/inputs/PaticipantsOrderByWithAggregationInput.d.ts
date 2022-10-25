import { PaticipantsCountOrderByAggregateInput } from "../inputs/PaticipantsCountOrderByAggregateInput";
import { PaticipantsMaxOrderByAggregateInput } from "../inputs/PaticipantsMaxOrderByAggregateInput";
import { PaticipantsMinOrderByAggregateInput } from "../inputs/PaticipantsMinOrderByAggregateInput";
export declare class PaticipantsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    conversationId?: "asc" | "desc" | undefined;
    joinedDate?: "asc" | "desc" | undefined;
    leftDate?: "asc" | "desc" | undefined;
    _count?: PaticipantsCountOrderByAggregateInput | undefined;
    _max?: PaticipantsMaxOrderByAggregateInput | undefined;
    _min?: PaticipantsMinOrderByAggregateInput | undefined;
}
