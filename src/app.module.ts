import { Module } from '@nestjs/common';
import { UsuarioModule } from './Usuario/Usuario.module'
import { MateriaModule } from './materia/materia.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './Usuario/usuario.entity';
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [Usuario],
        synchronize: true,
      }),
      inject: [ConfigService],	
    }),
    UsuarioModule, 
    MateriaModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
