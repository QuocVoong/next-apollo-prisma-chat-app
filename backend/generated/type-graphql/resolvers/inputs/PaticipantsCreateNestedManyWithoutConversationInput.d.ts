import { PaticipantsCreateManyConversationInputEnvelope } from "../inputs/PaticipantsCreateManyConversationInputEnvelope";
import { PaticipantsCreateOrConnectWithoutConversationInput } from "../inputs/PaticipantsCreateOrConnectWithoutConversationInput";
import { PaticipantsCreateWithoutConversationInput } from "../inputs/PaticipantsCreateWithoutConversationInput";
import { PaticipantsWhereUniqueInput } from "../inputs/PaticipantsWhereUniqueInput";
export declare class PaticipantsCreateNestedManyWithoutConversationInput {
    create?: PaticipantsCreateWithoutConversationInput[] | undefined;
    connectOrCreate?: PaticipantsCreateOrConnectWithoutConversationInput[] | undefined;
    createMany?: PaticipantsCreateManyConversationInputEnvelope | undefined;
    connect?: PaticipantsWhereUniqueInput[] | undefined;
}
