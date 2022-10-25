import { GraphQLResolveInfo } from "graphql";
import { UpdateManyUserContactArgs } from "./args/UpdateManyUserContactArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyUserContactResolver {
    updateManyUserContact(ctx: any, info: GraphQLResolveInfo, args: UpdateManyUserContactArgs): Promise<AffectedRowsOutput>;
}
