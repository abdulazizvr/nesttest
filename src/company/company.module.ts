import {Global, MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { BuilderController } from 'src/builder/builder.controller';
import { BuildersModule } from 'src/builder/builder.module';
import { CheckIdMiddleware } from 'src/middlewares/buildersMiddleware';
import { CheckNameMiddleware } from 'src/middlewares/checkNameMiddleware';
import { LoggerMiddleware } from 'src/middlewares/loggingMiddleware';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { Company, CompanySchema } from './schemas/company.schema';
@Global()
@Module({
    imports: [
    BuildersModule,
    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }])],
    controllers:[CompanyController],
    providers:[CompanyService],
    exports:[CompanyService]
})

export class CompanyModule{
    configure(consumer:MiddlewareConsumer){
        consumer
        .apply(CheckNameMiddleware)
        .exclude(
            {path:'company',method:RequestMethod.GET},
            {path:'company/:id',method:RequestMethod.GET},
            {path:'company/:id',method:RequestMethod.DELETE}
        )
        .forRoutes(CompanyController)
        .apply(CheckIdMiddleware)
        .exclude(
            {path:'builder',method:RequestMethod.GET},
            {path:'builder/:id',method:RequestMethod.GET},
            {path:'builder/:id',method:RequestMethod.DELETE}
        )
        .forRoutes(BuilderController)
    }
}