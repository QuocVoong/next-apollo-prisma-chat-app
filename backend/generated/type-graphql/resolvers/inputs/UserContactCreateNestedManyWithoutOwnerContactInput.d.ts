import { UserContactCreateOrConnectWithoutOwnerContactInput } from "../inputs/UserContactCreateOrConnectWithoutOwnerContactInput";
import { UserContactCreateWithoutOwnerContactInput } from "../inputs/UserContactCreateWithoutOwnerContactInput";
import { UserContactWhereUniqueInput } from "../inputs/UserContactWhereUniqueInput";
export declare class UserContactCreateNestedManyWithoutOwnerContactInput {
    create?: UserContactCreateWithoutOwnerContactInput[] | undefined;
    connectOrCreate?: UserContactCreateOrConnectWithoutOwnerContactInput[] | undefined;
    connect?: UserContactWhereUniqueInput[] | undefined;
}
