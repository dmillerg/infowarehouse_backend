import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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

    @Column()
    codigo_estiba: string
}
