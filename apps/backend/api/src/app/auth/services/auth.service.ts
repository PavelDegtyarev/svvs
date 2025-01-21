import { Injectable } from '@nestjs/common'
import { ISignAuthPayload, ISignAuthResponse } from '@svvs/interfaces'

@Injectable()
export class AuthService {

  async login(signInPayload: ISignAuthPayload): Promise<ISignAuthResponse> {
      return
  }
}
