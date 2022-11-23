import {  IsMongoId, IsNotEmpty, IsNumber, IsString } from "class-validator";
export class createBuilderDto {
    @IsString()
    @IsNotEmpty()
    readonly first_name:string;
    @IsString()
    readonly last_name:string;
    @IsNumber()
    readonly salary:number;
    @IsMongoId({message:"Company_id Mongo_id siga mos emas"})
    readonly company_id:string;
}