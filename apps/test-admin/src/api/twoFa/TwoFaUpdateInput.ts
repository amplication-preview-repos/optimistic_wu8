import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TwoFaUpdateInput = {
  code?: string | null;
  isVerified?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
