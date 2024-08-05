import * as fs from 'fs'
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FirstSetupDTO } from './dto/first-setup.dto';
import { AdminEntity } from './entities/admin.entity';
import { Helpers } from '../libs/common/src/helpers.service';
@Injectable()
export class AppService {
  constructor(
    // @InjectRepository(AdminEntity) private readonly adiminRepo: Repository<AdminEntity>, private readonly helpers: Helpers
  ) { }
  async init(data: FirstSetupDTO): Promise<any> {
    if (data.pg_db_enabled) {
      const env = fs.readFileSync('../.env', 'utf8');
      // sever.config.json
      const envTemplate = `
                      DBHOST = ${data.pg_db_config.DBHOST}
                      DBNAME = ${data.pg_db_config.DBNAME}
                      DBUSER = ${data.pg_db_config.DBUSER}
                      DBPASS = ${data.pg_db_config.DBPASS}
                      DBPORT = ${data.pg_db_config.DBPORT}
                      DIALECT= ${data.pg_db_config.DIALECT}
      `
      env.replace('DBHOST = localhost', `DBHOST=${data.pg_db_config.DBHOST}`);
      env.replace('DBNAME = serverstacksuite', `DBHOST=${data.pg_db_config.DBNAME}`);
      env.replace('DBUSER = postgres', `DBHOST=${data.pg_db_config.DBUSER}`);
      env.replace('DBPASS = postgres', `DBHOST=${data.pg_db_config.DBPASS}`);
      env.replace('DBPORT = 5432', `DBHOST=${data.pg_db_config.DBPORT}`);
      env.replace('DIALECT= postgres', `DBHOST=${data.pg_db_config.DIALECT}`);
      fs.writeFileSync('../.env', env);
    }

    // return this.adiminRepo.insert({
    //   name: data.name,
    //   username: data.name,
    //   email: data.email,
    //   password: await this.helpers.hashPassword(data.password)
    // });
  }
}
