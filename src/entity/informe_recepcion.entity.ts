import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToOne, ManyToOne, CreateDateColumn } from "typeorm"
import { Factura } from "./facturas.entity"

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

    @CreateDateColumn()
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
