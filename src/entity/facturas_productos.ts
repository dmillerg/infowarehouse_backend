import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Factura } from "./facturas"
import { Producto } from "./producto"

@Entity()
export class Factura_Producto {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => Factura)
    no_factura: string

    @ManyToOne(type => Producto)
    codigo_producto: string

    @Column()
    cantidad: number
}
