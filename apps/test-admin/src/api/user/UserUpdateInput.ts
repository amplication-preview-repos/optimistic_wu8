import { InputJsonValue } from "../../types";
import { TwoFaUpdateManyWithoutUsersInput } from "./TwoFaUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  twoFas?: TwoFaUpdateManyWithoutUsersInput;
  username?: string;
};
