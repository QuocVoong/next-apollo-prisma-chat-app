import { GraphQLResolveInfo } from "graphql";
import { AggregateConversationArgs } from "./args/AggregateConversationArgs";
import { CreateOneConversationArgs } from "./args/CreateOneConversationArgs";
import { DeleteManyConversationArgs } from "./args/DeleteManyConversationArgs";
import { DeleteOneConversationArgs } from "./args/DeleteOneConversationArgs";
import { FindFirstConversationArgs } from "./args/FindFirstConversationArgs";
import { FindManyConversationArgs } from "./args/FindManyConversationArgs";
import { FindUniqueConversationArgs } from "./args/FindUniqueConversationArgs";
import { GroupByConversationArgs } from "./args/GroupByConversationArgs";
import { UpdateManyConversationArgs } from "./args/UpdateManyConversationArgs";
import { UpdateOneConversationArgs } from "./args/UpdateOneConversationArgs";
import { UpsertOneConversationArgs } from "./args/UpsertOneConversationArgs";
import { Conversation } from "../../../models/Conversation";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateConversation } from "../../outputs/AggregateConversation";
import { ConversationGroupBy } from "../../outputs/ConversationGroupBy";
export declare class ConversationCrudResolver {
    aggregateConversation(ctx: any, info: GraphQLResolveInfo, args: AggregateConversationArgs): Promise<AggregateConversation>;
    createOneConversation(ctx: any, info: GraphQLResolveInfo, args: CreateOneConversationArgs): Promise<Conversation>;
    deleteManyConversation(ctx: any, info: GraphQLResolveInfo, args: DeleteManyConversationArgs): Promise<AffectedRowsOutput>;
    deleteOneConversation(ctx: any, info: GraphQLResolveInfo, args: DeleteOneConversationArgs): Promise<Conversation | null>;
    findFirstConversation(ctx: any, info: GraphQLResolveInfo, args: FindFirstConversationArgs): Promise<Conversation | null>;
    conversations(ctx: any, info: GraphQLResolveInfo, args: FindManyConversationArgs): Promise<Conversation[]>;
    conversation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueConversationArgs): Promise<Conversation | null>;
    groupByConversation(ctx: any, info: GraphQLResolveInfo, args: GroupByConversationArgs): Promise<ConversationGroupBy[]>;
    updateManyConversation(ctx: any, info: GraphQLResolveInfo, args: UpdateManyConversationArgs): Promise<AffectedRowsOutput>;
    updateOneConversation(ctx: any, info: GraphQLResolveInfo, args: UpdateOneConversationArgs): Promise<Conversation | null>;
    upsertOneConversation(ctx: any, info: GraphQLResolveInfo, args: UpsertOneConversationArgs): Promise<Conversation>;
}