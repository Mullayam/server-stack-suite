import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { join } from 'path';

@Module({
    imports: [
        MailerModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (config: ConfigService) => ({
                transport: {
                    host: String(config.get('SMTP_HOST')),
                    port: Number(config.get('SMTP_HOST_PORT')),
                    auth: {
                        user: config.get('SMTP_HOST_USER'),
                        pass: config.get('SMTP_HOST_PASS')
                    }
                },
                defaults: {
                    from: `Orders - Saveit India <${config.get('SMTP_HOST_FROM')}>`,
                },
                template: {
                    dir: join(process.cwd(), 'libs', 'common', 'src', 'templates'),
                    adapter: new HandlebarsAdapter(),
                },
            }),
        }),
    ],


})
export class MailModule { }