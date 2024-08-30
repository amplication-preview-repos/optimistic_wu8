import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TwoFaListRelationFilter } from "../twoFa/TwoFaListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  twoFas?: TwoFaListRelationFilter;
  username?: StringFilter;
};
