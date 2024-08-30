import * as graphql from "@nestjs/graphql";
import { TwoFaResolverBase } from "./base/twoFa.resolver.base";
import { TwoFa } from "./base/TwoFa";
import { TwoFaService } from "./twoFa.service";

@graphql.Resolver(() => TwoFa)
export class TwoFaResolver extends TwoFaResolverBase {
  constructor(protected readonly service: TwoFaService) {
    super(service);
  }
}
