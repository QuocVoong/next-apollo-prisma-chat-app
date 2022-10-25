import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPaticipantsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutPaticipantsNestedInput";
export declare class PaticipantsUpdateWithoutConversationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    type?: StringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutPaticipantsNestedInput | undefined;
    joinedDate?: DateTimeFieldUpdateOperationsInput | undefined;
    leftDate?: DateTimeFieldUpdateOperationsInput | undefined;
}
