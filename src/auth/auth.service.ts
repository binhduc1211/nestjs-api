import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Injectable, NotAcceptableException } from '@nestjs/common';

import { User } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUserByUserName(username);
    if (!user) return null;
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    if (user && passwordValid) {
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(username: string, password: string): Promise<User> {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    return this.usersService.createUser(username, hashedPassword);
  }
}
