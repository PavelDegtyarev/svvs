import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { environment } from '../environments/environments'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { AppResolver } from './app.resolver'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environment.connection
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: true,
      // context: ({req}) => ({req})
    })
  ],
  controllers: [AppController],
  providers: [AppResolver],
})
export class AppModule {}
