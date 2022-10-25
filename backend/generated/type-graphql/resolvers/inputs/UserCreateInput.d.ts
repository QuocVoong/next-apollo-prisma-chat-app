import { ConversationCreateNestedManyWithoutCreatorInput } from "../inputs/ConversationCreateNestedManyWithoutCreatorInput";
import { MessageCreateNestedManyWithoutFromUserInput } from "../inputs/MessageCreateNestedManyWithoutFromUserInput";
import { PaticipantsCreateNestedManyWithoutUserInput } from "../inputs/PaticipantsCreateNestedManyWithoutUserInput";
import { UserContactCreateNestedManyWithoutContactUserInput } from "../inputs/UserContactCreateNestedManyWithoutContactUserInput";
import { UserContactCreateNestedManyWithoutOwnerContactInput } from "../inputs/UserContactCreateNestedManyWithoutOwnerContactInput";
export declare class UserCreateInput {
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
    Paticipants?: PaticipantsCreateNestedManyWithoutUserInput | undefined;
    ownerContact?: UserContactCreateNestedManyWithoutOwnerContactInput | undefined;
    contactUser?: UserContactCreateNestedManyWithoutContactUserInput | undefined;
    Conversation?: ConversationCreateNestedManyWithoutCreatorInput | undefined;
}
