import { ConversationCreateNestedManyWithoutCreatorInput } from "../inputs/ConversationCreateNestedManyWithoutCreatorInput";
import { MessageCreateNestedManyWithoutFromUserInput } from "../inputs/MessageCreateNestedManyWithoutFromUserInput";
import { UserContactCreateNestedManyWithoutContactUserInput } from "../inputs/UserContactCreateNestedManyWithoutContactUserInput";
import { UserContactCreateNestedManyWithoutOwnerContactInput } from "../inputs/UserContactCreateNestedManyWithoutOwnerContactInput";
export declare class UserCreateWithoutPaticipantsInput {
    id?: string | undefined;
    email: string;
    username?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    phoneNumber?: string | undefined;
    photo?: string | undefined;
    isAdmin?: boolean | undefined;
    active?: boolean | undefined;
    count?: number | undefined;
    Message?: MessageCreateNestedManyWithoutFromUserInput | undefined;
    ownerContact?: UserContactCreateNestedManyWithoutOwnerContactInput | undefined;
    contactUser?: UserContactCreateNestedManyWithoutContactUserInput | undefined;
    Conversation?: ConversationCreateNestedManyWithoutCreatorInput | undefined;
}
