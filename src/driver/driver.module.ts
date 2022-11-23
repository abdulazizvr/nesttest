import {Module} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { Driver, DriverSchema } from './schemas/driver.schema';
import { DriverController } from './driver.controller'; 
import { DriverService } from './driver.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Driver.name, schema: DriverSchema }])],
    controllers:[DriverController],
    providers:[DriverService]
})

export class DriverModule{}