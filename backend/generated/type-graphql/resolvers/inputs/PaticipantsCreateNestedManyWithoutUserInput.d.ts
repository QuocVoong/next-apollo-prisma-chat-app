import { PaticipantsCreateOrConnectWithoutUserInput } from "../inputs/PaticipantsCreateOrConnectWithoutUserInput";
import { PaticipantsCreateWithoutUserInput } from "../inputs/PaticipantsCreateWithoutUserInput";
import { PaticipantsWhereUniqueInput } from "../inputs/PaticipantsWhereUniqueInput";
export declare class PaticipantsCreateNestedManyWithoutUserInput {
    create?: PaticipantsCreateWithoutUserInput[] | undefined;
    connectOrCreate?: PaticipantsCreateOrConnectWithoutUserInput[] | undefined;
    connect?: PaticipantsWhereUniqueInput[] | undefined;
}
