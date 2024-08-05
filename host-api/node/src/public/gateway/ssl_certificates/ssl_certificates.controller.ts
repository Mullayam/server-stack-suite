import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SslCertificatesService } from './ssl_certificates.service';
import { CreateSslCertificateDto } from './dto/create-ssl_certificate.dto';
import { UpdateSslCertificateDto } from './dto/update-ssl_certificate.dto';

@Controller('ssl-certificates')
export class SslCertificatesController {
  constructor(private readonly sslCertificatesService: SslCertificatesService) {}

  @Post()
  create(@Body() createSslCertificateDto: CreateSslCertificateDto) {
    return this.sslCertificatesService.create(createSslCertificateDto);
  }

  @Get()
  findAll() {
    return this.sslCertificatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sslCertificatesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSslCertificateDto: UpdateSslCertificateDto) {
    return this.sslCertificatesService.update(+id, updateSslCertificateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sslCertificatesService.remove(+id);
  }
}
