import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ConversationUpdateManyWithoutCreatorNestedInput } from "../inputs/ConversationUpdateManyWithoutCreatorNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MessageUpdateManyWithoutFromUserNestedInput } from "../inputs/MessageUpdateManyWithoutFromUserNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PaticipantsUpdateManyWithoutUserNestedInput } from "../inputs/PaticipantsUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserContactUpdateManyWithoutContactUserNestedInput } from "../inputs/UserContactUpdateManyWithoutContactUserNestedInput";
export declare class UserUpdateWithoutOwnerContactInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    username?: NullableStringFieldUpdateOperationsInput | undefined;
    firstName?: NullableStringFieldUpdateOperationsInput | undefined;
    lastName?: NullableStringFieldUpdateOperationsInput | undefined;
    phoneNumber?: NullableStringFieldUpdateOperationsInput | undefined;
    photo?: NullableStringFieldUpdateOperationsInput | undefined;
    isAdmin?: BoolFieldUpdateOperationsInput | undefined;
    active?: BoolFieldUpdateOperationsInput | undefined;
    count?: IntFieldUpdateOperationsInput | undefined;
    Message?: MessageUpdateManyWithoutFromUserNestedInput | undefined;
    Paticipants?: PaticipantsUpdateManyWithoutUserNestedInput | undefined;
    contactUser?: UserContactUpdateManyWithoutContactUserNestedInput | undefined;
    Conversation?: ConversationUpdateManyWithoutCreatorNestedInput | undefined;
}
