import { Conversation } from "../../../models/Conversation";
import { Message } from "../../../models/Message";
import { User } from "../../../models/User";
export declare class MessageRelationsResolver {
    fromUser(message: Message, ctx: any): Promise<User>;
    conversation(message: Message, ctx: any): Promise<Conversation>;
}
