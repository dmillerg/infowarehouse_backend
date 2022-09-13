import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Tarjeta_Estiba {

    @PrimaryColumn()
    codigo: string

    @Column()
    producto_generico: string

    @Column()
    producto_especifico: string

    @Column()
    precio_unitario: number

}
