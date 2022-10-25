import { ConversationCreateOrConnectWithoutPaticipantsInput } from "../inputs/ConversationCreateOrConnectWithoutPaticipantsInput";
import { ConversationCreateWithoutPaticipantsInput } from "../inputs/ConversationCreateWithoutPaticipantsInput";
import { ConversationWhereUniqueInput } from "../inputs/ConversationWhereUniqueInput";
export declare class ConversationCreateNestedOneWithoutPaticipantsInput {
    create?: ConversationCreateWithoutPaticipantsInput | undefined;
    connectOrCreate?: ConversationCreateOrConnectWithoutPaticipantsInput | undefined;
    connect?: ConversationWhereUniqueInput | undefined;
}
