import { MessageOrderByWithAggregationInput } from "../../../inputs/MessageOrderByWithAggregationInput";
import { MessageScalarWhereWithAggregatesInput } from "../../../inputs/MessageScalarWhereWithAggregatesInput";
import { MessageWhereInput } from "../../../inputs/MessageWhereInput";
export declare class GroupByMessageArgs {
    where?: MessageWhereInput | undefined;
    orderBy?: MessageOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "from" | "conversationId" | "text" | "isDeleted" | "createdAt" | "updatedAt">;
    having?: MessageScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
