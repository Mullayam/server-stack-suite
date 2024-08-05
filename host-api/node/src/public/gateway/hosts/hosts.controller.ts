import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HostsService } from './hosts.service';
import { CreateHostDto } from './dto/create-host.dto';
import { UpdateHostDto } from './dto/update-host.dto';
import { ResponseHandler } from '@app/common/types/responseHandler';
import { SERVER_TYPES } from '@app/common/interface';
import { FileOperations } from '@app/common/helpers/io-operations';
import { SERVER_TYPE_FILE_PATH } from '@app/common/paths';
import { NginxSample } from '@app/common/samples/ngnix/demo';

@Controller('/:server_name/hosts')


export class HostsController { 

  constructor(private readonly hostsService: HostsService, private readonly fileOperations: FileOperations) { }

  @Get()
  findAll(@Param('server_name') server_name: SERVER_TYPES) {
    return this.hostsService.findAll(server_name);
  }
  @Post("proxy")
  async createProxyHost(@Body() createHostDto: CreateHostDto, @Param('server_name') server_name: SERVER_TYPES,): ResponseHandler {
    try {
      if (server_name !== "nginx") {
        throw new Error("Only Nginx is supported for now")
      }

      if (await this.hostsService.findOneByDomainName(createHostDto.domain_name, server_name)) {
        throw new Error("Proxy Host already exist with this domain name, Please Update it")
      }
      createHostDto.path = createHostDto.path.startsWith("/") ? createHostDto.path : "/" + createHostDto.path
      const { raw } = await this.hostsService.create(createHostDto)
      if (raw) {
        // inject queue to handle backne file genreation
        const server_names = createHostDto.domains.map((domain) => domain.source)
        const filePath = SERVER_TYPE_FILE_PATH[server_name.toLocaleUpperCase()].SITES_AVAILABLE_LOCATION_FILE.replace(":file_name", createHostDto.domain_name)
        const fileContent = NginxSample.DeployApi(server_names, createHostDto.domain_name, createHostDto.path)
        this.fileOperations.writeFile("./data", fileContent)

      }
      return {
        success: true,
        message: "Proxy Host Created",
        result: {},
      }
    } catch (error) {
      if (error instanceof Error) {
        return {
          success: false,
          message: error.message,
          result: null
        }
      }

      return {
        success: false,
        message: "Something went wrong, please try again.",
        result: null
      }
    }
  }

  @Post("redirection")
  async createRedirectionHost(@Body() createHostDto: CreateHostDto, @Param('server_name') server_name: SERVER_TYPES,) {
    try {
      if (server_name !== "nginx") {
        throw new Error("Only Nginx is supported for now")
      }

      if (await this.hostsService.findOneByDomainName(createHostDto.domain_name, server_name)) {
        throw new Error("Proxy Host already exist with this domain name, Please Update it")
      }
      createHostDto.path = createHostDto.path.startsWith("/") ? createHostDto.path : "/" + createHostDto.path
      const { raw } = await this.hostsService.create(createHostDto)
      if (raw) {
        // inject queue to handle backne file genreation
        const server_names = createHostDto.domains.map((domain) => domain.source)
        const filePath = SERVER_TYPE_FILE_PATH[server_name.toLocaleUpperCase()].SITES_AVAILABLE_LOCATION_FILE.replace(":file_name", createHostDto.domain_name)
        const fileContent = NginxSample.DeployApi(server_names, createHostDto.domain_name, createHostDto.path)
        this.fileOperations.writeFile("./data", fileContent)

      }
      return {
        success: true,
        message: "Proxy Host Created",
        result: {},
      }
    } catch (error) {
      if (error instanceof Error) {
        return {
          success: false,
          message: error.message,
          result: null
        }
      }

      return {
        success: false,
        message: "Something went wrong, please try again.",
        result: null
      }
    }
  }
  @Post("notFound")
  async createNotFoundHost(@Body() createHostDto: CreateHostDto,@Param('server_name') server_name: SERVER_TYPES,) {
    try {
      if (server_name !== "nginx") {
        throw new Error("Only Nginx is supported for now")
      }

      if (await this.hostsService.findOneByDomainName(createHostDto.domain_name, server_name)) {
        throw new Error("Proxy Host already exist with this domain name, Please Update it")
      }
      createHostDto.path = createHostDto.path.startsWith("/") ? createHostDto.path : "/" + createHostDto.path
      const { raw } = await this.hostsService.create(createHostDto)
      if (raw) {
        // inject queue to handle backne file genreation
        const server_names = createHostDto.domains.map((domain) => domain.source)
        const filePath = SERVER_TYPE_FILE_PATH[server_name.toLocaleUpperCase()].SITES_AVAILABLE_LOCATION_FILE.replace(":file_name", createHostDto.domain_name)
        const fileContent = NginxSample.DeployApi(server_names, createHostDto.domain_name, createHostDto.path)
        this.fileOperations.writeFile("./data", fileContent)

      }
      return {
        success: true,
        message: "Proxy Host Created",
        result: {},
      }
    } catch (error) {
      if (error instanceof Error) {
        return {
          success: false,
          message: error.message,
          result: null
        }
      }

      return {
        success: false,
        message: "Something went wrong, please try again.",
        result: null
      }
    }
  }

  @Get(':id')
  findOne(@Param('test') id: string) {
    try {
      return {
        success: true,
        message: "test",
        result: id
      }
    } catch (error) {
      if (error instanceof Error) {
        return {
          success: false,
          message: error.message,
          result: ""
        }
      }

      return {
        success: false,
        message: "Something went wrong, please try again.",
        result: null
      }
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHostDto: UpdateHostDto) {
    try {
      return {
        success: true,
        message: "test",
        result: updateHostDto
      }
    } catch (error) {
      if (error instanceof Error) {
        return {
          success: false,
          message: error.message,
          result: ""
        }
      }

      return {
        success: false,
        message: "Something went wrong, please try again.",
        result: null
      }
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return {
        success: true,
        message: "test",
        result: id
      }
    } catch (error) {
      if (error instanceof Error) {
        return {
          success: false,
          message: error.message,
          result: ""
        }
      }

      return {
        success: false,
        message: "Something went wrong, please try again.",
        result: null
      }
    }
  }
}
