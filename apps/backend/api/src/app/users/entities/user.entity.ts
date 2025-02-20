
// import { IUser } from '@svvs/interfaces'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { IUser } from '../../../../../../../libs/shared/data-access/interfaces/src/lib/entities/users.interface'

@Entity({
  name: 'users'
})
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({length: 50, unique: true})
  username!: string

  @CreateDateColumn()
  created!: string

  @UpdateDateColumn()
  updated!: string

  @Column()
  email!: string

  @Column()
  password!: string

}
