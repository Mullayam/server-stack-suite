import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublicModule } from './public/public.module';
import { AuthGuard } from '@app/common/guards/jwt.guard';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './entities/admin.entity';
import { CommonModule } from '@app/common';
import { DatabaseModule } from '@app/common/config/database.module';

@Module({
  imports: [CommonModule,DatabaseModule,PublicModule, TypeOrmModule.forFeature([])],
  controllers: [AppController],
  providers: [AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
  ],
})
export class AppModule { }
