import { IsNumber, IsString } from "class-validator";

export class updateTechnologyDto {
    @IsString()
    readonly technology_name?:string;
    @IsNumber()
    readonly price?:number;
    @IsString()
    readonly builder_id?:string;
    @IsString()
    readonly company_id?:string;
}