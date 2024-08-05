import { Injectable } from '@nestjs/common';
import { CreateSslCertificateDto } from './dto/create-ssl_certificate.dto';
import { UpdateSslCertificateDto } from './dto/update-ssl_certificate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SSLCertificatesEnitity } from 'src/entities/ssl_certificates.entity';

@Injectable()
export class SslCertificatesService {
  constructor(@InjectRepository(SSLCertificatesEnitity) private sslCertificatesRepository: SSLCertificatesEnitity) {}
  create(createSslCertificateDto: CreateSslCertificateDto) {
    return 'This action adds a new sslCertificate';
  }

  findAll() {
    return `This action returns all sslCertificates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sslCertificate`;
  }

  update(id: number, updateSslCertificateDto: UpdateSslCertificateDto) {
    return `This action updates a #${id} sslCertificate`;
  }

  remove(id: number) {
    return `This action removes a #${id} sslCertificate`;
  }
}
