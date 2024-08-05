import { Injectable } from "@nestjs/common";
import * as fs from 'fs';
import { Server } from 'socket.io';
import { WebSocketServer } from '@nestjs/websockets';

@Injectable()
export class FileOperations {
    @WebSocketServer()
    server: Server;
    readFile(path: string) {
        return fs.readFileSync(path, 'utf8')
    }

    async writeFile(path: string, data: string) {
        return fs.writeFile(path, data,(err)=>{
            if(err) this.server.emit('error',err)
                this.server.emit('success',err)
        })
    }

    appendFile(path: string, data: string) {
        return fs.appendFileSync(path, data)
    }

    deleteFile(path: string) {
        return fs.unlinkSync(path)
    }
    checkFileExists(path: string) {
        return fs.existsSync(path)
    }
    changePermission(path: string, permission: number=0o777) {
        return fs.chmodSync(path,permission )
    }
   
}