import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Usuario {
    
    @PrimaryGeneratedColumn()
    IdUsuario: number

    @Column()
    Nombre: string
    
    @Column()
    Paterno: string
    
    @Column()
    Materno: string

    @Column({unique: true})
    Username: string
    
    @Column({unique: true})
    Email: string
    
    @Column({type: 'datetime'})
    FechaNacimiento: Date
    
    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    FechaRegistro: Date

}