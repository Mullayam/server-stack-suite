import { Module } from '@nestjs/common';
import { HostsService } from './hosts.service';
import { HostsController } from './hosts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HostsEnitity } from 'src/entities/hosts.entity';
import { FileOperations } from '@app/common/helpers/io-operations';


@Module({
  imports: [ TypeOrmModule.forFeature([HostsEnitity])],
  controllers: [HostsController],
  providers: [HostsService,FileOperations]
})
export class HostsModule {}
