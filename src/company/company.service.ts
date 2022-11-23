import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company,CompanyDocument } from './schemas/company.schema';

@Injectable()
export class CompanyService{
    constructor(@InjectModel(Company.name) private companyModel: Model<CompanyDocument>) {}

    async create(createCompanyDto: CreateCompanyDto){
        const createdCompany = new this.companyModel(createCompanyDto);
        return createdCompany.save();
    }
    
    async getAll():Promise<Company[]>{
        return this.companyModel.find().exec()
    }
    async findById(id:string): Promise<Company>{
        return this.companyModel.findById(id)
    }
    async update(id: string, updateCompanyDto: UpdateCompanyDto) {
        // return this.userModel.findByIdAndUpdate(id,updateUserDto)
        return this.companyModel.updateOne({id},{$set:updateCompanyDto});
    }
    async remove(id: string) :Promise<Company>{
        return this.companyModel.findByIdAndDelete(id);
    }
}