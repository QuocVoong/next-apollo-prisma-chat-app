import { ConversationCreateOrConnectWithoutPaticipantsInput } from "../inputs/ConversationCreateOrConnectWithoutPaticipantsInput";
import { ConversationCreateWithoutPaticipantsInput } from "../inputs/ConversationCreateWithoutPaticipantsInput";
import { ConversationUpdateWithoutPaticipantsInput } from "../inputs/ConversationUpdateWithoutPaticipantsInput";
import { ConversationUpsertWithoutPaticipantsInput } from "../inputs/ConversationUpsertWithoutPaticipantsInput";
import { ConversationWhereUniqueInput } from "../inputs/ConversationWhereUniqueInput";
export declare class ConversationUpdateOneRequiredWithoutPaticipantsNestedInput {
    create?: ConversationCreateWithoutPaticipantsInput | undefined;
    connectOrCreate?: ConversationCreateOrConnectWithoutPaticipantsInput | undefined;
    upsert?: ConversationUpsertWithoutPaticipantsInput | undefined;
    connect?: ConversationWhereUniqueInput | undefined;
    update?: ConversationUpdateWithoutPaticipantsInput | undefined;
}
