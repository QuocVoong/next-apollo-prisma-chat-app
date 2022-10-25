import { GraphQLResolveInfo } from "graphql";
import { UpdateOnePaticipantsArgs } from "./args/UpdateOnePaticipantsArgs";
import { Paticipants } from "../../../models/Paticipants";
export declare class UpdateOnePaticipantsResolver {
    updateOnePaticipants(ctx: any, info: GraphQLResolveInfo, args: UpdateOnePaticipantsArgs): Promise<Paticipants | null>;
}
