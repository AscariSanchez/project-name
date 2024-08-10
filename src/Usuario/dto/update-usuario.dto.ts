import { IsString, IsEmail } from 'class-validator'

export class UpdateUserDTO{

    @IsString()
    Nombre?: string

    @IsString()
    Paterno?: string

    @IsString()
    Materno?: string

    @IsString()
    Username?: string

    @IsEmail()
    Email?: string
    
    FechaNacimiento?: Date
}