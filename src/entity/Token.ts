import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Token {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    token: string

    @Column()
    usuario_id: number
    
}
