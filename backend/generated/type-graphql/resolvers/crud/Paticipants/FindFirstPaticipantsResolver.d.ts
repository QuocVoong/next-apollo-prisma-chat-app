import { GraphQLResolveInfo } from "graphql";
import { FindFirstPaticipantsArgs } from "./args/FindFirstPaticipantsArgs";
import { Paticipants } from "../../../models/Paticipants";
export declare class FindFirstPaticipantsResolver {
    findFirstPaticipants(ctx: any, info: GraphQLResolveInfo, args: FindFirstPaticipantsArgs): Promise<Paticipants | null>;
}
