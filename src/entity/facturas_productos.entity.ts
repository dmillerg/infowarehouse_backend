import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Factura } from "./facturas.entity"
import { Producto } from "./producto.entity"

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
