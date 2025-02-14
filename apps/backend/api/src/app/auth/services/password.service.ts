import {Injectable} from '@nestjs/common'
import * as bcrypt  from 'bcryptjs'

@Injectable()
export class PasswordService {

  private saltRound = 10

  getHash(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRound)
  }

  compareHash(password: string, passwordHash: string): Promise<boolean> {
    return bcrypt.compare(password, passwordHash)
  }
}
