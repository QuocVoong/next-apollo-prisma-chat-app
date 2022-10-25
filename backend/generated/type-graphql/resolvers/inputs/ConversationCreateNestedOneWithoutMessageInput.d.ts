import { ConversationCreateOrConnectWithoutMessageInput } from "../inputs/ConversationCreateOrConnectWithoutMessageInput";
import { ConversationCreateWithoutMessageInput } from "../inputs/ConversationCreateWithoutMessageInput";
import { ConversationWhereUniqueInput } from "../inputs/ConversationWhereUniqueInput";
export declare class ConversationCreateNestedOneWithoutMessageInput {
    create?: ConversationCreateWithoutMessageInput | undefined;
    connectOrCreate?: ConversationCreateOrConnectWithoutMessageInput | undefined;
    connect?: ConversationWhereUniqueInput | undefined;
}
