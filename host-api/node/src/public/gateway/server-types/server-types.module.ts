import { Module } from '@nestjs/common';
import { ServerTypesService } from './server-types.service';
import { ServerTypesController } from './server-types.controller';

@Module({
  controllers: [ServerTypesController],
  providers: [ServerTypesService]
})
export class ServerTypesModule {}
