import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Electronic } from "../entites/electronic.entity";
import { Repository } from "typeorm";

@Injectable()
export class ElectronicService {
    constructor(
        @InjectRepository(Electronic)
        private electronicRepository: Repository<Electronic>
    ){}
    async findAll(): Promise<Electronic[]> {
        return await this.electronicRepository.find();
    }

    async findById(id: number ): Promise<Electronic> {
        const electronic = await this.electronicRepository.findOne({ 
            where: { id }
         });
        if (!electronic) 
            throw new HttpException('Eletronico não encontrado', HttpStatus.NOT_FOUND);
            return electronic;
}
}