import { UserCreateOrConnectWithoutPaticipantsInput } from "../inputs/UserCreateOrConnectWithoutPaticipantsInput";
import { UserCreateWithoutPaticipantsInput } from "../inputs/UserCreateWithoutPaticipantsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutPaticipantsInput {
    create?: UserCreateWithoutPaticipantsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutPaticipantsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
