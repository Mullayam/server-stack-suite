import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoadBalancerService } from './load-balancer.service';
import { CreateLoadBalancerDto } from './dto/create-load-balancer.dto';
import { UpdateLoadBalancerDto } from './dto/update-load-balancer.dto';

@Controller('load-balancer')
export class LoadBalancerController {
  constructor(private readonly loadBalancerService: LoadBalancerService) {}

  @Post()
  create(@Body() createLoadBalancerDto: CreateLoadBalancerDto) {
    return this.loadBalancerService.create(createLoadBalancerDto);
  }

  @Get()
  findAll() {
    return this.loadBalancerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loadBalancerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoadBalancerDto: UpdateLoadBalancerDto) {
    return this.loadBalancerService.update(+id, updateLoadBalancerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loadBalancerService.remove(+id);
  }
}
