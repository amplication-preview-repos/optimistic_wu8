import { TwoFa as TTwoFa } from "../api/twoFa/TwoFa";

export const TWOFA_TITLE_FIELD = "code";

export const TwoFaTitle = (record: TTwoFa): string => {
  return record.code?.toString() || String(record.id);
};
