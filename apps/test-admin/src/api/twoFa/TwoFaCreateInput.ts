import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TwoFaCreateInput = {
  code?: string | null;
  isVerified?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
