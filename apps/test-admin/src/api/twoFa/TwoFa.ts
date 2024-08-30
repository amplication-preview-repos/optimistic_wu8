import { User } from "../user/User";

export type TwoFa = {
  code: string | null;
  createdAt: Date;
  id: string;
  isVerified: boolean | null;
  updatedAt: Date;
  user?: User | null;
};
