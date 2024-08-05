import { Module } from '@nestjs/common';
import { SslCertificatesService } from './ssl_certificates.service';
import { SslCertificatesController } from './ssl_certificates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HostsEnitity } from 'src/entities/hosts.entity';
import { SSLCertificatesEnitity } from 'src/entities/ssl_certificates.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HostsEnitity,SSLCertificatesEnitity])],
  controllers: [SslCertificatesController],
  providers: [SslCertificatesService]
})
export class SslCertificatesModule {}
