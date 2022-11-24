import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import {Observable} from "rxjs"
import { tap } from  'rxjs/operators'
import { CompanyModule } from "src/company/company.module"
import { CompanyService } from "src/company/company.service"
import { Company } from "src/company/schemas/company.schema"
@Injectable()
export class CheckCompanyInterceptor implements NestInterceptor{
    constructor(
        private readonly companyService: CompanyService   
        ){}
    async intercept(context: ExecutionContext, next: CallHandler):Promise<Observable<string>> {
        const req = context.switchToHttp().getRequest()
        const res = context.switchToHttp().getResponse()
        const data = await this.companyService.findById(req.body.company_id)
        if(!data){
            res.json({message:'Id is Incorrect. Company_id not belong to  Company'})
        }else{
            const now = Date.now()
            return next
            .handle()
            .pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)))
        }
    }
}