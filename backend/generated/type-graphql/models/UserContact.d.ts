import { User } from "../models/User";
export declare class UserContact {
    ownerContact?: User;
    ownerContactId: string;
    contactUser?: User;
    contactId: string;
    email: string;
    username?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    phoneNumber?: string | null;
    photo?: string | null;
}
