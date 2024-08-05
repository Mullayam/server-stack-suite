import helmet from 'helmet';
import * as passport from 'passport';
import { CONFIG } from '@app/common';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import { RequestMethod } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.use(helmet());
  app.setGlobalPrefix('/api/v1', 
    // {   exclude: [{ path: 'hosts/:test', method: RequestMethod.GET }], }
  );
  app.disable("x-powered-by");
  app.use(
    session({
      name: 'qid',
      secret: CONFIG.APP.SECRETS.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 3600000
      }
    }),
  );


  app.use(passport.initialize());
  app.use(passport.session());
  app.use(cookieParser(CONFIG.APP.SECRETS.COOKIE_SECRET));
  await app.listen(CONFIG.APP.APP_PORT);
}
bootstrap();
