import { UserCreateOrConnectWithoutContactUserInput } from "../inputs/UserCreateOrConnectWithoutContactUserInput";
import { UserCreateWithoutContactUserInput } from "../inputs/UserCreateWithoutContactUserInput";
import { UserUpdateWithoutContactUserInput } from "../inputs/UserUpdateWithoutContactUserInput";
import { UserUpsertWithoutContactUserInput } from "../inputs/UserUpsertWithoutContactUserInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutContactUserNestedInput {
    create?: UserCreateWithoutContactUserInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutContactUserInput | undefined;
    upsert?: UserUpsertWithoutContactUserInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutContactUserInput | undefined;
}
