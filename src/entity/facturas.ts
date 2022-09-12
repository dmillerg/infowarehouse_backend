import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Factura {

    @PrimaryGeneratedColumn()
    no_factura: string

    @Column()
    empresa: string

    @Column()
    fecha: string

    @Column()
    codigo: string

    @Column()
    entregado_por: string

    @Column()
    facturado_por: string

    @Column()
    entidad_suministradora: string
    
    @Column()
    almacen: string

    @Column()
    importe: number
}
