import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Producto {

    @PrimaryColumn()
    codigo: string

    @Column()
    producto_generico: string

    @Column()
    producto_especifico: string

    @Column()
    descripcion: string

    @Column("double")
    precio: number

    @Column("double")
    precio_unitario: number

}
