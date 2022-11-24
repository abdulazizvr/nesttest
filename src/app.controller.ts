import {
  BadRequestException,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Query,
  Redirect,
  Req,
  Res,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ForbidenException } from './errors/forbidden-exception';
import { HttpExceptionFilter } from './errors/http-exception.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  getAll():string {
    try {
      throw new Error()
       return this.appService.getAll();
    } catch (error) {
      throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' })
      // throw new HttpException('Forbidden',HttpStatus.FORBIDDEN)
      // throw new ForbidenException(error)
    }
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version: string) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get('ab*cd')
  findAll() {
    return 'This is qarab tursang chiqadi';
  }

  @Get('req/res')
  getReq(@Req() request: Request, @Res() response: Response) {
    console.log(request);
    console.log(response);
    return `this action return request - ${request.method}`;
  }

  @Post()
  @Header('Cache-Control', 'no-cache,no-store,must-revalidate')
  create() {
    return 'This action add aa new car';
  }
  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(){
    console.log("deleted")
    return 'deleted'
  }
}
