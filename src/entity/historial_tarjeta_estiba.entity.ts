import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, CreateDateColumn } from "typeorm"

@Entity()
export class Historial_Tarjeta_Estiba {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
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
