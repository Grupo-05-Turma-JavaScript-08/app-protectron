import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
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

@Get('/:id')
@HttpCode(HttpStatus.OK)
findById(@Param('id', ParseIntPipe) id: number): Promise<Electronic> {
    return this.electronicService.findById(id);
}

@Get('/model/:model')
@HttpCode(HttpStatus.OK)
findAllByModel(@Param('model') model: string): Promise<Electronic[]> {
    return this.electronicService.findAllByModel(model);
}
}