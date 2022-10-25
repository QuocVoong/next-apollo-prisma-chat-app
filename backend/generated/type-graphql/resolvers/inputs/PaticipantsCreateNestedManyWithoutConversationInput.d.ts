import { PaticipantsCreateOrConnectWithoutConversationInput } from "../inputs/PaticipantsCreateOrConnectWithoutConversationInput";
import { PaticipantsCreateWithoutConversationInput } from "../inputs/PaticipantsCreateWithoutConversationInput";
import { PaticipantsWhereUniqueInput } from "../inputs/PaticipantsWhereUniqueInput";
export declare class PaticipantsCreateNestedManyWithoutConversationInput {
    create?: PaticipantsCreateWithoutConversationInput[] | undefined;
    connectOrCreate?: PaticipantsCreateOrConnectWithoutConversationInput[] | undefined;
    connect?: PaticipantsWhereUniqueInput[] | undefined;
}
