import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TwoFaService } from "./twoFa.service";
import { TwoFaControllerBase } from "./base/twoFa.controller.base";

@swagger.ApiTags("twoFas")
@common.Controller("twoFas")
export class TwoFaController extends TwoFaControllerBase {
  constructor(protected readonly service: TwoFaService) {
    super(service);
  }
}
