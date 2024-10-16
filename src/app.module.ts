import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { DatabaseModule } from './database/connection.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres', // ou mysql, sqlite, etc.
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'silver',
      autoLoadModels: true, // Opcional: carrega automaticamente os modelos
      synchronize: true, // Opcional: sincroniza os modelos com o banco de dados
    }),
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
