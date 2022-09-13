import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Producto {

    @PrimaryColumn()
    codigo: string

    @Column()
    nombre: string

    @Column()
    descripcion: string

    @Column("double")
    precio: number

    @Column("double")
    precio_unitario: number

}
