import { Conversation } from "../models/Conversation";
import { User } from "../models/User";
export declare class Message {
    id: string;
    fromUser?: User;
    from: string;
    conversation?: Conversation;
    conversationId: string;
    text: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
