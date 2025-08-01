import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { ElectronicService } from "../services/electronic.service";
import { Electronic } from "../entites/electronic.entity";

@Controller('electronic')
export class ElectronicController {
  constructor(private readonly electronicService: ElectronicService){}

  @Get()
  @HttpCode(HttpStatus.OK)
   findAll(): Promise<Electronic[]> {
    return this.electronicService.findAll();
}
}