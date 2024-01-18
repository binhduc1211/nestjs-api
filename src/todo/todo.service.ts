import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoDocument, Todo } from './todo.model';
import { GetTodoDto } from './todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel('todo') private readonly todoModel: Model<TodoDocument>,
  ) {}

  async createTodo(todo: { content: string }): Promise<Todo> {
    const newTodo = new this.todoModel(todo);
    return newTodo.save();
  }
  async getTodoById(id: string): Promise<Todo> {
    return this.todoModel.findById(id);
  }

  async getTodo({ page, limit, textSearch }: GetTodoDto): Promise<Todo[]> {
    return this.todoModel
      .find({
        content: { $regex: new RegExp(`.*${textSearch}.*`), $options: 'i' },
      })
      .skip((page - 1) * limit)
      .limit(limit);
  }
}
