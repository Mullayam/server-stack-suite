import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { SocketService } from './socket.service';
import { Namespace, Server } from 'socket.io'
import { SOCKET_EVENTS } from '@app/common/helpers/socket-event';
import { exec } from 'child_process';

@WebSocketGateway({
  cors: true,
})
export class SocketGateway {
  @WebSocketServer()
  namespace: Namespace;

  @WebSocketServer()
  server: Server;
  constructor(private readonly gatewayService: SocketService) { }

  @SubscribeMessage(SOCKET_EVENTS.SEND_COMMAND)
  create(@MessageBody() createGatewayDto: { activeTab:number, command: string }) {
    exec(createGatewayDto.command, (error, stdout, stderr) => {

      if (error) {

        this.server.emit(SOCKET_EVENTS.RECIEVE_COMMAND, JSON.stringify(
          [{ level: 'error', message: error.message },createGatewayDto.activeTab]
        ))
        return;
      }
      if (stderr) {
        this.server.emit(SOCKET_EVENTS.RECIEVE_COMMAND, JSON.stringify([{ level: 'warning', message: error.message },createGatewayDto.activeTab]))
        return;
      }
      this.server.emit(SOCKET_EVENTS.RECIEVE_COMMAND, JSON.stringify([{ level: 'info', message: error.message },createGatewayDto.activeTab]))
    })
  }

  @SubscribeMessage('findAllGateway')
  findAll() {
    return this.gatewayService.findAll();
  }

  @SubscribeMessage('findOneGateway')
  findOne(@MessageBody() id: number) {
    return this.gatewayService.findOne(id);
  }

  @SubscribeMessage('updateGateway')
  update(@MessageBody() updateGatewayDto: any) {
    return this.gatewayService.update(updateGatewayDto.id, updateGatewayDto);
  }

  @SubscribeMessage('removeGateway')
  remove(@MessageBody() id: number) {
    return this.gatewayService.remove(id);
  }
}
