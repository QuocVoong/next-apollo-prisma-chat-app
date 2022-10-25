import { ConversationCreateOrConnectWithoutMessageInput } from "../inputs/ConversationCreateOrConnectWithoutMessageInput";
import { ConversationCreateWithoutMessageInput } from "../inputs/ConversationCreateWithoutMessageInput";
import { ConversationUpdateWithoutMessageInput } from "../inputs/ConversationUpdateWithoutMessageInput";
import { ConversationUpsertWithoutMessageInput } from "../inputs/ConversationUpsertWithoutMessageInput";
import { ConversationWhereUniqueInput } from "../inputs/ConversationWhereUniqueInput";
export declare class ConversationUpdateOneRequiredWithoutMessageNestedInput {
    create?: ConversationCreateWithoutMessageInput | undefined;
    connectOrCreate?: ConversationCreateOrConnectWithoutMessageInput | undefined;
    upsert?: ConversationUpsertWithoutMessageInput | undefined;
    connect?: ConversationWhereUniqueInput | undefined;
    update?: ConversationUpdateWithoutMessageInput | undefined;
}
