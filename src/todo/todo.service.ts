import { TodoDto } from './dto/todo.dto';
import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}
  // create todo
  async createTodo(todoDto: TodoDto): Promise<void> {
    await this.todoRepository.create(todoDto).save();
  }
  // get todo list
  async getTodoList(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }
  // delete todo
  async deleteTodo(id: number): Promise<void> {
    await this.todoRepository.delete({ id });
  }
  // update todo
  async updateTodo(id: number, todoDto: TodoDto): Promise<void> {
    const { content } = todoDto;
    await this.todoRepository.update(id, { content });
  }
  // update todo status
  async updateStatus(id: number): Promise<boolean> {
    const ex = await this.todoRepository.findOneBy({ id });
    await this.todoRepository.update(id, { isCompleted: !ex.isCompleted });
    return !ex.isCompleted;
  }
}
