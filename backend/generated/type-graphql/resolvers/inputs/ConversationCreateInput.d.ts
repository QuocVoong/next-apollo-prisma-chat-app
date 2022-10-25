import { MessageCreateNestedManyWithoutConversationInput } from "../inputs/MessageCreateNestedManyWithoutConversationInput";
import { PaticipantsCreateNestedManyWithoutConversationInput } from "../inputs/PaticipantsCreateNestedManyWithoutConversationInput";
import { UserCreateNestedOneWithoutConversationInput } from "../inputs/UserCreateNestedOneWithoutConversationInput";
export declare class ConversationCreateInput {
    id?: string | undefined;
    name?: string | undefined;
    secondaryName?: string | undefined;
    creator: UserCreateNestedOneWithoutConversationInput;
    isDeleted?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    Message?: MessageCreateNestedManyWithoutConversationInput | undefined;
    Paticipants?: PaticipantsCreateNestedManyWithoutConversationInput | undefined;
}
