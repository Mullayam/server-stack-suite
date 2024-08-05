import { Module } from '@nestjs/common';
import { LoadBalancerService } from './load-balancer.service';
import { LoadBalancerController } from './load-balancer.controller';

@Module({
  controllers: [LoadBalancerController],
  providers: [LoadBalancerService]
})
export class LoadBalancerModule {}
