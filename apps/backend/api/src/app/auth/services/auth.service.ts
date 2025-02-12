import { Injectable } from '@nestjs/common'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ISignAuthPayload, ISignAuthResponse } from '@svvs/interfaces'

@Injectable()
export class AuthService {

  async login(signInPayload: ISignAuthPayload): Promise<ISignAuthResponse> {
      return
    // {
    //     accessToken
    //     expiresIn
    //     id
    //   }
  }
}
