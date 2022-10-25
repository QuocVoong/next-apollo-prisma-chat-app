import { GraphQLResolveInfo } from "graphql";
import { FindUniquePaticipantsArgs } from "./args/FindUniquePaticipantsArgs";
import { Paticipants } from "../../../models/Paticipants";
export declare class FindUniquePaticipantsResolver {
    findUniquePaticipants(ctx: any, info: GraphQLResolveInfo, args: FindUniquePaticipantsArgs): Promise<Paticipants | null>;
}
