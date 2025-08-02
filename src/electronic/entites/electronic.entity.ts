import { IsNotEmpty } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Insurance } from "../../insurance/entities/insurance.entity";

@Entity({
    name: "tb_electronic"
})
export class Electronic {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({
        length: 100, nullable: false
    })
    deviceType: string;

    @IsNotEmpty()
    @Column({
        length: 100, nullable: false
    })
    brand: string;

    @IsNotEmpty()
    @Column({
        length: 100, nullable: false
    })
    model: string;

    @IsNotEmpty()
    @Column({
        length: 100, nullable: false
    })
    serialNumber: string;

    @IsNotEmpty()
    @Column(
        "decimal", { precision: 10, scale: 2, nullable: false }
    )
    insuredValue: number;

    @Column(
        "decimal", { precision: 10, scale: 2, nullable: false }
    )
    premiumValue: number;

    @Column({ length: 50, nullable: false })
    insuranceStatus: string;

    @IsNotEmpty()
    @UpdateDateColumn()
    purchaseDate: Date;

    @ManyToOne(() => Insurance, (insurance) => insurance.electronic, {
        onDelete: "CASCADE"
    })
    @JoinColumn({ name: 'insurance_id' })
    insurance: Insurance;
}

