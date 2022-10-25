import { UserCreateOrConnectWithoutContactUserInput } from "../inputs/UserCreateOrConnectWithoutContactUserInput";
import { UserCreateWithoutContactUserInput } from "../inputs/UserCreateWithoutContactUserInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutContactUserInput {
    create?: UserCreateWithoutContactUserInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutContactUserInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
