import { MessageCreateOrConnectWithoutFromUserInput } from "../inputs/MessageCreateOrConnectWithoutFromUserInput";
import { MessageCreateWithoutFromUserInput } from "../inputs/MessageCreateWithoutFromUserInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";
export declare class MessageCreateNestedManyWithoutFromUserInput {
    create?: MessageCreateWithoutFromUserInput[] | undefined;
    connectOrCreate?: MessageCreateOrConnectWithoutFromUserInput[] | undefined;
    connect?: MessageWhereUniqueInput[] | undefined;
}
