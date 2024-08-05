import { Module } from '@nestjs/common';
import { CronJobsService } from './CronJob.service';
import { CommonModule } from '../common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailProcessor } from '../processors';
import { PROCESSORS_QUEUE_NAME } from '../constants/enum';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [CommonModule, BullModule.registerQueue({ name: PROCESSORS_QUEUE_NAME.EMAIL_PROCESSOR }), TypeOrmModule.forFeature([])],
  providers: [CronJobsService, EmailProcessor,],
  exports: [CronJobsService,],
})
export class CronJobModule { }
