import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { CONFIG } from '../constants';

@Injectable()
export class AxiosService {
    constructor(private httpService: HttpService) {
        const _this = this
        this.httpService.axiosRef.defaults.timeout = CONFIG.NODE_ENV === "DEVELOPMENT" ? 10000 : 50000

    }
    request(): HttpService {
        return this.httpService
    }
}