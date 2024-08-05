import { Module } from '@nestjs/common';
import { SocketService } from './socket.service';
import { SocketGateway } from './socket.gateway';
import { HostsModule } from './hosts/hosts.module';
import { SslCertificatesModule } from './ssl_certificates/ssl_certificates.module';
import { LoadBalancerModule } from './load-balancer/load-balancer.module';
import { ServerTypesModule } from './server-types/server-types.module';
import { SnippetsModule } from './snippets/snippets.module';

@Module({
  imports: [HostsModule, SslCertificatesModule, LoadBalancerModule, ServerTypesModule, SnippetsModule],
  providers: [SocketGateway,SocketService]
})
export class GatewayModule {}
