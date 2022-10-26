import { MessageCreateManyFromUserInputEnvelope } from "../inputs/MessageCreateManyFromUserInputEnvelope";
import { MessageCreateOrConnectWithoutFromUserInput } from "../inputs/MessageCreateOrConnectWithoutFromUserInput";
import { MessageCreateWithoutFromUserInput } from "../inputs/MessageCreateWithoutFromUserInput";
import { MessageScalarWhereInput } from "../inputs/MessageScalarWhereInput";
import { MessageUpdateManyWithWhereWithoutFromUserInput } from "../inputs/MessageUpdateManyWithWhereWithoutFromUserInput";
import { MessageUpdateWithWhereUniqueWithoutFromUserInput } from "../inputs/MessageUpdateWithWhereUniqueWithoutFromUserInput";
import { MessageUpsertWithWhereUniqueWithoutFromUserInput } from "../inputs/MessageUpsertWithWhereUniqueWithoutFromUserInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";
export declare class MessageUpdateManyWithoutFromUserNestedInput {
    create?: MessageCreateWithoutFromUserInput[] | undefined;
    connectOrCreate?: MessageCreateOrConnectWithoutFromUserInput[] | undefined;
    upsert?: MessageUpsertWithWhereUniqueWithoutFromUserInput[] | undefined;
    createMany?: MessageCreateManyFromUserInputEnvelope | undefined;
    set?: MessageWhereUniqueInput[] | undefined;
    disconnect?: MessageWhereUniqueInput[] | undefined;
    delete?: MessageWhereUniqueInput[] | undefined;
    connect?: MessageWhereUniqueInput[] | undefined;
    update?: MessageUpdateWithWhereUniqueWithoutFromUserInput[] | undefined;
    updateMany?: MessageUpdateManyWithWhereWithoutFromUserInput[] | undefined;
    deleteMany?: MessageScalarWhereInput[] | undefined;
}
