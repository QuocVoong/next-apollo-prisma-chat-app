import { UserCreateOrConnectWithoutConversationInput } from "../inputs/UserCreateOrConnectWithoutConversationInput";
import { UserCreateWithoutConversationInput } from "../inputs/UserCreateWithoutConversationInput";
import { UserUpdateWithoutConversationInput } from "../inputs/UserUpdateWithoutConversationInput";
import { UserUpsertWithoutConversationInput } from "../inputs/UserUpsertWithoutConversationInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutConversationNestedInput {
    create?: UserCreateWithoutConversationInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutConversationInput | undefined;
    upsert?: UserUpsertWithoutConversationInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutConversationInput | undefined;
}
