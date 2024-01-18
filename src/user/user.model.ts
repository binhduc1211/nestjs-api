import { Document } from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    required: true,
  })
  username: string;
  @Prop({
    required: true,
  })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
