import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto.js';

@Controller('tasks')
export class AppController {
  @Get(':id')
  getTask(@Param('id', ParseIntPipe) id: number) {
    return `Task encontrada ${id}`;
  }

  @Post()
  createTask(@Body() body: CreateTaskDto) {
    return `Tarefa criada com o título: ${body.title} e status: ${body.completed}`;
  }
}
