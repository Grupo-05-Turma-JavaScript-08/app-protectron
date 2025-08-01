
import { TypeOrmModule } from "@nestjs/typeorm";
import { ElectronicController } from "./controller/electronic.controller";
import { Module } from "@nestjs/common";
import { Electronic } from "./entites/electronic.entity";
import { ElectronicService } from "./services/electronic.service";

@Module({
    imports: [TypeOrmModule.forFeature([ Electronic ])],
    controllers: [ElectronicController],
    providers: [ElectronicService],
    exports: [TypeOrmModule],

})

export class ElectronicModule {}