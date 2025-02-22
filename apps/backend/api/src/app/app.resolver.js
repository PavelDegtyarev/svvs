"use strict";
// import { Resolver } from '@nestjs/graphql'
//
//
// @Resolver('app')
// export class AppResolver {
//
//   // @Query('test')
//   // async getData() {
//   //   return `It's GraphQL response`
//   // }
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolverMap = void 0;
var graphql_type_json_1 = require("graphql-type-json");
var type_1 = require("graphql/type");
var language_1 = require("graphql/language");
exports.resolverMap = {
    Date: new type_1.GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        serialize: function (value) {
            if (value instanceof Date) {
                return value.getTime(); // Convert outgoing Date to integer for JSON
            }
            throw Error('GraphQL Date Scalar serializer expected a `Date` object');
        },
        parseValue: function (value) {
            if (typeof value === 'number') {
                return new Date(value); // Convert incoming integer to Date
            }
            throw new Error('GraphQL Date Scalar parser expected a `number`');
        },
        parseLiteral: function (ast) {
            if (ast.kind === language_1.Kind.INT) {
                // Convert hard-coded AST string to integer and then to Date
                return new Date(parseInt(ast.value, 10));
            }
            // Invalid hard-coded value (not an integer)
            return null;
        },
    }),
    JSON: graphql_type_json_1.default,
};
