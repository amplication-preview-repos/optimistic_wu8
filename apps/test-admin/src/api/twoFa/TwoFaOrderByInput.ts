import { SortOrder } from "../../util/SortOrder";

export type TwoFaOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isVerified?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
