import { ConversationOrderByWithRelationInput } from "../../../inputs/ConversationOrderByWithRelationInput";
import { ConversationWhereInput } from "../../../inputs/ConversationWhereInput";
import { ConversationWhereUniqueInput } from "../../../inputs/ConversationWhereUniqueInput";
export declare class AggregateConversationArgs {
    where?: ConversationWhereInput | undefined;
    orderBy?: ConversationOrderByWithRelationInput[] | undefined;
    cursor?: ConversationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
