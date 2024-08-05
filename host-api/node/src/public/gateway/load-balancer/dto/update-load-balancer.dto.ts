import { PartialType } from '@nestjs/mapped-types';
import { CreateLoadBalancerDto } from './create-load-balancer.dto';

export class UpdateLoadBalancerDto extends PartialType(CreateLoadBalancerDto) {}
