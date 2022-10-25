import { Message } from "../models/Message";
import { Paticipants } from "../models/Paticipants";
import { User } from "../models/User";
import { ConversationCount } from "../resolvers/outputs/ConversationCount";
export declare class Conversation {
    id: string;
    name?: string | null;
    secondaryName?: string | null;
    creator?: User;
    creatorId: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    Message?: Message[];
    Paticipants?: Paticipants[];
    _count?: ConversationCount | null;
}
