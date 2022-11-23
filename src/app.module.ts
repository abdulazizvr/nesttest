import { CompanyModule } from "./company/company.module";
import {BuildersModule} from "./builder/builder.module"
import { TechnologyModule } from "./technology/technology.module"; 
import { DriverModule } from "./driver/driver.module";
import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BuildersModule,TechnologyModule,DriverModule,CompanyModule,MongooseModule.forRoot('mongodb://127.0.0.1/feedback')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
