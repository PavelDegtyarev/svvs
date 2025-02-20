import { Query, Resolver } from '@nestjs/graphql'
import { UserService } from '../services/user.service'
import { UserEntity } from '../entities/user.entity'
import { CurrentUser } from '../decorators/user.decorator'
import { UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from '../guards/gql.auth-guard'

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService
  ){}

  @Query('user')
  @UseGuards(GqlAuthGuard)
  async whoAmI(@CurrentUser() user: UserEntity) {
    return await this.userService.findOneById(user.id)
  }
}
