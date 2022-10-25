import { Conversation } from "../../../models/Conversation";
import { Message } from "../../../models/Message";
import { Paticipants } from "../../../models/Paticipants";
import { User } from "../../../models/User";
import { ConversationMessageArgs } from "./args/ConversationMessageArgs";
import { ConversationPaticipantsArgs } from "./args/ConversationPaticipantsArgs";
export declare class ConversationRelationsResolver {
    creator(conversation: Conversation, ctx: any): Promise<User>;
    Message(conversation: Conversation, ctx: any, args: ConversationMessageArgs): Promise<Message[]>;
    Paticipants(conversation: Conversation, ctx: any, args: ConversationPaticipantsArgs): Promise<Paticipants[]>;
}
