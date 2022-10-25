import { GraphQLResolveInfo } from "graphql";
import { DeleteManyUserContactArgs } from "./args/DeleteManyUserContactArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyUserContactResolver {
    deleteManyUserContact(ctx: any, info: GraphQLResolveInfo, args: DeleteManyUserContactArgs): Promise<AffectedRowsOutput>;
}
