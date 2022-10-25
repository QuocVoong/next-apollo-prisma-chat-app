import { GraphQLResolveInfo } from "graphql";
import { DeleteManyPaticipantsArgs } from "./args/DeleteManyPaticipantsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyPaticipantsResolver {
    deleteManyPaticipants(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPaticipantsArgs): Promise<AffectedRowsOutput>;
}
