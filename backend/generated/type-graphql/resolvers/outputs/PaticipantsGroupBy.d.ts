import { PaticipantsCountAggregate } from "../outputs/PaticipantsCountAggregate";
import { PaticipantsMaxAggregate } from "../outputs/PaticipantsMaxAggregate";
import { PaticipantsMinAggregate } from "../outputs/PaticipantsMinAggregate";
export declare class PaticipantsGroupBy {
    id: string;
    type: string;
    userId: string;
    conversationId: string;
    joinedDate: Date;
    leftDate: Date;
    _count: PaticipantsCountAggregate | null;
    _min: PaticipantsMinAggregate | null;
    _max: PaticipantsMaxAggregate | null;
}
