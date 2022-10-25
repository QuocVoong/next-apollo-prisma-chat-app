import { MessageCountAggregate } from "../outputs/MessageCountAggregate";
import { MessageMaxAggregate } from "../outputs/MessageMaxAggregate";
import { MessageMinAggregate } from "../outputs/MessageMinAggregate";
export declare class MessageGroupBy {
    id: string;
    from: string;
    conversationId: string;
    text: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: MessageCountAggregate | null;
    _min: MessageMinAggregate | null;
    _max: MessageMaxAggregate | null;
}
