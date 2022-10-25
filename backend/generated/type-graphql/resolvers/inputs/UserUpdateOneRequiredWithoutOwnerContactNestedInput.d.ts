import { UserCreateOrConnectWithoutOwnerContactInput } from "../inputs/UserCreateOrConnectWithoutOwnerContactInput";
import { UserCreateWithoutOwnerContactInput } from "../inputs/UserCreateWithoutOwnerContactInput";
import { UserUpdateWithoutOwnerContactInput } from "../inputs/UserUpdateWithoutOwnerContactInput";
import { UserUpsertWithoutOwnerContactInput } from "../inputs/UserUpsertWithoutOwnerContactInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutOwnerContactNestedInput {
    create?: UserCreateWithoutOwnerContactInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutOwnerContactInput | undefined;
    upsert?: UserUpsertWithoutOwnerContactInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutOwnerContactInput | undefined;
}
