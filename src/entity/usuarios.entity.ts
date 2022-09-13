import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    usuario: string

    @Column()
    password: string

    @CreateDateColumn()
    fecha: string

    @Column()
    nombre: string

    @CreateDateColumn()
    ultima_session: Date

}
