import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Patch } from '@nestjs/common'
import { UsuarioService } from './usuario.service'
import { CrearUsuarioDTO } from './dto/creat-usuario.dto';
import { Usuario } from './usuario.entity';
import { UpdateUserDTO } from './dto/update-usuario.dto';

@Controller('/usuario')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService){}

    @Get()
    getAll(): Promise<Usuario[]>{
        return this.usuarioService.getAll();
    }

    @Get(':id')
    getById(@Param('id', ParseIntPipe) IdUsuario:number){
        return this.usuarioService.getById(IdUsuario);
    }

    @Post()
    create(@Body() usuario:CrearUsuarioDTO){
        return this.usuarioService.create(usuario);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) IdUsuario:number, @Body() usuario: UpdateUserDTO){
        return this.usuarioService.update(IdUsuario, usuario);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) IdUsuario:number){
        return this.usuarioService.delete(IdUsuario);
    }

}