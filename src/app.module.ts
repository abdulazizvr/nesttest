import { CompanyModule } from "./company/company.module";
import {BuildersModule} from "./builder/builder.module"
import { TechnologyModule } from "./technology/technology.module"; 
import { DriverModule } from "./driver/driver.module";
import { MiddlewareConsumer, Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from "./middlewares/loggingMiddleware";
import { HttpExceptionFilter } from "./errors/http-exception.filter";
import { APP_FILTER } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";

const environment = process.env.MODE_ENV || 'development';

@Module({
  imports: [ConfigModule.forRoot({envFilePath:`.env`,isGlobal:true})
  ,BuildersModule,TechnologyModule,DriverModule,CompanyModule,MongooseModule.forRoot(process.env.MONGO_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats');
  }
}
