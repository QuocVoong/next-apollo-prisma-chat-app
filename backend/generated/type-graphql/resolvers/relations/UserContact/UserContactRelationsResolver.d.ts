import { User } from "../../../models/User";
import { UserContact } from "../../../models/UserContact";
export declare class UserContactRelationsResolver {
    ownerContact(userContact: UserContact, ctx: any): Promise<User>;
    contactUser(userContact: UserContact, ctx: any): Promise<User>;
}
