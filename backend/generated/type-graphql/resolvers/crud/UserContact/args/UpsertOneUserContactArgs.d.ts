import { UserContactCreateInput } from "../../../inputs/UserContactCreateInput";
import { UserContactUpdateInput } from "../../../inputs/UserContactUpdateInput";
import { UserContactWhereUniqueInput } from "../../../inputs/UserContactWhereUniqueInput";
export declare class UpsertOneUserContactArgs {
    where: UserContactWhereUniqueInput;
    create: UserContactCreateInput;
    update: UserContactUpdateInput;
}
