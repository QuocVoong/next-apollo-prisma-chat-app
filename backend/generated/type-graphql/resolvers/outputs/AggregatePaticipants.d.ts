import { PaticipantsCountAggregate } from "../outputs/PaticipantsCountAggregate";
import { PaticipantsMaxAggregate } from "../outputs/PaticipantsMaxAggregate";
import { PaticipantsMinAggregate } from "../outputs/PaticipantsMinAggregate";
export declare class AggregatePaticipants {
    _count: PaticipantsCountAggregate | null;
    _min: PaticipantsMinAggregate | null;
    _max: PaticipantsMaxAggregate | null;
}
