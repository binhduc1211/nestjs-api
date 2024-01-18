import { UseZodGuard } from 'nestjs-zod';
import { Controller, Post, UseGuards, Body, Request } from '@nestjs/common';

import { AuthService } from './auth.service';
import { User } from 'src/user/user.model';
import { CredentialsDto } from './auth.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @UseZodGuard('body', CredentialsDto)
  @Post('/login')
  async login(@Request() user) {
    return this.authService.login(user);
  }

  @Post('/register')
  async createUser(@Body() credentials: CredentialsDto): Promise<User> {
    return this.authService.register(
      credentials.username,
      credentials.password,
    );
  }
}
