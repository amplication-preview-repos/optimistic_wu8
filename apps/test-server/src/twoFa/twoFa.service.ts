import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TwoFaServiceBase } from "./base/twoFa.service.base";

@Injectable()
export class TwoFaService extends TwoFaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
