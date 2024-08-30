import { TwoFaWhereInput } from "./TwoFaWhereInput";
import { TwoFaOrderByInput } from "./TwoFaOrderByInput";

export type TwoFaFindManyArgs = {
  where?: TwoFaWhereInput;
  orderBy?: Array<TwoFaOrderByInput>;
  skip?: number;
  take?: number;
};
