
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Electronic } from "./entites/electronic.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ Electronic ])],
    controllers: [],
    providers: [],
    exports: [],

})

export class ElectronicModule {}