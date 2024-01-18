import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { JWT_CONSTANTS } from 'src/constants';
import { UserModule } from 'src/user/user.module';

import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { UserService } from 'src/user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/user/user.model';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: JWT_CONSTANTS.secret,
      signOptions: { expiresIn: '1h' },
    }),
    MongooseModule.forFeature([
      {
        name: 'user',
        schema: UserSchema,
      },
    ]),
  ],
  providers: [AuthService, UserService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
