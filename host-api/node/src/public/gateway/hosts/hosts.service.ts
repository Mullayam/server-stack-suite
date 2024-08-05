import { Injectable } from '@nestjs/common';
import { CreateHostDto } from './dto/create-host.dto';
import { UpdateHostDto } from './dto/update-host.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HostsEnitity } from 'src/entities/hosts.entity';
import { Repository } from 'typeorm';
import { SERVER_TYPES } from '@app/common/interface';

@Injectable()
export class HostsService {
  constructor(@InjectRepository(HostsEnitity) private hostsRepository: Repository<HostsEnitity>) { }
  create(createHostDto: CreateHostDto) {
    return this.hostsRepository.insert(createHostDto)
  }

  findAll(server_type: SERVER_TYPES) {
    return this.hostsRepository.find({
      where: {
        server_type: {
          name: server_type
        }
      }
    })
  }

  findOne(id: number) {
    return this.hostsRepository.find({ where: { id } })
  }
  findOneByDomainName(domain_name: string, server_type: SERVER_TYPES) {
    return this.hostsRepository.findOne({ where: { domain_name,   } })
  }
  update(id: number, updateHostDto: UpdateHostDto) {
    return this.hostsRepository.update({ id }, updateHostDto)
  }

  remove(id: number) {
    return this.hostsRepository.delete({ id })
  }
  
}
