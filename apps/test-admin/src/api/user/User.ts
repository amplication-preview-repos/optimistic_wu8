import { JsonValue } from "type-fest";
import { TwoFa } from "../twoFa/TwoFa";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  twoFas?: Array<TwoFa>;
  updatedAt: Date;
  username: string;
};
