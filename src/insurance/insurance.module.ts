import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Insurance } from "./entities/insurance.entity";
import { InsuranceService } from "./services/insurance.service";
import { InsuranceController } from "./controller/insurance.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Insurance])],
    providers: [InsuranceService],
    controllers: [InsuranceController],
    exports: [InsuranceService]
})
export class InsuranceModule {}