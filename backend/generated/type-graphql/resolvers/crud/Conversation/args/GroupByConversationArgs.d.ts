import { ConversationOrderByWithAggregationInput } from "../../../inputs/ConversationOrderByWithAggregationInput";
import { ConversationScalarWhereWithAggregatesInput } from "../../../inputs/ConversationScalarWhereWithAggregatesInput";
import { ConversationWhereInput } from "../../../inputs/ConversationWhereInput";
export declare class GroupByConversationArgs {
    where?: ConversationWhereInput | undefined;
    orderBy?: ConversationOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "secondaryName" | "creatorId" | "isDeleted" | "createdAt" | "updatedAt">;
    having?: ConversationScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
