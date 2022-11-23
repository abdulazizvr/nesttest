import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { createDriverDto } from "./dto/create-driver.dto";
import { updateDriverDto } from "./dto/update-driver.dto";
import { Driver, DriverDocument } from "./schemas/driver.schema";


@Injectable()
export class DriverService{
    constructor(@InjectModel(Driver.name) private driverModule: Model<DriverDocument>) {}

    async create(createDriverDto: createDriverDto){
        console.log(createDriverDto)
        const createdDriver = await new this.driverModule(createDriverDto);
        console.log(createdDriver)
        return createdDriver.save();
    }

    async getAll():Promise<Driver[]>{
        return this.driverModule.find().populate('technology_id')
    }
    async findById(id:string): Promise<Driver>{
        return this.driverModule.findById(id)
    }
    async update(id: string, updateDriverDto: updateDriverDto) {
        return this.driverModule.findByIdAndUpdate(id,updateDriverDto)
    }
    async remove(id: string) :Promise<Driver>{
        return this.driverModule.findByIdAndDelete(id);
    }

}