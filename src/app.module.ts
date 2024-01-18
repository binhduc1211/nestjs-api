import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nbducdev:SmEynissPN6WXtfc@cluster0.wc9yw7i.mongodb.net/anhtt',
    ),
    UserModule,
    AuthModule,
    TodoModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
