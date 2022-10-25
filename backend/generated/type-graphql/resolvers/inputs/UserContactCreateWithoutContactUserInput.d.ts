import { UserCreateNestedOneWithoutOwnerContactInput } from "../inputs/UserCreateNestedOneWithoutOwnerContactInput";
export declare class UserContactCreateWithoutContactUserInput {
    ownerContact?: UserCreateNestedOneWithoutOwnerContactInput | undefined;
    email: string;
    username?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    phoneNumber?: string | undefined;
    photo?: string | undefined;
}
