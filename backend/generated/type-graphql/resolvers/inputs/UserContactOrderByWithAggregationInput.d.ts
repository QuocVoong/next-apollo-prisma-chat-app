import { UserContactCountOrderByAggregateInput } from "../inputs/UserContactCountOrderByAggregateInput";
import { UserContactMaxOrderByAggregateInput } from "../inputs/UserContactMaxOrderByAggregateInput";
import { UserContactMinOrderByAggregateInput } from "../inputs/UserContactMinOrderByAggregateInput";
export declare class UserContactOrderByWithAggregationInput {
    ownerContactId?: "asc" | "desc" | undefined;
    contactId?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    firstName?: "asc" | "desc" | undefined;
    lastName?: "asc" | "desc" | undefined;
    phoneNumber?: "asc" | "desc" | undefined;
    photo?: "asc" | "desc" | undefined;
    _count?: UserContactCountOrderByAggregateInput | undefined;
    _max?: UserContactMaxOrderByAggregateInput | undefined;
    _min?: UserContactMinOrderByAggregateInput | undefined;
}
