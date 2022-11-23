import {Global, Module} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { BuildersModule } from 'src/builder/builder.module';
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

export class CompanyModule{}