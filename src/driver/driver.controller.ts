import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { DriverService } from "./driver.service";
import { createDriverDto } from "./dto/create-driver.dto";
import { updateDriverDto } from "./dto/update-driver.dto";


@Controller('driver')
export class DriverController{
    constructor(private readonly driverService: DriverService){}
    @Post()
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    create(@Body() createDriverDto: createDriverDto) {
        return this.driverService.create(createDriverDto);
    }
    @Get()
    getAll() {
        return this.driverService.getAll()
    }
    @Get(':id')
    findOne(@Param('id') id:string){
        return this.driverService.findById(id)
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() updateDriverDto: updateDriverDto) {
        return this.driverService.update(id, updateDriverDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.driverService.remove(id);
      }
}