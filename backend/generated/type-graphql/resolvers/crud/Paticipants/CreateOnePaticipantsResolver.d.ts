import { GraphQLResolveInfo } from "graphql";
import { CreateOnePaticipantsArgs } from "./args/CreateOnePaticipantsArgs";
import { Paticipants } from "../../../models/Paticipants";
export declare class CreateOnePaticipantsResolver {
    createOnePaticipants(ctx: any, info: GraphQLResolveInfo, args: CreateOnePaticipantsArgs): Promise<Paticipants>;
}
