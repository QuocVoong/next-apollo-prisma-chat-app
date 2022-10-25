import { GraphQLResolveInfo } from "graphql";
import { DeleteOnePaticipantsArgs } from "./args/DeleteOnePaticipantsArgs";
import { Paticipants } from "../../../models/Paticipants";
export declare class DeleteOnePaticipantsResolver {
    deleteOnePaticipants(ctx: any, info: GraphQLResolveInfo, args: DeleteOnePaticipantsArgs): Promise<Paticipants | null>;
}
