import { ConversationCountAggregate } from "../outputs/ConversationCountAggregate";
import { ConversationMaxAggregate } from "../outputs/ConversationMaxAggregate";
import { ConversationMinAggregate } from "../outputs/ConversationMinAggregate";
export declare class AggregateConversation {
    _count: ConversationCountAggregate | null;
    _min: ConversationMinAggregate | null;
    _max: ConversationMaxAggregate | null;
}
