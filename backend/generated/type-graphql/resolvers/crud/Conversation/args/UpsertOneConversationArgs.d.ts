import { ConversationCreateInput } from "../../../inputs/ConversationCreateInput";
import { ConversationUpdateInput } from "../../../inputs/ConversationUpdateInput";
import { ConversationWhereUniqueInput } from "../../../inputs/ConversationWhereUniqueInput";
export declare class UpsertOneConversationArgs {
    where: ConversationWhereUniqueInput;
    create: ConversationCreateInput;
    update: ConversationUpdateInput;
}
