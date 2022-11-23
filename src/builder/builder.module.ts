import {Global, Module} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyService } from 'src/company/company.service';
import { Company } from 'src/company/schemas/company.schema';
import { BuilderController } from './builder.controller';
import { BuilderService } from './builder.service';
import { Builders, BuildersSchema } from './schemas/builder.schema';


// @Global()  Agar databaseni bir marta ishlatadigan bo'lsak import export qilsak yaxshi
// Agar bir marta bo'lsa onson bo'lishi uchun export/import qilinadi.
@Module({
    imports: [MongooseModule.forFeature([{ name: Builders.name, schema: BuildersSchema }])],
    controllers:[BuilderController],
    providers:[BuilderService],
    exports:[BuilderService]
})

export class BuildersModule{}