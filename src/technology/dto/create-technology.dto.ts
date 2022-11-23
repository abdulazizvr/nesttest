import { IsNumber, IsString, Length } from "class-validator";

export class createTechnologyDto {
    @IsString()
    @Length(3,255)
    readonly technology_name:string;
    @IsNumber()
    readonly price:number;
    @IsString()
    readonly builder_id:string;
    @IsString()
    readonly company_id:string;
}