import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { FirstSetupDTO } from './dto/first-setup.dto';
import { ResponseHandler } from '@app/common/types/responseHandler';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post("first-setup")
  async setUpServerStackSuite(@Body() body: FirstSetupDTO): ResponseHandler {
    try {
      const data = await this.appService.init(body)
      return {
        success: true,
        message: "Server Stack Suite Initialized Successfully",
        result: {
          email:body.email,
          password:body.password
        }
      }
    } catch (error) {
      if (error instanceof HttpException) {
        return {
          success: true,
          message: error.message,
          result: error
        }
      }

      return {
        success: false,
        message: "Something went wrong",
        result: null
      }
    }
  }

}
