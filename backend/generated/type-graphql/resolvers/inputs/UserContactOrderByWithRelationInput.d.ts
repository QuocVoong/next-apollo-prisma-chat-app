import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class UserContactOrderByWithRelationInput {
    ownerContact?: UserOrderByWithRelationInput | undefined;
    ownerContactId?: "asc" | "desc" | undefined;
    contactUser?: UserOrderByWithRelationInput | undefined;
    contactId?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    firstName?: "asc" | "desc" | undefined;
    lastName?: "asc" | "desc" | undefined;
    phoneNumber?: "asc" | "desc" | undefined;
    photo?: "asc" | "desc" | undefined;
}
