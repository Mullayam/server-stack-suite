import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GatewayModule } from './gateway/gateway.module';

@Module({
  imports: [AuthModule, UserModule, GatewayModule],
  controllers: [],
  providers: []
})
export class PublicModule {}
