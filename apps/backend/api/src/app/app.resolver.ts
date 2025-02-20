// import { Query, Resolver } from '@nestjs/graphql'
//
//
// @Resolver('app')
// export class AppResolver {
//
//   @Query('test')
//   async getData() {
//     return `It's GraphQL response`
//   }
// }


import GraphQLJSON from 'graphql-type-json'
import { GraphQLScalarType } from 'graphql/type'
import { Kind } from 'graphql/language'

export const resolverMap = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value: Date) {
        return value.toISOString() // Convert outgoing Date to integer for JSON
    },
    parseValue(value: string) {
        return new Date(value) // Convert incoming integer to Date
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        // Convert hard-coded AST string to integer and then to Date
        return new Date(ast.value)
      }
      // Invalid hard-coded value (not an integer)
      return null
    },
  }),
  JSON: GraphQLJSON,
}


// export const resolverMap = {
//   Date: new GraphQLScalarType({
//     name: 'Date',
//     description: 'Date custom scalar type',
//     serialize(value) {
//       if (value instanceof Date) {
//         return value.getTime() // Convert outgoing Date to integer for JSON
//       }
//       throw Error('GraphQL Date Scalar serializer expected a `Date` object')
//     },
//     parseValue(value) {
//       if (typeof value === 'number') {
//         return new Date(value) // Convert incoming integer to Date
//       }
//       throw new Error('GraphQL Date Scalar parser expected a `number`')
//     },
//     parseLiteral(ast) {
//       if (ast.kind === Kind.INT) {
//         // Convert hard-coded AST string to integer and then to Date
//         return new Date(parseInt(ast.value, 10))
//       }
//       // Invalid hard-coded value (not an integer)
//       return null
//     },
//   }),
//   JSON: GraphQLJSON,
// }



