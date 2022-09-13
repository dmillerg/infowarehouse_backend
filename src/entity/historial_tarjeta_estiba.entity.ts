import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Historial_Tarjeta_Estiba {

    @Column()
    fecha: string

    @Column()
    clave: string

    @Column()
    no: string

    @Column()
    entrada: number

    @Column()
    salida: number

    @Column()
    saldo: number

    @Column()
    firma: string

    @PrimaryColumn()
    codigo_estiba: string
}
