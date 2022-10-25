import { GraphQLResolveInfo } from "graphql";
import { UpsertOneMessageArgs } from "./args/UpsertOneMessageArgs";
import { Message } from "../../../models/Message";
export declare class UpsertOneMessageResolver {
    upsertOneMessage(ctx: any, info: GraphQLResolveInfo, args: UpsertOneMessageArgs): Promise<Message>;
}
