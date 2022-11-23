import {Controller,Get, Post,Body, Param, Put, Delete} from '@nestjs/common'
import { BuilderService } from 'src/builder/builder.service';
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
    create(@Body() createCompanyDto: CreateCompanyDto) {
        return this.companyService.create(createCompanyDto);
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