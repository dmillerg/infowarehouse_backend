import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToOne, ManyToOne, CreateDateColumn } from "typeorm"
import { Factura } from "./facturas.entity"

@Entity()
export class Informe_Recepcion {

    @Column()
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

    @Column()
    factura: string

    @Column()
    anno: string

    @PrimaryColumn()
    no_anno: string
}
