import { Module } from '@nestjs/common';
import { UserService } from '../users/services/user.service.ts'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'

import { AuthService } from './services/auth.service.ts'
import { environment } from '../../environments/environment.ts'
import { AuthResolver } from './resolvers/auth.resolver'
import { PasswordService } from './services/password.service'
import { JwtStrategy } from './services/jwt.strategy'

@Module({
  imports: [
    UserService,
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      privateKey: environment.jwt.secret,
      signOptions: {
        expiresIn: environment.jwt.expiresIn,
      }
    })
  ],
  providers: [AuthService, JwtStrategy, PasswordService, AuthResolver],
  exports: [
    AuthService,
    PassportModule,
  ],

})
export class AuthModule {}
