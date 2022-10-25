import { GraphQLResolveInfo } from "graphql";
import { FindManyPaticipantsArgs } from "./args/FindManyPaticipantsArgs";
import { Paticipants } from "../../../models/Paticipants";
export declare class FindManyPaticipantsResolver {
    findManyPaticipants(ctx: any, info: GraphQLResolveInfo, args: FindManyPaticipantsArgs): Promise<Paticipants[]>;
}
