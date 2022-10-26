import { UserContactCreateManyOwnerContactInputEnvelope } from "../inputs/UserContactCreateManyOwnerContactInputEnvelope";
import { UserContactCreateOrConnectWithoutOwnerContactInput } from "../inputs/UserContactCreateOrConnectWithoutOwnerContactInput";
import { UserContactCreateWithoutOwnerContactInput } from "../inputs/UserContactCreateWithoutOwnerContactInput";
import { UserContactWhereUniqueInput } from "../inputs/UserContactWhereUniqueInput";
export declare class UserContactCreateNestedManyWithoutOwnerContactInput {
    create?: UserContactCreateWithoutOwnerContactInput[] | undefined;
    connectOrCreate?: UserContactCreateOrConnectWithoutOwnerContactInput[] | undefined;
    createMany?: UserContactCreateManyOwnerContactInputEnvelope | undefined;
    connect?: UserContactWhereUniqueInput[] | undefined;
}
