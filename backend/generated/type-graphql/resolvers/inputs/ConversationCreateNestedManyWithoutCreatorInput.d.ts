import { ConversationCreateOrConnectWithoutCreatorInput } from "../inputs/ConversationCreateOrConnectWithoutCreatorInput";
import { ConversationCreateWithoutCreatorInput } from "../inputs/ConversationCreateWithoutCreatorInput";
import { ConversationWhereUniqueInput } from "../inputs/ConversationWhereUniqueInput";
export declare class ConversationCreateNestedManyWithoutCreatorInput {
    create?: ConversationCreateWithoutCreatorInput[] | undefined;
    connectOrCreate?: ConversationCreateOrConnectWithoutCreatorInput[] | undefined;
    connect?: ConversationWhereUniqueInput[] | undefined;
}
