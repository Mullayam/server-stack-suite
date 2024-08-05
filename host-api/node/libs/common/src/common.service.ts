import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class CommonService {
    private readonly logger = new Logger(CommonService.name);

    constructor(
        private readonly httpService: HttpService, private readonly jwtService: JwtService,


    ) {

    }

    request(): HttpService {
        return this.httpService
    }

}
