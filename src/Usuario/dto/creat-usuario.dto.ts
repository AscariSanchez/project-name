import { IsString, IsNotEmpty, IsEmail } from "class-validator"

export class CrearUsuarioDTO {

    @IsString({ message: 'El campo nombre debe ser texto ' })
    @IsNotEmpty({ message: 'El campo nombre es requerido' })
    Nombre: string

    @IsString()
    @IsNotEmpty()
    Paterno: string

    @IsString()
    @IsNotEmpty()
    Materno: string

    @IsString()
    @IsNotEmpty()
    Username: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    Email: string

    @IsNotEmpty()
    FechaNacimiento: Date
}