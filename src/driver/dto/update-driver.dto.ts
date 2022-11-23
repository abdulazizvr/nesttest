import { IsNumber, IsString } from "class-validator";

export class updateDriverDto {
    @IsString()
    readonly first_name?:string;
    @IsString()
    readonly last_name?:string;
    @IsNumber()
    readonly age?:number;
    @IsString()
    readonly company_id?:string;
    @IsString()
    readonly technology_id?:string;
}