import { MessageCreateInput } from "../../../inputs/MessageCreateInput";
import { MessageUpdateInput } from "../../../inputs/MessageUpdateInput";
import { MessageWhereUniqueInput } from "../../../inputs/MessageWhereUniqueInput";
export declare class UpsertOneMessageArgs {
    where: MessageWhereUniqueInput;
    create: MessageCreateInput;
    update: MessageUpdateInput;
}
