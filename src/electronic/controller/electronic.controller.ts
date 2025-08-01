import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ElectronicService } from "../services/electronic.service";
import { Electronic } from "../entites/electronic.entity";

@Controller('electronic')
export class ElectronicController {
    constructor(private readonly electronicService: ElectronicService) { }

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
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() electronic: Electronic): Promise<Electronic> {
        return this.electronicService.create(electronic);
    }
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() electronic: Electronic): Promise<Electronic> {
        return this.electronicService.update(electronic);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.electronicService.delete(id);
    }
}