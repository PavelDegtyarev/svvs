import { DataSource } from "typeorm"
import "reflect-metadata"
// import dotenv from 'dotenv'
//
// dotenv.config()

const AppDataSource =  new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "123456",
  database: "SVVS_DB",
  // synchronize: true,
  // logging: true,
  entities: [
    // 'dist/apps/backend/api/src/**/*.entity{.ts, .js}',
    'apps/backend/api/src/**/*.entity{.ts, .js}',
    // where to find files entities when the script backend:api:entities is run
  ],
  migrations: [
    // 'dist/apps/backend/api/src/migrations/*{.ts, .js}',
    'apps/backend/api/src/migrations/*{.ts, .js}',
    // where to find files migrations when the script backend:api:migrations:run is run

  ],
  // cli: {
  //   'migrationsDir': '/apps/backend/api/src/migrations',
  //   // where to put files when the script backend:api:migration:create is run
  // },
})
export default AppDataSource

// AppDataSource.initialize()
//   .then(() => {
//     console.log("Data Source has been initialized!")
//   })
//   .catch((err) => {
//     console.error("Error during Data Source initialization", err)
//   })



