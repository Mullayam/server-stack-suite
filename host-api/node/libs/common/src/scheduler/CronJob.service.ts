import { Injectable, Logger, } from "@nestjs/common";
import {  SchedulerRegistry, CronExpression, } from "@nestjs/schedule";
import { CronJob } from 'cron';
import { Queue } from "bullmq";
import { InjectQueue } from "@nestjs/bullmq";
import { Helpers } from "../helpers.service";
import { PROCESSORS_QUEUE_NAME } from "../constants/enum";

@Injectable()
export class CronJobsService {
    private readonly MINIMUM_TIME = 1
    private readonly logger = new Logger(CronJobsService.name);
    private readonly activeCronJobs: string[] = [];
    constructor(
        private helpers: Helpers,
        private schedulerRegistry: SchedulerRegistry,
      
        @InjectQueue(PROCESSORS_QUEUE_NAME.EMAIL_PROCESSOR) private readonly emailQueue: Queue,

    ) { }

    getAllCronJobs(name: string): CronJob {
        const job = this.schedulerRegistry.getCronJob(name);
        return job;
    }
    addCronJob(name: string, cronExpression: keyof typeof CronExpression, currentJob: any) {
        this.activeCronJobs.push(name)
        const createNewJob = new CronJob(CronExpression[cronExpression], currentJob);
        const job = this.schedulerRegistry.addCronJob(name, createNewJob);
        createNewJob.start();
        return job;
    }
    stopCurrentCronJob(name: string) {
        const job = this.schedulerRegistry.getCronJob(name).stop();
        return job;
    }
}
