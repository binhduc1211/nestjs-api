import { Controller, Get, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUser(): Promise<User[]> {
    const result = await this.usersService.getUsers();
    return result;
  }
}
