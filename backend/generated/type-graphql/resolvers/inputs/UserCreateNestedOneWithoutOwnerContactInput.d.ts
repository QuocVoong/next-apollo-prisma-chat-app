import { UserCreateOrConnectWithoutOwnerContactInput } from "../inputs/UserCreateOrConnectWithoutOwnerContactInput";
import { UserCreateWithoutOwnerContactInput } from "../inputs/UserCreateWithoutOwnerContactInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutOwnerContactInput {
    create?: UserCreateWithoutOwnerContactInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutOwnerContactInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
