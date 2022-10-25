import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MessageUpdateManyWithoutFromUserNestedInput } from "../inputs/MessageUpdateManyWithoutFromUserNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PaticipantsUpdateManyWithoutUserNestedInput } from "../inputs/PaticipantsUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserContactUpdateManyWithoutContactUserNestedInput } from "../inputs/UserContactUpdateManyWithoutContactUserNestedInput";
import { UserContactUpdateManyWithoutOwnerContactNestedInput } from "../inputs/UserContactUpdateManyWithoutOwnerContactNestedInput";
export declare class UserUpdateWithoutConversationInput {
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
    ownerContact?: UserContactUpdateManyWithoutOwnerContactNestedInput | undefined;
    contactUser?: UserContactUpdateManyWithoutContactUserNestedInput | undefined;
}
