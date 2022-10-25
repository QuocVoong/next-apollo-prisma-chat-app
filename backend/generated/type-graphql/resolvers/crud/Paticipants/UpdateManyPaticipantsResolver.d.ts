import { GraphQLResolveInfo } from "graphql";
import { UpdateManyPaticipantsArgs } from "./args/UpdateManyPaticipantsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyPaticipantsResolver {
    updateManyPaticipants(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPaticipantsArgs): Promise<AffectedRowsOutput>;
}
