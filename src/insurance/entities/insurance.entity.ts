import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Electronic } from "../../electronic/entites/electronic.entity";

@Entity({ name: "tb_insurance" })
export class Insurance {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    description: string

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    title: string

    @IsNotEmpty()
    @Column(
        "decimal", { precision: 10, scale: 2, nullable: false }
    )
    premiumAmount: number;

    @IsNotEmpty()
    @UpdateDateColumn()
    effectiveDate: Date;

    @IsNotEmpty()
    @UpdateDateColumn()
    expirationDate: Date;
    
    @IsNotEmpty()
    @Column({ length: 50, nullable: false })
    insuranceStatus: string;

    @OneToMany(() => Electronic, (electronic) => electronic.insurance)
    electronic: Electronic[];
}