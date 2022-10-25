import { Conversation } from "../../../models/Conversation";
import { Message } from "../../../models/Message";
import { Paticipants } from "../../../models/Paticipants";
import { User } from "../../../models/User";
import { UserContact } from "../../../models/UserContact";
import { UserContactUserArgs } from "./args/UserContactUserArgs";
import { UserConversationArgs } from "./args/UserConversationArgs";
import { UserMessageArgs } from "./args/UserMessageArgs";
import { UserOwnerContactArgs } from "./args/UserOwnerContactArgs";
import { UserPaticipantsArgs } from "./args/UserPaticipantsArgs";
export declare class UserRelationsResolver {
    Message(user: User, ctx: any, args: UserMessageArgs): Promise<Message[]>;
    Paticipants(user: User, ctx: any, args: UserPaticipantsArgs): Promise<Paticipants[]>;
    ownerContact(user: User, ctx: any, args: UserOwnerContactArgs): Promise<UserContact[]>;
    contactUser(user: User, ctx: any, args: UserContactUserArgs): Promise<UserContact[]>;
    Conversation(user: User, ctx: any, args: UserConversationArgs): Promise<Conversation[]>;
}
