import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Observable } from "rxjs";
import { Company, CompanyDocument } from "src/company/schemas/company.schema";

@Injectable()
export class Check{
    constructor(@InjectModel(Company.name) private companyModel: Model<CompanyDocument>) {}
    
    async func(id:string){
        const data = await this.companyModel.findById(id)
        if(!data) return false
        return true
    }
}

