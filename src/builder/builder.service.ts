import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { createBuilderDto } from "./dto/create-builder.dto";
import { updateBuildingDto } from "./dto/update-builder.dto";
import { Builders, BuildersDocument } from "./schemas/builder.schema";


@Injectable()
export class BuilderService{
    constructor(@InjectModel(Builders.name) private builderModule: Model<BuildersDocument>) {}

    async create(createBuilderDto: createBuilderDto){
        const createdBuilder = new this.builderModule(createBuilderDto);
        return createdBuilder.save();
    }

    async getAll():Promise<Builders[]>{
        return this.builderModule.find().populate('company_id')
        
    }
    async findById(id:string): Promise<Builders>{
        return this.builderModule.findById(id)
    }
    async update(id: string, updateBuildingDto: updateBuildingDto) {
        return this.builderModule.findByIdAndUpdate(id,updateBuildingDto)
    }
    async remove(id: string) :Promise<Builders>{
        return this.builderModule.findByIdAndDelete(id);
    }

    async getAllBuilders(id:string):Promise<Builders[]>{
        return this.builderModule.find({company_id:id})
    }

}