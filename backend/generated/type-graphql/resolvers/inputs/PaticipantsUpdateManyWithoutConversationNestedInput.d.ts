import { PaticipantsCreateManyConversationInputEnvelope } from "../inputs/PaticipantsCreateManyConversationInputEnvelope";
import { PaticipantsCreateOrConnectWithoutConversationInput } from "../inputs/PaticipantsCreateOrConnectWithoutConversationInput";
import { PaticipantsCreateWithoutConversationInput } from "../inputs/PaticipantsCreateWithoutConversationInput";
import { PaticipantsScalarWhereInput } from "../inputs/PaticipantsScalarWhereInput";
import { PaticipantsUpdateManyWithWhereWithoutConversationInput } from "../inputs/PaticipantsUpdateManyWithWhereWithoutConversationInput";
import { PaticipantsUpdateWithWhereUniqueWithoutConversationInput } from "../inputs/PaticipantsUpdateWithWhereUniqueWithoutConversationInput";
import { PaticipantsUpsertWithWhereUniqueWithoutConversationInput } from "../inputs/PaticipantsUpsertWithWhereUniqueWithoutConversationInput";
import { PaticipantsWhereUniqueInput } from "../inputs/PaticipantsWhereUniqueInput";
export declare class PaticipantsUpdateManyWithoutConversationNestedInput {
    create?: PaticipantsCreateWithoutConversationInput[] | undefined;
    connectOrCreate?: PaticipantsCreateOrConnectWithoutConversationInput[] | undefined;
    upsert?: PaticipantsUpsertWithWhereUniqueWithoutConversationInput[] | undefined;
    createMany?: PaticipantsCreateManyConversationInputEnvelope | undefined;
    set?: PaticipantsWhereUniqueInput[] | undefined;
    disconnect?: PaticipantsWhereUniqueInput[] | undefined;
    delete?: PaticipantsWhereUniqueInput[] | undefined;
    connect?: PaticipantsWhereUniqueInput[] | undefined;
    update?: PaticipantsUpdateWithWhereUniqueWithoutConversationInput[] | undefined;
    updateMany?: PaticipantsUpdateManyWithWhereWithoutConversationInput[] | undefined;
    deleteMany?: PaticipantsScalarWhereInput[] | undefined;
}
