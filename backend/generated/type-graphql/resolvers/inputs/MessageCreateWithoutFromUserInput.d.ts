import { ConversationCreateNestedOneWithoutMessageInput } from "../inputs/ConversationCreateNestedOneWithoutMessageInput";
export declare class MessageCreateWithoutFromUserInput {
    id?: string | undefined;
    conversation: ConversationCreateNestedOneWithoutMessageInput;
    text: string;
    isDeleted?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
