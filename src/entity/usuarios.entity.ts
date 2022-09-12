import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    usuario: string

    @Column()
    password: string

    @Column()
    fecha: string

    @Column()
    nombre: string

    @Column()
    ultima_session: string

}
