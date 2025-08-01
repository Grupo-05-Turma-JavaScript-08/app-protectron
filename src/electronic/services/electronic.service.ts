import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Electronic } from "../entites/electronic.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class ElectronicService {
    constructor(
        @InjectRepository(Electronic)
        private electronicRepository: Repository<Electronic>
    ) { }
    async findAll(): Promise<Electronic[]> {
        return await this.electronicRepository.find();
    }

    async findById(id: number): Promise<Electronic> {
        const electronic = await this.electronicRepository.findOne({
            where: { id }
        });
        if (!electronic)
            throw new HttpException('Eletronico não encontrado', HttpStatus.NOT_FOUND);
        return electronic;
    }
    async findAllByModel(model: string): Promise<Electronic[]> {
        return await this.electronicRepository.find({
            where: {
                model: ILike(`%${model}%`)
            }
        })
    }
    async create(electronic: Electronic): Promise<Electronic> {
        return await this.electronicRepository.save(electronic);
    }
    async update( electronic: Electronic): Promise<Electronic> {
        if (!electronic.id)
            throw new HttpException('Id de produto precisa ser informado!', HttpStatus.NOT_FOUND);
        await this.findById(electronic.id);
        return await this.electronicRepository.save(electronic);
    }
    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);
        return await this.electronicRepository.delete(id);
    
    }
}