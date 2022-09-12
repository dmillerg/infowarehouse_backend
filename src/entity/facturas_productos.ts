import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Factura_Producto {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    no_factura: string

    @Column()
    codigo_producto: string

    @Column()
    cantidad: number
}
