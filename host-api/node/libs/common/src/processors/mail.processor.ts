import { MailerService } from '@nestjs-modules/mailer';
import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import {  PROCESSORS_QUEUE_NAME } from '../constants/enum';


export interface MailBodyInterface {
  to: string;
  subject: string;
  text: string;
  html?: string;
  [key: string]: any;
}

@Processor(PROCESSORS_QUEUE_NAME.EMAIL_PROCESSOR)
export class EmailProcessor extends WorkerHost {
  constructor(private readonly mailService: MailerService,)
      {
    super()
  }
  async process(job: Job) {
    const data: MailBodyInterface = job.data
    const options = Object.assign({
      subject: 'Welcome',
      template: 'welcome',
      // from: CONFIG.SMTP.SMTP_HOST_FROM
    }, data)

    const log = await this.mailService.sendMail(options);
  }
  @OnWorkerEvent('completed')
  onCompleted() {
    console.log(PROCESSORS_QUEUE_NAME.EMAIL_PROCESSOR + " Mail Sent")
  }

}