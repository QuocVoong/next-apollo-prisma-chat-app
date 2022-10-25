import { PaticipantsOrderByWithRelationInput } from "../../../inputs/PaticipantsOrderByWithRelationInput";
import { PaticipantsWhereInput } from "../../../inputs/PaticipantsWhereInput";
import { PaticipantsWhereUniqueInput } from "../../../inputs/PaticipantsWhereUniqueInput";
export declare class AggregatePaticipantsArgs {
    where?: PaticipantsWhereInput | undefined;
    orderBy?: PaticipantsOrderByWithRelationInput[] | undefined;
    cursor?: PaticipantsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
