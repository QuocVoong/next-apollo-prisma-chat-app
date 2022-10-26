import { GraphQLResolveInfo } from "graphql";
import { CreateManyUserContactArgs } from "./args/CreateManyUserContactArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyUserContactResolver {
    createManyUserContact(ctx: any, info: GraphQLResolveInfo, args: CreateManyUserContactArgs): Promise<AffectedRowsOutput>;
}
