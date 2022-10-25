import { ConversationCountAggregate } from "../outputs/ConversationCountAggregate";
import { ConversationMaxAggregate } from "../outputs/ConversationMaxAggregate";
import { ConversationMinAggregate } from "../outputs/ConversationMinAggregate";
export declare class ConversationGroupBy {
    id: string;
    name: string | null;
    secondaryName: string | null;
    creatorId: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ConversationCountAggregate | null;
    _min: ConversationMinAggregate | null;
    _max: ConversationMaxAggregate | null;
}
