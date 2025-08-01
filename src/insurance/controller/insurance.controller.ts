import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { InsuranceService } from "../services/insurance.service";
import { Insurance } from "../entities/insurance.entity";


@Controller('/insurance')
export class InsuranceController {

    constructor(private readonly insuranceService: InsuranceService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Insurance[]> {
        return this.insuranceService.findAll();
    }   

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Insurance> {
        return this.insuranceService.findById(id);
    }

    @Get('/title/:title')
    @HttpCode(HttpStatus.OK)
    findAllByTitle(@Param('title') title: string): Promise<Insurance[]> {
        return this.insuranceService.findAllByTitle(title);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() insurance: Insurance): Promise<Insurance> {
        return this.insuranceService.create(insurance);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() insurance: Insurance): Promise<Insurance> {
        return this.insuranceService.update(insurance);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.insuranceService.delete(id);
    }
}
