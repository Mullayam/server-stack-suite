import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { CONFIG } from '@app/common';

@Module({
  imports: [ JwtModule.register({
    global: true,
    secret: CONFIG.APP.SECRETS.JWT_SECRET_KEY,
    signOptions: { expiresIn: CONFIG.APP.SECRETS.JWT_SECRET_EXPIRATION },
  }),],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
