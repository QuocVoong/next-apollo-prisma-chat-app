import { ConversationCreateNestedOneWithoutPaticipantsInput } from "../inputs/ConversationCreateNestedOneWithoutPaticipantsInput";
import { UserCreateNestedOneWithoutPaticipantsInput } from "../inputs/UserCreateNestedOneWithoutPaticipantsInput";
export declare class PaticipantsCreateInput {
    id?: string | undefined;
    type?: string | undefined;
    user: UserCreateNestedOneWithoutPaticipantsInput;
    conversation: ConversationCreateNestedOneWithoutPaticipantsInput;
    joinedDate?: Date | undefined;
    leftDate?: Date | undefined;
}
