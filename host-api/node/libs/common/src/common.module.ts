import { Module } from '@nestjs/common';
import { MailModule } from './config/mail.module';
import { CommonService } from './common.service';
import { Helpers } from './helpers.service';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utils } from './helpers/utils';
 @Module({
  imports: [MailModule, HttpModule, TypeOrmModule.forFeature([])],
  providers: [CommonService, Helpers,Utils],
  exports: [CommonService],
})
export class CommonModule { }
