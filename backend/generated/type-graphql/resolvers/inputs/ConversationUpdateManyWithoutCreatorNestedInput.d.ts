import { ConversationCreateOrConnectWithoutCreatorInput } from "../inputs/ConversationCreateOrConnectWithoutCreatorInput";
import { ConversationCreateWithoutCreatorInput } from "../inputs/ConversationCreateWithoutCreatorInput";
import { ConversationScalarWhereInput } from "../inputs/ConversationScalarWhereInput";
import { ConversationUpdateManyWithWhereWithoutCreatorInput } from "../inputs/ConversationUpdateManyWithWhereWithoutCreatorInput";
import { ConversationUpdateWithWhereUniqueWithoutCreatorInput } from "../inputs/ConversationUpdateWithWhereUniqueWithoutCreatorInput";
import { ConversationUpsertWithWhereUniqueWithoutCreatorInput } from "../inputs/ConversationUpsertWithWhereUniqueWithoutCreatorInput";
import { ConversationWhereUniqueInput } from "../inputs/ConversationWhereUniqueInput";
export declare class ConversationUpdateManyWithoutCreatorNestedInput {
    create?: ConversationCreateWithoutCreatorInput[] | undefined;
    connectOrCreate?: ConversationCreateOrConnectWithoutCreatorInput[] | undefined;
    upsert?: ConversationUpsertWithWhereUniqueWithoutCreatorInput[] | undefined;
    set?: ConversationWhereUniqueInput[] | undefined;
    disconnect?: ConversationWhereUniqueInput[] | undefined;
    delete?: ConversationWhereUniqueInput[] | undefined;
    connect?: ConversationWhereUniqueInput[] | undefined;
    update?: ConversationUpdateWithWhereUniqueWithoutCreatorInput[] | undefined;
    updateMany?: ConversationUpdateManyWithWhereWithoutCreatorInput[] | undefined;
    deleteMany?: ConversationScalarWhereInput[] | undefined;
}
