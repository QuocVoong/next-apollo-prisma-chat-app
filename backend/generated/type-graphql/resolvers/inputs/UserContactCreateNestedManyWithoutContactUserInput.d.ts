import { UserContactCreateOrConnectWithoutContactUserInput } from "../inputs/UserContactCreateOrConnectWithoutContactUserInput";
import { UserContactCreateWithoutContactUserInput } from "../inputs/UserContactCreateWithoutContactUserInput";
import { UserContactWhereUniqueInput } from "../inputs/UserContactWhereUniqueInput";
export declare class UserContactCreateNestedManyWithoutContactUserInput {
    create?: UserContactCreateWithoutContactUserInput[] | undefined;
    connectOrCreate?: UserContactCreateOrConnectWithoutContactUserInput[] | undefined;
    connect?: UserContactWhereUniqueInput[] | undefined;
}
