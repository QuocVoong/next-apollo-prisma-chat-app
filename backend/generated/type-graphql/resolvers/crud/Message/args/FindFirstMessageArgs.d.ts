import { MessageOrderByWithRelationInput } from "../../../inputs/MessageOrderByWithRelationInput";
import { MessageWhereInput } from "../../../inputs/MessageWhereInput";
import { MessageWhereUniqueInput } from "../../../inputs/MessageWhereUniqueInput";
export declare class FindFirstMessageArgs {
    where?: MessageWhereInput | undefined;
    orderBy?: MessageOrderByWithRelationInput[] | undefined;
    cursor?: MessageWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "from" | "conversationId" | "text" | "isDeleted" | "createdAt" | "updatedAt"> | undefined;
}
