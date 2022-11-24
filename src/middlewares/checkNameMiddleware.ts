import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { CompanyService } from "src/company/company.service";

@Injectable()
export class CheckNameMiddleware implements NestMiddleware {
    constructor(private readonly companyService:CompanyService){}
    async use(req:Request,res:Response,next:NextFunction){
        const data = await this.companyService.findByName(req.body.company_name)
        console.log(req.body.company_name)
        if(data){
            return res.json({message:"Name unique bo'lishi kerak!"})
        }
        
        next()
    }
}