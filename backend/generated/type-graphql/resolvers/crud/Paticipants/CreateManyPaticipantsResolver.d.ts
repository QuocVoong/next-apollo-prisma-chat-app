import { GraphQLResolveInfo } from "graphql";
import { CreateManyPaticipantsArgs } from "./args/CreateManyPaticipantsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyPaticipantsResolver {
    createManyPaticipants(ctx: any, info: GraphQLResolveInfo, args: CreateManyPaticipantsArgs): Promise<AffectedRowsOutput>;
}
