import { UserContactCreateManyContactUserInputEnvelope } from "../inputs/UserContactCreateManyContactUserInputEnvelope";
import { UserContactCreateOrConnectWithoutContactUserInput } from "../inputs/UserContactCreateOrConnectWithoutContactUserInput";
import { UserContactCreateWithoutContactUserInput } from "../inputs/UserContactCreateWithoutContactUserInput";
import { UserContactWhereUniqueInput } from "../inputs/UserContactWhereUniqueInput";
export declare class UserContactCreateNestedManyWithoutContactUserInput {
    create?: UserContactCreateWithoutContactUserInput[] | undefined;
    connectOrCreate?: UserContactCreateOrConnectWithoutContactUserInput[] | undefined;
    createMany?: UserContactCreateManyContactUserInputEnvelope | undefined;
    connect?: UserContactWhereUniqueInput[] | undefined;
}
