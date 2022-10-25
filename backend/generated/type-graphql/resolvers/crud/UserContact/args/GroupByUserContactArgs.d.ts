import { UserContactOrderByWithAggregationInput } from "../../../inputs/UserContactOrderByWithAggregationInput";
import { UserContactScalarWhereWithAggregatesInput } from "../../../inputs/UserContactScalarWhereWithAggregatesInput";
import { UserContactWhereInput } from "../../../inputs/UserContactWhereInput";
export declare class GroupByUserContactArgs {
    where?: UserContactWhereInput | undefined;
    orderBy?: UserContactOrderByWithAggregationInput[] | undefined;
    by: Array<"ownerContactId" | "contactId" | "email" | "username" | "firstName" | "lastName" | "phoneNumber" | "photo">;
    having?: UserContactScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
