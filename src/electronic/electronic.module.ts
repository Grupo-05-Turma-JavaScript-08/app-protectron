
import { TypeOrmModule } from "@nestjs/typeorm";
import { ElectronicController } from "./controller/electronic.controller";
import { Module } from "@nestjs/common";
import { Electronic } from "./entites/electronic.entity";
import { ElectronicService } from "./services/electronic.service";
import { Insurance } from "../insurance/entities/insurance.entity";
import { InsuranceModule } from "../insurance/insurance.module";

@Module({
    imports: [TypeOrmModule.forFeature([ Electronic ]),InsuranceModule],
    controllers: [ElectronicController],
    providers: [ElectronicService],
    exports: [TypeOrmModule],

})

export class ElectronicModule {}