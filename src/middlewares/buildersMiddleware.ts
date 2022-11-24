import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction,Request,Response } from "express";
import { CompanyService } from "src/company/company.service";

@Injectable()
export class CheckIdMiddleware implements NestMiddleware {
    constructor(private readonly companyService: CompanyService){}
    async use(req:Request,res:Response,next:NextFunction) {
        const data = await this.companyService.findById(req.body.company_id)
        if(!data) {
            return res.json({message:'Bunday company yoq'})
        }
        next()
    }
}