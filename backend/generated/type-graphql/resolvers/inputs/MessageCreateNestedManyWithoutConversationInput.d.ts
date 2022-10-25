import { MessageCreateOrConnectWithoutConversationInput } from "../inputs/MessageCreateOrConnectWithoutConversationInput";
import { MessageCreateWithoutConversationInput } from "../inputs/MessageCreateWithoutConversationInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";
export declare class MessageCreateNestedManyWithoutConversationInput {
    create?: MessageCreateWithoutConversationInput[] | undefined;
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput[] | undefined;
    connect?: MessageWhereUniqueInput[] | undefined;
}
