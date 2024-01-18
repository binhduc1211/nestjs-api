import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User, UserDocument } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
  ) {}
  async createUser(username: string, password: string): Promise<User> {
    return this.userModel.create({
      username,
      password,
    });
  }
  async getUserByUserName(username: string): Promise<User> {
    return this.userModel.findOne({ username });
  }

  async getUsers(): Promise<User[]> {
    return this.userModel.find({});
  }
}
