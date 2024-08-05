import { Injectable } from '@nestjs/common';
import { CreateServerTypeDto } from './dto/create-server-type.dto';
import { UpdateServerTypeDto } from './dto/update-server-type.dto';

@Injectable()
export class ServerTypesService {
  create(createServerTypeDto: CreateServerTypeDto) {
    return 'This action adds a new serverType';
  }

  findAll() {
    return `This action returns all serverTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serverType`;
  }

  update(id: number, updateServerTypeDto: UpdateServerTypeDto) {
    return `This action updates a #${id} serverType`;
  }

  remove(id: number) {
    return `This action removes a #${id} serverType`;
  }
}
