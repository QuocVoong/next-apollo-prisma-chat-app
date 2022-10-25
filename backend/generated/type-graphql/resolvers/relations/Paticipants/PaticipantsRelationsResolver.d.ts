import { Conversation } from "../../../models/Conversation";
import { Paticipants } from "../../../models/Paticipants";
import { User } from "../../../models/User";
export declare class PaticipantsRelationsResolver {
    user(paticipants: Paticipants, ctx: any): Promise<User>;
    conversation(paticipants: Paticipants, ctx: any): Promise<Conversation>;
}
