import { Resolver } from '@nestjs/graphql'
import { UserService } from '../services/user.service'
import { UserEntity } from '../entities/user.entity'
import { CurrentUser } from '../decorators/user.decorator'

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService
  ){}

  async whoAmI(@CurrentUser() user: UserEntity) {
    return this.userService.findOneById(user.id)
  }
}
