import { UserCreateOrConnectWithoutMessageInput } from "../inputs/UserCreateOrConnectWithoutMessageInput";
import { UserCreateWithoutMessageInput } from "../inputs/UserCreateWithoutMessageInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutMessageInput {
    create?: UserCreateWithoutMessageInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutMessageInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
