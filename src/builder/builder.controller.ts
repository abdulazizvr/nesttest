import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { BuilderService } from "./builder.service";
import { createBuilderDto } from "./dto/create-builder.dto";
import { updateBuildingDto } from "./dto/update-builder.dto";
import { CheckCompanyInterceptor } from "src/interceptors/check_id.interceptor";
@Controller('builder')
export class BuilderController{
    constructor(private readonly builderService: BuilderService){}
    @Post()
    @UseInterceptors(CheckCompanyInterceptor)
    @UsePipes(ValidationPipe)
    create(@Body() createBuilderDto: createBuilderDto) {
        return this.builderService.create(createBuilderDto);
    }
    @Get()
    getAll() {
        return this.builderService.getAll()
    }
    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id:string){
        return this.builderService.findById(id)
    }
    @Put(':id')
    @UsePipes(ValidationPipe)
    update(@Param('id') id: string, @Body() updatebuilderDto: updateBuildingDto) {
        return this.builderService.update(id, updatebuilderDto);
    }
    
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.builderService.remove(id);
      }
    
}