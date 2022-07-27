import { TodoDto } from './dto/todo.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  // create todo
  @Post()
  async createTodo(@Body() todoDto: TodoDto): Promise<void> {
    return await this.todoService.createTodo(todoDto);
  }
  // get todo list
  @Get()
  async getTodoList(): Promise<Todo[]> {
    return await this.todoService.getTodoList();
  }
  // delete todo
  @Delete('/:id')
  async deleteTodo(@Param('id') id: number): Promise<void> {
    return await this.todoService.deleteTodo(id);
  }
  // update todo
  @Patch('/:id')
  async updateTodo(
    @Param('id') id: number,
    @Body() todoDto: TodoDto
  ): Promise<void> {
    return await this.todoService.updateTodo(id, todoDto);
  }
  // update todo status
  @Patch('/status/:id')
  async updateTodoStatus(@Param('id') id: number): Promise<boolean> {
    return await this.todoService.updateStatus(id);
  }
}
