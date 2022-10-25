import { GraphQLResolveInfo } from "graphql";
import { UpsertOnePaticipantsArgs } from "./args/UpsertOnePaticipantsArgs";
import { Paticipants } from "../../../models/Paticipants";
export declare class UpsertOnePaticipantsResolver {
    upsertOnePaticipants(ctx: any, info: GraphQLResolveInfo, args: UpsertOnePaticipantsArgs): Promise<Paticipants>;
}
