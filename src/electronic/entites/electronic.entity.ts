import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
        "decimal", { precision: 10, scale: 10, nullable: false}
    )
    insuredValue : number;

    @IsNotEmpty()
    @UpdateDateColumn()
    purchaseDate: Date;
}

