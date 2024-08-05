
import { Controller, Get } from '@nestjs/common';
import { HealthCheckService,  MemoryHealthIndicator, HealthCheck, TypeOrmHealthIndicator, DiskHealthIndicator,  MicroserviceHealthIndicator } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
    private readonly disk: DiskHealthIndicator,
    private memory: MemoryHealthIndicator,
    private ms: MicroserviceHealthIndicator,
  ) { }
  
  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.db.pingCheck('database'),
      () => this.disk.checkStorage('storage', { path: '/', thresholdPercent: 0.5 }),
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
      
    ]);

  }
}