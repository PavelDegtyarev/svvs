import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { UserEntity } from '../entities/user.entity'


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ){}

  async find(): Promise<UserEntity[]> {
    return await this.userRepository.find()
  }

  async findOneById(id: number): Promise<UserEntity> {
    return await (this.userRepository.findOneBy({id})) || null
  }

  async findByUserName(username: string): Promise<UserEntity>{
    const users = await this.userRepository.findBy({username})
    return users.length === 1 ? users[0] : null
  }

  async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
    const newUser = await this.userRepository.create(user)
    return this.userRepository.save(newUser)
  }
}
