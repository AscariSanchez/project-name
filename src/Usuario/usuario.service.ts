import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { Repository } from 'typeorm';
import { CrearUsuarioDTO } from './dto/creat-usuario.dto'
import { UpdateUserDTO } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {

    constructor(@InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>){}

    getAll(){
        return this.usuarioRepository.find();
    }

    async getById(IdUsuario: number){
        const usuarioExiste = await this.usuarioRepository.findOne({
            where: { IdUsuario }
        });

        if(!usuarioExiste){
            return new HttpException('No existe un usuario con ese Id', HttpStatus.NOT_FOUND);
        }

        return usuarioExiste;
    }

    async create(usuario: CrearUsuarioDTO){

        const existe = await this.usuarioRepository.findOne({ 
            where: [
                { Username: usuario.Username },
                { Email: usuario.Email }
            ]
        });

        if(existe){
            if(existe.Username === usuario.Username && existe.Email === usuario.Email){
                return new HttpException('Ya hay un registro con ese username y ese email', HttpStatus.CONFLICT);
            }

            if(existe.Username === usuario.Username){
                return new HttpException('Ya existe un registro con ese Username', HttpStatus.CONFLICT);
            }

            if(existe.Email === usuario.Email){
                return new HttpException('Ya existe un registro con ese Email', HttpStatus.CONFLICT);
            }
        }

        const nuevoUsuario = this.usuarioRepository.create(usuario);
        return this.usuarioRepository.save(nuevoUsuario);
    }

    async update(IdUsuario: number, usuario: UpdateUserDTO){

        const existe = await this.usuarioRepository.findOneBy({ IdUsuario });

        if(!existe) {
            return new HttpException('No existe un usuario con ese Id', HttpStatus.NOT_FOUND);
        }

        return this.usuarioRepository.update({ IdUsuario }, usuario);
    }

    delete(IdUsuario: number){
        return this.usuarioRepository.delete({ IdUsuario });
    }

}