import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CONFIG } from '../constants';
import { existsSync } from 'fs'
const DATABASE_OPTIONS = existsSync(join(process.cwd(), 'sever.config.json')) === true ? {
  type: CONFIG.DATABASE.DIALECT,
  host: CONFIG.DATABASE.DBHOST as string,
  port: + CONFIG.DATABASE.DBPORT,
  username: CONFIG.DATABASE.DBHOST as string,
  password: CONFIG.DATABASE.DBPASS as string,
  database: CONFIG.DATABASE.DBNAME as string,
  entities: [process.cwd() + join('/dist/src/entities/*.entity.js')],
  synchronize: CONFIG.NODE_ENV === "DEVELOPMENT" ? true : false,
  ssl: {
    rejectUnauthorized: false,
  },
} : {
  type: 'sqlite',
  database: `${join(process.cwd(),"/db/serverstacksuite.db")}`,
  synchronize: true,
  entities: [process.cwd() + join('/dist/src/entities/*.entity.js')],
}
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({ ...DATABASE_OPTIONS as any }),
  ],
})
export class DatabaseModule { }
