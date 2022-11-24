import { IsNotEmpty, IsString } from "class-validator";

export class CreateCompanyDto {
    @IsNotEmpty()
    @IsString()
    readonly company_name:string;
    @IsNotEmpty()
    @IsString()
    readonly adress:string;
    @IsNotEmpty()
    @IsString()
    readonly phone:string;
}