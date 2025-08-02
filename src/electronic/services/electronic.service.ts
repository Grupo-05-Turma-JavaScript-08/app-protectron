import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Electronic } from "../entites/electronic.entity";
import { DeleteResult, ILike, Repository } from "typeorm";
import { InsuranceService } from "../../insurance/services/insurance.service";
import { Insurance } from "../../insurance/entities/insurance.entity";

@Injectable()
export class ElectronicService {
    constructor(
        @InjectRepository(Electronic)
        private electronicRepository: Repository<Electronic>,
        private readonly insuranceService: InsuranceService
    ) { }
    async findAll(): Promise<Electronic[]> {
        return await this.electronicRepository.find({
            relations: {
                insurance: true
            }
        });
    }

    async findById(id: number): Promise<Electronic> {
        const electronic = await this.electronicRepository.findOne({
            where: { id }, relations: { insurance: true }
        });
        if (!electronic)
            throw new HttpException('Eletronico não encontrado', HttpStatus.NOT_FOUND);
        return electronic;
    }
    async findAllByModel(model: string): Promise<Electronic[]> {
        return await this.electronicRepository.find({
            where: {
                model: ILike(`%${model}%`)
            },
            relations: {
                insurance: true
            }
        })
    }
    async create(electronic: Electronic): Promise<Electronic> {
        //tratamento para verificar se o seguro foi informado caso contrario retorna erro
        if (!electronic.insurance)
            throw new HttpException('Plano de seguro precisa ser informado!', HttpStatus.NOT_FOUND);

        //armazena na variavel insurance, insurance(seguro) ligado ao electronic buscando pelo id
        const insurance = await this.insuranceService.findById(electronic.insurance.id);
        //no atributo premiuValue,do eletronico atualiza o valor do premio seguro calculado com base no seguro e no eletronico atual utilizando o metodo calculatePremiumValue
        electronic.premiumValue = this.calculatePremiumValue(electronic, insurance);


        return await this.electronicRepository.save(electronic);
    }
    async update(electronic: Electronic): Promise<Electronic> {
        if (!electronic.id)
            throw new HttpException('Id de produto precisa ser informado!', HttpStatus.NOT_FOUND);
        await this.findById(electronic.id);

         //tratamento para verificar se o seguro foi informado caso contrario retorna erro
        if (!electronic.insurance)
            throw new HttpException('Plano de seguro precisa ser informado!', HttpStatus.NOT_FOUND);
        
        //armazena na variavel insurance, insurance(seguro) ligado ao electronic buscando pelo id
        const insurance = await this.insuranceService.findById(electronic.insurance.id);
        //no atributo premiuValue,do eletronico atualiza o valor do premio seguro calculado com base no seguro e no eletronico atual utilizando o metodo calculatePremiumValue
        electronic.premiumValue = this.calculatePremiumValue(electronic, insurance);

        return await this.electronicRepository.save(electronic);
    }
    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);
        return await this.electronicRepository.delete(id);

    }


//metodo usado para calcular o valor do seguro
//recebe o eletronico e o seguro
//tratamento de seguro de 3 anos caso o eletronico tenha mais de 3 anos gera depreciacao
//e o campo insuranceStatus recebe Depreciado
    private calculatePremiumValue(electronic: Electronic, insurance: Insurance) {
        let today = new Date();
        const purchaseDate = new Date(electronic.purchaseDate);
        const year = today.getFullYear() - purchaseDate.getFullYear();

        let insuranceValue = electronic.insuredValue;
        if (year >= 3) {
            insuranceValue *= 0.7 
           electronic.insuranceStatus = 'Depreciado';
        } else {
            electronic.insuranceStatus = 'Ativo';
        }   

        let porcentVaule = insurance.premiumPorcent;

        const premiumValue = (insuranceValue * porcentVaule) / 100

        return premiumValue
    }

}