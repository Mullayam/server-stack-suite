import { Injectable } from '@nestjs/common';

@Injectable()
export class SocketService {
  create(createGatewayDto: any) {
    return 'This action adds a new gateway';
  }

  findAll() {
    return `This action returns all gateway`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gateway`;
  }

  update(id: number, updateGatewayDto: any) {
    return `This action updates a #${id} gateway`;
  }

  remove(id: number) {
    return `This action removes a #${id} gateway`;
  }
}
