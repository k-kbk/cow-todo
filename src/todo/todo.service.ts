import { TodoDto } from './dto/todo.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>
  ) {}
  // create todo
  async createTodo(todoDto: TodoDto): Promise<void> {
    await this.todoRepository.create(todoDto).save();
    return;
  }
  // get todo list
  async getTodoList(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }
  // delete todo
  async deleteTodo(id: number): Promise<void> {
    const data = await this.todoRepository.findOneBy({ id });
    if (!data) {
      throw new BadRequestException();
    }
    await this.todoRepository.delete({ id });
    return;
  }
  // update todo
  async updateTodo(id: number, todoDto: TodoDto): Promise<void> {
    const { content } = todoDto;
    const data = await this.todoRepository.findOneBy({ id });
    if (!data) {
      throw new BadRequestException();
    }
    await this.todoRepository.update(id, { content });
    return;
  }
  // update todo status
  async updateStatus(id: number): Promise<boolean> {
    const data = await this.todoRepository.findOneBy({ id });
    if (!data) {
      throw new BadRequestException();
    }
    await this.todoRepository.update(id, { isCompleted: !data.isCompleted });
    return !data.isCompleted;
  }
}
