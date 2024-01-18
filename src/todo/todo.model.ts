import { Document } from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop({
    required: true,
  })
  content: string;
  @Prop({
    default: false,
  })
  done: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
