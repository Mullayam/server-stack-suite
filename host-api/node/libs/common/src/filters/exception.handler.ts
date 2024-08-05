import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionHandler implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();

        response
            .status(200)
            .json({
                success: false,
                result: {
                    type: 'HttpException',
                    statusCode: status,
                    timestamp: new Date().toISOString(),
                    path: request.url,
                },
                message: "Somehing Went Wrong"
            });
    }
}