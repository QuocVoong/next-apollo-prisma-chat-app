import { PaticipantsOrderByWithAggregationInput } from "../../../inputs/PaticipantsOrderByWithAggregationInput";
import { PaticipantsScalarWhereWithAggregatesInput } from "../../../inputs/PaticipantsScalarWhereWithAggregatesInput";
import { PaticipantsWhereInput } from "../../../inputs/PaticipantsWhereInput";
export declare class GroupByPaticipantsArgs {
    where?: PaticipantsWhereInput | undefined;
    orderBy?: PaticipantsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "type" | "userId" | "conversationId" | "joinedDate" | "leftDate">;
    having?: PaticipantsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
