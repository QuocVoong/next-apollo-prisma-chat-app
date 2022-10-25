import { ConversationOrderByWithRelationInput } from "../../../inputs/ConversationOrderByWithRelationInput";
import { ConversationWhereInput } from "../../../inputs/ConversationWhereInput";
import { ConversationWhereUniqueInput } from "../../../inputs/ConversationWhereUniqueInput";
export declare class UserConversationArgs {
    where?: ConversationWhereInput | undefined;
    orderBy?: ConversationOrderByWithRelationInput[] | undefined;
    cursor?: ConversationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "secondaryName" | "creatorId" | "isDeleted" | "createdAt" | "updatedAt"> | undefined;
}
