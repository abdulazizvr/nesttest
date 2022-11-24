import {Controller,Get, Post,Body, Param, Put, Delete, UseFilters, UsePipes,ValidationPipe} from '@nestjs/common'
import { BuilderService } from 'src/builder/builder.service';
import { HttpExceptionFilter } from 'src/errors/http-exception.filter';
import {CompanyService} from './company.service'
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')

export class CompanyController{
    constructor(
    private readonly companyService: CompanyService,
    private readonly builderService:BuilderService     
    ){}
    @Post()
    // @UseFilters(new HttpExceptionFilter())
    @UsePipes(ValidationPipe)
    create(@Body() createCompanyDto: CreateCompanyDto) {
        try{
            return this.companyService.create(createCompanyDto);
        }catch(error){
            throw new Error(error)
        }
    }
    @Get()
    getAll() {
        return this.companyService.getAll()
    }
    @Get(':id')
    findOne(@Param('id') id:string){
        return this.companyService.findById(id)
    }
    @Get('/builders/:id')
    getAllBuilders(@Param('id') id:string) {
        return this.builderService.getAllBuilders(id)
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
        return this.companyService.update(id, updateCompanyDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.companyService.remove(id);
    }
}