import { UserCreateOrConnectWithoutMessageInput } from "../inputs/UserCreateOrConnectWithoutMessageInput";
import { UserCreateWithoutMessageInput } from "../inputs/UserCreateWithoutMessageInput";
import { UserUpdateWithoutMessageInput } from "../inputs/UserUpdateWithoutMessageInput";
import { UserUpsertWithoutMessageInput } from "../inputs/UserUpsertWithoutMessageInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutMessageNestedInput {
    create?: UserCreateWithoutMessageInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutMessageInput | undefined;
    upsert?: UserUpsertWithoutMessageInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutMessageInput | undefined;
}
