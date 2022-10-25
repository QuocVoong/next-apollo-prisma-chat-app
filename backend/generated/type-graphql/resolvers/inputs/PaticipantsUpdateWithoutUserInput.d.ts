import { ConversationUpdateOneRequiredWithoutPaticipantsNestedInput } from "../inputs/ConversationUpdateOneRequiredWithoutPaticipantsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class PaticipantsUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    type?: StringFieldUpdateOperationsInput | undefined;
    conversation?: ConversationUpdateOneRequiredWithoutPaticipantsNestedInput | undefined;
    joinedDate?: DateTimeFieldUpdateOperationsInput | undefined;
    leftDate?: DateTimeFieldUpdateOperationsInput | undefined;
}
