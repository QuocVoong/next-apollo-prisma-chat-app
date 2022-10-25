import { MessageCreateOrConnectWithoutConversationInput } from "../inputs/MessageCreateOrConnectWithoutConversationInput";
import { MessageCreateWithoutConversationInput } from "../inputs/MessageCreateWithoutConversationInput";
import { MessageScalarWhereInput } from "../inputs/MessageScalarWhereInput";
import { MessageUpdateManyWithWhereWithoutConversationInput } from "../inputs/MessageUpdateManyWithWhereWithoutConversationInput";
import { MessageUpdateWithWhereUniqueWithoutConversationInput } from "../inputs/MessageUpdateWithWhereUniqueWithoutConversationInput";
import { MessageUpsertWithWhereUniqueWithoutConversationInput } from "../inputs/MessageUpsertWithWhereUniqueWithoutConversationInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";
export declare class MessageUpdateManyWithoutConversationNestedInput {
    create?: MessageCreateWithoutConversationInput[] | undefined;
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput[] | undefined;
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput[] | undefined;
    set?: MessageWhereUniqueInput[] | undefined;
    disconnect?: MessageWhereUniqueInput[] | undefined;
    delete?: MessageWhereUniqueInput[] | undefined;
    connect?: MessageWhereUniqueInput[] | undefined;
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput[] | undefined;
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput[] | undefined;
    deleteMany?: MessageScalarWhereInput[] | undefined;
}
