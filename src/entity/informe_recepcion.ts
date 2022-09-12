import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToOne, ManyToOne } from "typeorm"
import { Factura } from "./facturas"

@Entity()
export class Informe_Recepcion {

    @PrimaryColumn()
    no: number

    @Column()
    empresa: string

    @Column()
    almacen: string

    @Column()
    codigo: string

    @Column()
    fecha: string

    @Column()
    recepcionado_por: string

    @Column()
    entidad_suministradora: string

    @OneToOne(type => Factura)
    factura: string

    @Column()
    anno: string

    @Column()
    no_anno: string
}
