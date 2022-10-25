import { GraphQLResolveInfo } from "graphql";
import { AggregatePaticipantsArgs } from "./args/AggregatePaticipantsArgs";
import { CreateOnePaticipantsArgs } from "./args/CreateOnePaticipantsArgs";
import { DeleteManyPaticipantsArgs } from "./args/DeleteManyPaticipantsArgs";
import { DeleteOnePaticipantsArgs } from "./args/DeleteOnePaticipantsArgs";
import { FindFirstPaticipantsArgs } from "./args/FindFirstPaticipantsArgs";
import { FindManyPaticipantsArgs } from "./args/FindManyPaticipantsArgs";
import { FindUniquePaticipantsArgs } from "./args/FindUniquePaticipantsArgs";
import { GroupByPaticipantsArgs } from "./args/GroupByPaticipantsArgs";
import { UpdateManyPaticipantsArgs } from "./args/UpdateManyPaticipantsArgs";
import { UpdateOnePaticipantsArgs } from "./args/UpdateOnePaticipantsArgs";
import { UpsertOnePaticipantsArgs } from "./args/UpsertOnePaticipantsArgs";
import { Paticipants } from "../../../models/Paticipants";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePaticipants } from "../../outputs/AggregatePaticipants";
import { PaticipantsGroupBy } from "../../outputs/PaticipantsGroupBy";
export declare class PaticipantsCrudResolver {
    aggregatePaticipants(ctx: any, info: GraphQLResolveInfo, args: AggregatePaticipantsArgs): Promise<AggregatePaticipants>;
    createOnePaticipants(ctx: any, info: GraphQLResolveInfo, args: CreateOnePaticipantsArgs): Promise<Paticipants>;
    deleteManyPaticipants(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPaticipantsArgs): Promise<AffectedRowsOutput>;
    deleteOnePaticipants(ctx: any, info: GraphQLResolveInfo, args: DeleteOnePaticipantsArgs): Promise<Paticipants | null>;
    findFirstPaticipants(ctx: any, info: GraphQLResolveInfo, args: FindFirstPaticipantsArgs): Promise<Paticipants | null>;
    findManyPaticipants(ctx: any, info: GraphQLResolveInfo, args: FindManyPaticipantsArgs): Promise<Paticipants[]>;
    findUniquePaticipants(ctx: any, info: GraphQLResolveInfo, args: FindUniquePaticipantsArgs): Promise<Paticipants | null>;
    groupByPaticipants(ctx: any, info: GraphQLResolveInfo, args: GroupByPaticipantsArgs): Promise<PaticipantsGroupBy[]>;
    updateManyPaticipants(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPaticipantsArgs): Promise<AffectedRowsOutput>;
    updateOnePaticipants(ctx: any, info: GraphQLResolveInfo, args: UpdateOnePaticipantsArgs): Promise<Paticipants | null>;
    upsertOnePaticipants(ctx: any, info: GraphQLResolveInfo, args: UpsertOnePaticipantsArgs): Promise<Paticipants>;
}