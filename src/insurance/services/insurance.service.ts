import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Insurance } from "../entities/insurance.entity";

@Injectable()
export class InsuranceService {
    constructor(
        @InjectRepository(Insurance)
        private insuranceRepository: Repository<Insurance>
    ) { }

    async findAll(): Promise<Insurance[]> {
        return await this.insuranceRepository.find({
            relations: {
                electronic: true
            }
        });
    }

    async findById(id: number): Promise<Insurance> {

        let insurance = await this.insuranceRepository.findOne({
            where: {
                id
            },
            relations: {
                electronic: true
            }
        });

        if (!insurance)
            throw new HttpException('Plano de seguro não encontrado!', HttpStatus.NOT_FOUND);

        return insurance;
    }

    async findAllByTitle(title: string): Promise<Insurance[]> {
        return await this.insuranceRepository.find({
            where: {
                title: ILike(`%${title}%`)
            },
            relations: {
                electronic: true
            }
        })
    }

    async create(insurance: Insurance): Promise<Insurance> {
        return await this.insuranceRepository.save(insurance);
    }

    async update(insurance: Insurance): Promise<Insurance> {

        if (!insurance.id)
            throw new HttpException('ID do plano de seguro não informado!', HttpStatus.NOT_FOUND);
        await this.findById(insurance.id);

        return await this.insuranceRepository.save(insurance);
    }

    async delete(id: number): Promise<DeleteResult> {

        await this.findById(id);

        return await this.insuranceRepository.delete(id);

    }
}