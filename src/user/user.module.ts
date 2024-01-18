import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserService } from './user.service';
import { UserSchema } from './user.model';
import { UserController } from './user.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'user',
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
