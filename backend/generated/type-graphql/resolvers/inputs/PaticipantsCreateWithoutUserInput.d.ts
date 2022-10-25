import { ConversationCreateNestedOneWithoutPaticipantsInput } from "../inputs/ConversationCreateNestedOneWithoutPaticipantsInput";
export declare class PaticipantsCreateWithoutUserInput {
    id?: string | undefined;
    type?: string | undefined;
    conversation: ConversationCreateNestedOneWithoutPaticipantsInput;
    joinedDate?: Date | undefined;
    leftDate?: Date | undefined;
}
