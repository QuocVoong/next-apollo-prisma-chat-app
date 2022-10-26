import { UserContactCreateManyOwnerContactInputEnvelope } from "../inputs/UserContactCreateManyOwnerContactInputEnvelope";
import { UserContactCreateOrConnectWithoutOwnerContactInput } from "../inputs/UserContactCreateOrConnectWithoutOwnerContactInput";
import { UserContactCreateWithoutOwnerContactInput } from "../inputs/UserContactCreateWithoutOwnerContactInput";
import { UserContactScalarWhereInput } from "../inputs/UserContactScalarWhereInput";
import { UserContactUpdateManyWithWhereWithoutOwnerContactInput } from "../inputs/UserContactUpdateManyWithWhereWithoutOwnerContactInput";
import { UserContactUpdateWithWhereUniqueWithoutOwnerContactInput } from "../inputs/UserContactUpdateWithWhereUniqueWithoutOwnerContactInput";
import { UserContactUpsertWithWhereUniqueWithoutOwnerContactInput } from "../inputs/UserContactUpsertWithWhereUniqueWithoutOwnerContactInput";
import { UserContactWhereUniqueInput } from "../inputs/UserContactWhereUniqueInput";
export declare class UserContactUpdateManyWithoutOwnerContactNestedInput {
    create?: UserContactCreateWithoutOwnerContactInput[] | undefined;
    connectOrCreate?: UserContactCreateOrConnectWithoutOwnerContactInput[] | undefined;
    upsert?: UserContactUpsertWithWhereUniqueWithoutOwnerContactInput[] | undefined;
    createMany?: UserContactCreateManyOwnerContactInputEnvelope | undefined;
    set?: UserContactWhereUniqueInput[] | undefined;
    disconnect?: UserContactWhereUniqueInput[] | undefined;
    delete?: UserContactWhereUniqueInput[] | undefined;
    connect?: UserContactWhereUniqueInput[] | undefined;
    update?: UserContactUpdateWithWhereUniqueWithoutOwnerContactInput[] | undefined;
    updateMany?: UserContactUpdateManyWithWhereWithoutOwnerContactInput[] | undefined;
    deleteMany?: UserContactScalarWhereInput[] | undefined;
}
