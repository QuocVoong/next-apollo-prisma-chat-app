import { UserContactCountAggregate } from "../outputs/UserContactCountAggregate";
import { UserContactMaxAggregate } from "../outputs/UserContactMaxAggregate";
import { UserContactMinAggregate } from "../outputs/UserContactMinAggregate";
export declare class AggregateUserContact {
    _count: UserContactCountAggregate | null;
    _min: UserContactMinAggregate | null;
    _max: UserContactMaxAggregate | null;
}
