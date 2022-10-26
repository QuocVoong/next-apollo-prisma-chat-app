import { PaticipantsCreateManyUserInputEnvelope } from "../inputs/PaticipantsCreateManyUserInputEnvelope";
import { PaticipantsCreateOrConnectWithoutUserInput } from "../inputs/PaticipantsCreateOrConnectWithoutUserInput";
import { PaticipantsCreateWithoutUserInput } from "../inputs/PaticipantsCreateWithoutUserInput";
import { PaticipantsScalarWhereInput } from "../inputs/PaticipantsScalarWhereInput";
import { PaticipantsUpdateManyWithWhereWithoutUserInput } from "../inputs/PaticipantsUpdateManyWithWhereWithoutUserInput";
import { PaticipantsUpdateWithWhereUniqueWithoutUserInput } from "../inputs/PaticipantsUpdateWithWhereUniqueWithoutUserInput";
import { PaticipantsUpsertWithWhereUniqueWithoutUserInput } from "../inputs/PaticipantsUpsertWithWhereUniqueWithoutUserInput";
import { PaticipantsWhereUniqueInput } from "../inputs/PaticipantsWhereUniqueInput";
export declare class PaticipantsUpdateManyWithoutUserNestedInput {
    create?: PaticipantsCreateWithoutUserInput[] | undefined;
    connectOrCreate?: PaticipantsCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: PaticipantsUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: PaticipantsCreateManyUserInputEnvelope | undefined;
    set?: PaticipantsWhereUniqueInput[] | undefined;
    disconnect?: PaticipantsWhereUniqueInput[] | undefined;
    delete?: PaticipantsWhereUniqueInput[] | undefined;
    connect?: PaticipantsWhereUniqueInput[] | undefined;
    update?: PaticipantsUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: PaticipantsUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: PaticipantsScalarWhereInput[] | undefined;
}
