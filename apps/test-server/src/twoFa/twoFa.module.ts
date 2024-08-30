import { Module } from "@nestjs/common";
import { TwoFaModuleBase } from "./base/twoFa.module.base";
import { TwoFaService } from "./twoFa.service";
import { TwoFaController } from "./twoFa.controller";
import { TwoFaResolver } from "./twoFa.resolver";

@Module({
  imports: [TwoFaModuleBase],
  controllers: [TwoFaController],
  providers: [TwoFaService, TwoFaResolver],
  exports: [TwoFaService],
})
export class TwoFaModule {}
