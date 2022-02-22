import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { UserPayLoad } from './models/userPayLoad';
import { JwtService } from '@nestjs/jwt';
import { userToken } from './models/userToken';
@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}
  login(user: User): userToken {
    const payLoad: UserPayLoad = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };
    const jwtToken = this.jwtService.sign(payLoad);

    return {
      acess_token: jwtToken,
    }
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (user) {
      const isPassawordValid = await bcrypt.compare(password, user.password);

      if (isPassawordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }
    throw new Error('Email ou senha inválida');
  }
}
