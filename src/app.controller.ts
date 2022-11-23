import {
  Controller,
  Get,
  Header,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll() {
    return this.appService.getAll();
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
}
