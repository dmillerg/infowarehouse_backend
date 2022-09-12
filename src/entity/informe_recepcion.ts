import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm"

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

    @Column()
    factura: string

    @Column()
    anno: string

    @Column()
    no_anno: string
}
