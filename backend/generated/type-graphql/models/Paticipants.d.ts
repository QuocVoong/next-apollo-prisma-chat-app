import { Conversation } from "../models/Conversation";
import { User } from "../models/User";
export declare class Paticipants {
    id: string;
    type: string;
    user?: User;
    userId: string;
    conversation?: Conversation;
    conversationId: string;
    joinedDate: Date;
    leftDate: Date;
}
