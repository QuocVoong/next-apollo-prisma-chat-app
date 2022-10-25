import { UserCreateOrConnectWithoutPaticipantsInput } from "../inputs/UserCreateOrConnectWithoutPaticipantsInput";
import { UserCreateWithoutPaticipantsInput } from "../inputs/UserCreateWithoutPaticipantsInput";
import { UserUpdateWithoutPaticipantsInput } from "../inputs/UserUpdateWithoutPaticipantsInput";
import { UserUpsertWithoutPaticipantsInput } from "../inputs/UserUpsertWithoutPaticipantsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutPaticipantsNestedInput {
    create?: UserCreateWithoutPaticipantsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutPaticipantsInput | undefined;
    upsert?: UserUpsertWithoutPaticipantsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutPaticipantsInput | undefined;
}
