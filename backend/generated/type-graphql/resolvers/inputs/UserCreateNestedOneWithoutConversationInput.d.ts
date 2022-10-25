import { UserCreateOrConnectWithoutConversationInput } from "../inputs/UserCreateOrConnectWithoutConversationInput";
import { UserCreateWithoutConversationInput } from "../inputs/UserCreateWithoutConversationInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutConversationInput {
    create?: UserCreateWithoutConversationInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutConversationInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
