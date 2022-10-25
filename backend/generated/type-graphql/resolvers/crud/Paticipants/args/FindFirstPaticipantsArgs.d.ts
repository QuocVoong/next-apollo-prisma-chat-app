import { PaticipantsOrderByWithRelationInput } from "../../../inputs/PaticipantsOrderByWithRelationInput";
import { PaticipantsWhereInput } from "../../../inputs/PaticipantsWhereInput";
import { PaticipantsWhereUniqueInput } from "../../../inputs/PaticipantsWhereUniqueInput";
export declare class FindFirstPaticipantsArgs {
    where?: PaticipantsWhereInput | undefined;
    orderBy?: PaticipantsOrderByWithRelationInput[] | undefined;
    cursor?: PaticipantsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "type" | "userId" | "conversationId" | "joinedDate" | "leftDate"> | undefined;
}
