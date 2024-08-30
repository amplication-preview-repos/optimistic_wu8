import { InputJsonValue } from "../../types";
import { TwoFaCreateNestedManyWithoutUsersInput } from "./TwoFaCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  twoFas?: TwoFaCreateNestedManyWithoutUsersInput;
  username: string;
};
