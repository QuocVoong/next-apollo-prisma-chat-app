import { UserContactCreateManyContactUserInputEnvelope } from "../inputs/UserContactCreateManyContactUserInputEnvelope";
import { UserContactCreateOrConnectWithoutContactUserInput } from "../inputs/UserContactCreateOrConnectWithoutContactUserInput";
import { UserContactCreateWithoutContactUserInput } from "../inputs/UserContactCreateWithoutContactUserInput";
import { UserContactScalarWhereInput } from "../inputs/UserContactScalarWhereInput";
import { UserContactUpdateManyWithWhereWithoutContactUserInput } from "../inputs/UserContactUpdateManyWithWhereWithoutContactUserInput";
import { UserContactUpdateWithWhereUniqueWithoutContactUserInput } from "../inputs/UserContactUpdateWithWhereUniqueWithoutContactUserInput";
import { UserContactUpsertWithWhereUniqueWithoutContactUserInput } from "../inputs/UserContactUpsertWithWhereUniqueWithoutContactUserInput";
import { UserContactWhereUniqueInput } from "../inputs/UserContactWhereUniqueInput";
export declare class UserContactUpdateManyWithoutContactUserNestedInput {
    create?: UserContactCreateWithoutContactUserInput[] | undefined;
    connectOrCreate?: UserContactCreateOrConnectWithoutContactUserInput[] | undefined;
    upsert?: UserContactUpsertWithWhereUniqueWithoutContactUserInput[] | undefined;
    createMany?: UserContactCreateManyContactUserInputEnvelope | undefined;
    set?: UserContactWhereUniqueInput[] | undefined;
    disconnect?: UserContactWhereUniqueInput[] | undefined;
    delete?: UserContactWhereUniqueInput[] | undefined;
    connect?: UserContactWhereUniqueInput[] | undefined;
    update?: UserContactUpdateWithWhereUniqueWithoutContactUserInput[] | undefined;
    updateMany?: UserContactUpdateManyWithWhereWithoutContactUserInput[] | undefined;
    deleteMany?: UserContactScalarWhereInput[] | undefined;
}
