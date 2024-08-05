import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
import { Request, Response } from 'express';
  
  @Catch()
  export class AllExceptionsFilter implements ExceptionFilter {
    constructor() {}  
    catch(exception: unknown, host: ArgumentsHost): void {    
  
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
     

      const httpStatus =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;
  
   
       response.status(httpStatus).json({
          success: false,
          result: {
            type:"GlobalException",
              statusCode: httpStatus,
              timestamp: new Date().toISOString(),
              path: request.url,              
          },
          message: "Somehing Went Wrong"
      });
    }
  }