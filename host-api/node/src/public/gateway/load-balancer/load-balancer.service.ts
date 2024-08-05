import { Injectable } from '@nestjs/common';
import { CreateLoadBalancerDto } from './dto/create-load-balancer.dto';
import { UpdateLoadBalancerDto } from './dto/update-load-balancer.dto';

@Injectable()
export class LoadBalancerService {
  create(createLoadBalancerDto: CreateLoadBalancerDto) {
    return 'This action adds a new loadBalancer';
  }

  findAll() {
    return `This action returns all loadBalancer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loadBalancer`;
  }

  update(id: number, updateLoadBalancerDto: UpdateLoadBalancerDto) {
    return `This action updates a #${id} loadBalancer`;
  }

  remove(id: number) {
    return `This action removes a #${id} loadBalancer`;
  }
}
