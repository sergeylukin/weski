import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResortsService } from './resorts.service';
import { CreateResortDto } from './dto/create-resort.dto';
import { UpdateResortDto } from './dto/update-resort.dto';

@Controller('resorts')
export class ResortsController {
  constructor(private readonly resortsService: ResortsService) {}

  @Post()
  create(@Body() createResortDto: CreateResortDto) {
    return this.resortsService.create(createResortDto);
  }

  @Get()
  findAll() {
    return this.resortsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resortsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResortDto: UpdateResortDto) {
    return this.resortsService.update(+id, updateResortDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resortsService.remove(+id);
  }
}
