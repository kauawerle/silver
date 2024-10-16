import { SequelizeModuleOptions } from '@nestjs/sequelize';

// export const db: SequelizeModuleOptions = {
//   dialect: 'postgres', // ou 'mysql', 'sqlite', etc.
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'root',
//   database: 'silver',
//   autoLoadModels: true, // Carrega modelos automaticamente
//   synchronize: true,    // Sincroniza modelos no banco (para dev)
// };

import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 5432,
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
        database: process.env.DB_NAME || 'my_database',
      });
      await sequelize.sync(); // Sincroniza as tabelas
      return sequelize;
    },
  },
];


