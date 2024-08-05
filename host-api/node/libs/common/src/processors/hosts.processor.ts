import { MailerService } from '@nestjs-modules/mailer';
import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import {  PROCESSORS_QUEUE_NAME } from '../constants/enum';
import { CreateHostDto } from 'src/public/gateway/hosts/dto/create-host.dto';

 
@Processor(PROCESSORS_QUEUE_NAME.HOST_PROCESSOR)
export class EmailProcessor extends WorkerHost {
  constructor(private readonly mailService: MailerService,)
      {
    super()
  }
  async process(job: Job) {
    const data: CreateHostDto = job.data
    
  }
  @OnWorkerEvent('completed')
  onCompleted() {
    console.log(PROCESSORS_QUEUE_NAME.HOST_PROCESSOR + " Mail Sent")
  }

}