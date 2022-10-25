import { UserContactCountAggregate } from "../outputs/UserContactCountAggregate";
import { UserContactMaxAggregate } from "../outputs/UserContactMaxAggregate";
import { UserContactMinAggregate } from "../outputs/UserContactMinAggregate";
export declare class UserContactGroupBy {
    ownerContactId: string;
    contactId: string;
    email: string;
    username: string | null;
    firstName: string | null;
    lastName: string | null;
    phoneNumber: string | null;
    photo: string | null;
    _count: UserContactCountAggregate | null;
    _min: UserContactMinAggregate | null;
    _max: UserContactMaxAggregate | null;
}
