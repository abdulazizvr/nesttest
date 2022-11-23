import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { TechnologyService } from "./technology.service";
import { createTechnologyDto } from "./dto/create-technology.dto";
import { updateTechnologyDto } from "./dto/update-technology.dto";


@Controller('technology')
export class TechnologyController{
    constructor(private readonly technologyService: TechnologyService){}
    @Post()
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    create(@Body() createTechnologyDto: createTechnologyDto) {
        return this.technologyService.create(createTechnologyDto);
    }
    @Get()
    getAll() {
        return this.technologyService.getAll()
    }
    @Get(':id')
    findOne(@Param('id') id:string){
        return this.technologyService.findById(id)
    }
    @Put(':id')
    @UsePipes(ValidationPipe)
    update(@Param('id') id: string, @Body() updateTechnologyDto: updateTechnologyDto) {
        return this.technologyService.update(id, updateTechnologyDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.technologyService.remove(id);
      }
}