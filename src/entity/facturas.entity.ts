import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, CreateDateColumn } from "typeorm"

@Entity()
export class Factura {

    @Column()
    no_factura: string

    @Column()
    empresa: string

    @CreateDateColumn()
    fecha: string

    @PrimaryColumn()
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
