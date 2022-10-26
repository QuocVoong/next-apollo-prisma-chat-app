import { MessageCreateManyFromUserInputEnvelope } from "../inputs/MessageCreateManyFromUserInputEnvelope";
import { MessageCreateOrConnectWithoutFromUserInput } from "../inputs/MessageCreateOrConnectWithoutFromUserInput";
import { MessageCreateWithoutFromUserInput } from "../inputs/MessageCreateWithoutFromUserInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";
export declare class MessageCreateNestedManyWithoutFromUserInput {
    create?: MessageCreateWithoutFromUserInput[] | undefined;
    connectOrCreate?: MessageCreateOrConnectWithoutFromUserInput[] | undefined;
    createMany?: MessageCreateManyFromUserInputEnvelope | undefined;
    connect?: MessageWhereUniqueInput[] | undefined;
}
