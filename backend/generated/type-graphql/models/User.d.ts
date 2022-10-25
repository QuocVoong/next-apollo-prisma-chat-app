import { Conversation } from "../models/Conversation";
import { Message } from "../models/Message";
import { Paticipants } from "../models/Paticipants";
import { UserContact } from "../models/UserContact";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    email: string;
    username?: string | null;
    password?: string;
    firstName?: string | null;
    lastName?: string | null;
    phoneNumber?: string | null;
    photo?: string | null;
    isAdmin: boolean;
    active: boolean;
    count: number;
    Message?: Message[];
    Paticipants?: Paticipants[];
    ownerContact?: UserContact[];
    contactUser?: UserContact[];
    Conversation?: Conversation[];
    _count?: UserCount | null;
}
