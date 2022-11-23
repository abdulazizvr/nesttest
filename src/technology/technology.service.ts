import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { createTechnologyDto } from "./dto/create-technology.dto";
import { updateTechnologyDto } from "./dto/update-technology.dto";
import { Technology, TechnologyDocument } from "./schemas/technology.schema";


@Injectable()
export class TechnologyService{
    constructor(@InjectModel(Technology.name) private technologyModule: Model<TechnologyDocument>) {}

    async create(createTechnologyDto: createTechnologyDto){
        const createdBuilder = new this.technologyModule(createTechnologyDto);
        return createdBuilder.save();
    }

    async getAll():Promise<Technology[]>{
        return this.technologyModule.find().populate('company_id')
    }
    async findById(id:string): Promise<Technology>{
        return this.technologyModule.findById(id)
    }
    async update(id: string, updateTechnologyDto: updateTechnologyDto) {
        return this.technologyModule.findByIdAndUpdate(id,updateTechnologyDto)
    }
    async remove(id: string) :Promise<Technology>{
        return this.technologyModule.findByIdAndDelete(id);
    }

}