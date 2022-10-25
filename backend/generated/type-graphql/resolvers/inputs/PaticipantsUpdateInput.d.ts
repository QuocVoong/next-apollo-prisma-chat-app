import { ConversationUpdateOneRequiredWithoutPaticipantsNestedInput } from "../inputs/ConversationUpdateOneRequiredWithoutPaticipantsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPaticipantsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutPaticipantsNestedInput";
export declare class PaticipantsUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    type?: StringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutPaticipantsNestedInput | undefined;
    conversation?: ConversationUpdateOneRequiredWithoutPaticipantsNestedInput | undefined;
    joinedDate?: DateTimeFieldUpdateOperationsInput | undefined;
    leftDate?: DateTimeFieldUpdateOperationsInput | undefined;
}
