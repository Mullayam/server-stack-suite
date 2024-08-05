import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServerTypesService } from './server-types.service';
import { CreateServerTypeDto } from './dto/create-server-type.dto';
import { UpdateServerTypeDto } from './dto/update-server-type.dto';

@Controller('server-types')
export class ServerTypesController {
  constructor(private readonly serverTypesService: ServerTypesService) {}

  @Post()
  create(@Body() createServerTypeDto: CreateServerTypeDto) {
    return this.serverTypesService.create(createServerTypeDto);
  }

  @Get()
  findAll() {
    return this.serverTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serverTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServerTypeDto: UpdateServerTypeDto) {
    return this.serverTypesService.update(+id, updateServerTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serverTypesService.remove(+id);
  }
}
