import { UserCreateNestedOneWithoutPaticipantsInput } from "../inputs/UserCreateNestedOneWithoutPaticipantsInput";
export declare class PaticipantsCreateWithoutConversationInput {
    id?: string | undefined;
    type?: string | undefined;
    user: UserCreateNestedOneWithoutPaticipantsInput;
    joinedDate?: Date | undefined;
    leftDate?: Date | undefined;
}
